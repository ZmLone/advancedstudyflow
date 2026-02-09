// GLOBAL STATE (Local cache for speed)
let USER_DATA = {
    completedTaskIds: [],
    manualAddedIds: [],
    prayerStreak: []
};

// 1. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    // Wait for Firebase to be ready (small delay to ensure module load)
    setTimeout(() => {
        loadUserDataFromFirebase();
    }, 500);
});

// --- FIREBASE FUNCTIONS ---

async function loadUserDataFromFirebase() {
    try {
        const docRef = window.doc(window.db, "users", window.userId);
        const docSnap = await window.getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            USER_DATA = docSnap.data();
        } else {
            // doc.data() will be undefined in this case, so we create it
            console.log("No such document! Creating new user...");
            await window.setDoc(docRef, USER_DATA);
        }
        initDashboard(); // Start the UI only after data loads
    } catch (e) {
        console.error("Error getting document:", e);
        // Fallback or Alert User
        alert("Could not connect to database. Check internet.");
    }
}

async function saveToFirebase(field, value, operation = 'set') {
    const docRef = window.doc(window.db, "users", window.userId);
    
    // Optimistic Update (Update local UI instantly)
    if (field === 'manualAddedIds') USER_DATA.manualAddedIds = value;
    if (field === 'completedTaskIds') USER_DATA.completedTaskIds = value;

    try {
        // Update Cloud
        await window.updateDoc(docRef, {
            [field]: value
        });
    } catch (e) {
        console.error("Error updating document: ", e);
    }
}

// --- DASHBOARD LOGIC (Same as before, but calls saveToFirebase) ---

function initDashboard() {
    const today = new Date();
    const currentPhase = determinePhase(today);
    
    updateHeaderQuotes();
    renderPhaseCard(currentPhase);
    generateSmartPlan(currentPhase);
    // Don't check exam alerts yet to keep it simple
}

// 2. PHASE LOGIC
function determinePhase(date) {
    const dateStr = date.toISOString().split('T')[0];
    if (dateStr >= MASTER_PLAN.phase1.start && dateStr <= MASTER_PLAN.phase1.end) return MASTER_PLAN.phase1;
    if (dateStr >= MASTER_PLAN.phase2.start && dateStr <= MASTER_PLAN.phase2.end) return MASTER_PLAN.phase2;
    return MASTER_PLAN.phase3;
}

// 3. RENDER MASTER CARD
function renderPhaseCard(phase) {
    document.getElementById('phase-name').innerText = phase.name.toUpperCase();
    const endDate = new Date(phase.end);
    const today = new Date();
    const diffTime = endDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    document.getElementById('days-left-count').innerText = `${diffDays} Days Left`;
    
    // Calculate simple progress based on points
    // (This requires summing completed points matching current phase)
    // For now, static or calculated from USER_DATA
}

// 4. VIEW SWITCHER
window.switchView = function(viewName) {
    // 1. Hide all views
    document.getElementById('dashboard-view').classList.add('hidden');
    document.getElementById('syllabus-view').classList.add('hidden');
    // Add this line if it's missing to ensure Analytics hides when you leave it:
    if(document.getElementById('analytics-view')) {
        document.getElementById('analytics-view').classList.add('hidden');
    }

    // 2. Show the selected view
    document.getElementById(`${viewName}-view`).classList.remove('hidden');

    // 3. Trigger specific logic for that view
    if(viewName === 'syllabus') renderSyllabus();
    if(viewName === 'analytics') renderAnalytics(); // <--- NO SLASHES HERE
}

// 5. RENDER SYLLABUS
function renderSyllabus(filterSubject = 'all') {
    const container = document.getElementById('syllabus-list');
    container.innerHTML = '';

    DAILY_TESTS.forEach(test => {
        if (filterSubject !== 'all' && test.subject !== filterSubject) return;

        const isCompleted = USER_DATA.completedTaskIds.includes(test.id);
        const isManual = USER_DATA.manualAddedIds.includes(test.id);
        
        const opacityClass = isCompleted ? 'opacity-50 grayscale' : 'opacity-100';
        const borderClass = isManual ? 'border-emerald-500' : 'border-zinc-700';
        
        const card = `
        <div class="bento-card p-4 ${borderClass} ${opacityClass} transition hover:border-zinc-500 relative group">
            <div class="flex justify-between items-start mb-2">
                <span class="text-[10px] font-bold uppercase tracking-wider text-zinc-500">${test.subject}</span>
                <span class="text-xs font-bold text-white">${test.points} pts</span>
            </div>
            <h4 class="font-bold text-sm text-zinc-200 mb-1">${test.name}</h4>
            <p class="text-xs text-zinc-400 line-clamp-2" title="${test.topic}">${test.topic}</p>
            <div class="mt-4 flex gap-2">
                ${!isCompleted ? `
                <button onclick="toggleManualAdd('${test.id}')" class="flex-1 text-xs py-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-600">
                    ${isManual ? '- Remove' : '+ Add'}
                </button>
                <button onclick="completeTask('${test.id}')" class="flex-1 text-xs py-1.5 rounded bg-emerald-900/30 text-emerald-400 border border-emerald-900 hover:bg-emerald-900/50">
                    ✓ Done
                </button>
                ` : `<span class="text-xs text-emerald-500 font-bold">Completed</span>`}
            </div>
        </div>
        `;
        container.innerHTML += card;
    });
}

// 6. INTERACTION LOGIC (FIREBASE CONNECTED)
window.toggleManualAdd = function(taskId) {
    let newManualIds = [...USER_DATA.manualAddedIds];
    if (newManualIds.includes(taskId)) {
        newManualIds = newManualIds.filter(id => id !== taskId);
    } else {
        newManualIds.push(taskId);
    }
    // Update Local + Cloud
    saveToFirebase('manualAddedIds', newManualIds);
    renderSyllabus(); 
}

window.completeTask = function(taskId) {
    if (!USER_DATA.completedTaskIds.includes(taskId)) {
        const newCompletedIds = [...USER_DATA.completedTaskIds, taskId];
        const newManualIds = USER_DATA.manualAddedIds.filter(id => id !== taskId);
        
        // Update both fields in Firebase
        const docRef = window.doc(window.db, "users", window.userId);
        window.updateDoc(docRef, {
            completedTaskIds: newCompletedIds,
            manualAddedIds: newManualIds
        });
        
        // Update Local
        USER_DATA.completedTaskIds = newCompletedIds;
        USER_DATA.manualAddedIds = newManualIds;
        
        renderSyllabus();
        initDashboard(); // Re-calc progress
    }
}

// 7. SMART SUGGESTER
function generateSmartPlan(phase) {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; 

    // A. Manual Adds
    USER_DATA.manualAddedIds.forEach(id => {
        const test = DAILY_TESTS.find(t => t.id === id);
        if(test) taskList.innerHTML += createTaskCard(test.subject, test.name, test.points, "Manual Add", "emerald", "emerald");
    });

    // B. Smart Suggestions (Simple Fallback Logic)
    // Find uncompleted tasks matching current phase targets
    const needed = DAILY_TESTS.filter(t => 
        t.phase === 'phase1' && 
        !USER_DATA.completedTaskIds.includes(t.id) && 
        !USER_DATA.manualAddedIds.includes(t.id)
    );
    
    // Take top 3
    needed.slice(0, 3).forEach(test => {
        taskList.innerHTML += createTaskCard(test.subject, test.name, test.points, "Smart Suggestion", "blue", "blue");
    });
}

function createTaskCard(subject, title, points, badgeText, colorClass, badgeColor) {
    let borderClass = 'border-l-4 ';
    if(subject === 'Physics') borderClass += 'border-cyan-500';
    if(subject === 'Chemistry') borderClass += 'border-emerald-500';
    if(subject === 'Biology') borderClass += 'border-fuchsia-500';

    return `
    <div class="p-3 bg-zinc-900/50 rounded-lg ${borderClass} flex justify-between items-center group cursor-pointer hover:bg-zinc-800 transition mb-2">
        <div>
            <div class="flex gap-2 mb-1">
                <span class="text-[10px] px-1 rounded border uppercase font-bold text-${badgeColor}-200 border-${badgeColor}-800 bg-${badgeColor}-900">${badgeText}</span>
                <span class="text-[10px] text-zinc-400 font-bold uppercase">${subject}</span>
            </div>
            <p class="text-sm font-medium text-zinc-200">${title}</p>
        </div>
        <div class="flex items-center gap-3">
            <span class="text-xs font-bold text-zinc-500">${points} pts</span>
            <div class="w-5 h-5 rounded border border-zinc-600 group-hover:bg-emerald-500 transition"></div>
        </div>
    </div>
    `;
}

window.filterSyllabus = function(subject) {
    renderSyllabus(subject);
}
function updateHeaderQuotes() {
    // Keep your quote logic here
}

// Add this to your switchView function in app.js
// if(viewName === 'analytics') renderAnalytics();

// 7. ANALYTICS ENGINE
function renderAnalytics() {
    // A. Generate Heatmap (Last 30 Days)
    const heatmapContainer = document.getElementById('heatmap-grid');
    heatmapContainer.innerHTML = '';
    
    // Create 30 dummy days for now (In real app, map to USER_DATA.history)
    for(let i=0; i<30; i++) {
        const div = document.createElement('div');
        div.className = 'w-3 h-3 md:w-4 md:h-4 rounded bg-zinc-800'; // Default gray
        
        // Simulation: Randomly color some boxes to show "Activity"
        if(Math.random() > 0.7) div.className = 'w-3 h-3 md:w-4 md:h-4 rounded bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]';
        else if(Math.random() > 0.5) div.className = 'w-3 h-3 md:w-4 md:h-4 rounded bg-emerald-900';
        
        heatmapContainer.appendChild(div);
    }

    // B. Calculate Exam Readiness (AIATS-7)
    const aiats7Tests = DAILY_TESTS.filter(t => t.target === 'aiats7');
    calculateSubjectProgress(aiats7Tests, 'Physics', 'bar-aiats7-phy', 'stat-aiats7-phy');
    calculateSubjectProgress(aiats7Tests, 'Chemistry', 'bar-aiats7-chem', 'stat-aiats7-chem');
    // For Biology, we combine Botany/Zoology for the graph
    calculateSubjectProgress(aiats7Tests, ['Botany', 'Zoology'], 'bar-aiats7-bio', 'stat-aiats7-bio');

    // C. Overall Progress
    const totalTests = DAILY_TESTS.length;
    const completedTests = USER_DATA.completedTaskIds.length;
    const percent = Math.round((completedTests / totalTests) * 100) || 0;
    
    document.getElementById('overall-percent').innerText = `${percent}%`;
    document.getElementById('overall-circle').setAttribute('stroke-dasharray', `${percent}, 100`);
}

function calculateSubjectProgress(dataset, subject, barId, textId) {
    // Filter tasks for this subject (handle array for Bio)
    const subjectTasks = dataset.filter(t => Array.isArray(subject) ? subject.includes(t.subject) : t.subject === subject);
    
    if(subjectTasks.length === 0) return;

    const totalPoints = subjectTasks.reduce((sum, t) => sum + t.points, 0);
    const completedPoints = subjectTasks
        .filter(t => USER_DATA.completedTaskIds.includes(t.id))
        .reduce((sum, t) => sum + t.points, 0);

    const percent = Math.round((completedPoints / totalPoints) * 100) || 0;

    // Update DOM
    document.getElementById(textId).innerText = `${percent}%`;
    document.getElementById(barId).style.width = `${percent}%`;
}
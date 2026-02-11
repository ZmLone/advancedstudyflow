/* --- dashboard.js --- */

// State Management
let plannedTasks = JSON.parse(localStorage.getItem('plannedTasks')) || [];
let dailyGoal = 0;

document.addEventListener('DOMContentLoaded', () => {
    initDashboard();
});

function initDashboard() {
    // 1. Get Analytics Data
    // We use today's simulated date or real date
    const analytics = generateSmartFocus('2026-02-12'); 
    dailyGoal = analytics.dailyTarget;

    // 2. Render Cards (Phase & Targets) - RESTORED
    const phaseInfo = determinePhase(new Date('2026-02-12'));
    renderPhaseCard(phaseInfo, analytics);
    renderTargetCards(analytics);

    // 3. Render Today's List (The Planner)
    renderPlannerList();
}

// --- RENDERING FUNCTIONS (CARDS) ---

function determinePhase(date) {
    const p1End = new Date('2026-03-08');
    const p2End = new Date('2026-03-15');

    if (date <= p1End) {
        return { name: "Phase 1", desc: "Foundation & AIATS 7", totalDays: 25 };
    } else if (date <= p2End) {
        return { name: "Phase 2", desc: "Bio & 12th Bridge", totalDays: 7 };
    } else {
        return { name: "Phase 3", desc: "Final Polish", totalDays: 12 };
    }
}

function renderPhaseCard(phase, analytics) {
    const container = document.getElementById('phase-card-container');
    if (!container) return;
    
    // Calculate Aggregate Phase Progress
    let totalPhasePoints = 0;
    let earnedPhasePoints = 0;

    // Sum points from all active targets
    if (analytics.activeTargets) {
        Object.values(analytics.activeTargets).forEach(target => {
            totalPhasePoints += target.totalPoints;
            earnedPhasePoints += target.earnedPoints;
        });
    }

    const percent = totalPhasePoints > 0 ? Math.round((earnedPhasePoints / totalPhasePoints) * 100) : 0;

    container.innerHTML = `
        <div class="phase-card">
            <div class="phase-header">
                <div class="phase-title">
                    <span>CURRENT PHASE</span>
                    <h2>${phase.name}: ${phase.desc}</h2>
                </div>
                <div class="phase-icon">
                    <i class="fas fa-layer-group" style="font-size:30px; opacity:0.8"></i>
                </div>
            </div>
            
            <div class="phase-progress-container">
                <div class="phase-progress-bar" style="width: ${percent}%"></div>
            </div>
            
            <div class="phase-stats">
                <div class="p-stat">
                    <h3>${percent}%</h3>
                    <span>Completed</span>
                </div>
                <div class="p-stat">
                    <h3>${analytics.daysLeft || 0}</h3>
                    <span>Days to Deadline</span>
                </div>
                <div class="p-stat">
                    <h3>${analytics.dailyTarget} pts</h3>
                    <span>Daily Velocity Needed</span>
                </div>
            </div>
        </div>
    `;
    
    // Animate bar
    setTimeout(() => {
        const bar = container.querySelector('.phase-progress-bar');
        if(bar) bar.style.width = `${percent}%`;
    }, 100);
}

function renderTargetCards(analytics) {
    const container = document.getElementById('targets-grid-container');
    if (!container) return;
    container.innerHTML = ''; // Clear previous

    if (!analytics.activeTargets) return;

    Object.entries(analytics.activeTargets).forEach(([key, target]) => {
        // Calculate Percentage
        const percent = target.totalPoints > 0 ? Math.round((target.earnedPoints / target.totalPoints) * 100) : 0;

        // Determine Status
        let status = "On Track";
        let statusClass = "status-track";
        
        if (target.dailyRate > 15 || (target.daysLeft < 5 && percent < 80)) { 
            status = "Lagging"; statusClass = "status-lag"; 
        }
        if (percent > 30 && target.daysLeft > 10) { 
            status = "Ahead"; statusClass = "status-ahead"; 
        }

        // Color Border Helper
        let borderClass = 'border-chemistry'; // Default
        if (target.title.includes('Bio')) borderClass = 'border-biology';
        if (target.title.includes('AIATS') || target.title.includes('Physics')) borderClass = 'border-physics';

        const cardHTML = `
            <div class="target-card ${borderClass}">
                <div class="t-header">
                    <div class="t-title">
                        <h4>${target.title}</h4>
                        <span>${target.totalPoints - target.earnedPoints} pts remaining</span>
                    </div>
                    <span class="status-badge ${statusClass}">${status}</span>
                </div>

                <div class="t-progress-bg">
                    <div class="t-progress-fill" style="width: ${percent}%; background: var(--secondary-color)"></div>
                </div>

                <div class="t-footer">
                    <span><i class="fas fa-chart-pie"></i> ${percent}% Done</span>
                    <span><i class="fas fa-clock"></i> ${target.daysLeft} Days Left</span>
                </div>
            </div>
        `;
        container.appendChild(parseHTML(cardHTML));
    });
}

function parseHTML(html) {
    const t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstChild;
}

// --- PLANNER LOGIC (TODAY'S FOCUS) ---

function renderPlannerList() {
    const listContainer = document.getElementById('smart-focus-list');
    const summaryLabel = document.getElementById('daily-points-summary');
    if (!listContainer) return;
    
    listContainer.innerHTML = '';

    let totalPlannedPoints = 0;
    let completedPoints = 0;

    if (plannedTasks.length === 0) {
        listContainer.innerHTML = '<li style="color:#888; text-align:center; padding: 20px;">No tasks planned yet. Use "Smart Fill" or go to Ongoing Targets to add topics.</li>';
    } else {
        plannedTasks.forEach((task, index) => {
            totalPlannedPoints += task.points;
            if (task.completed) completedPoints += task.points;

            const li = document.createElement('li');
            li.style.display = 'flex';
            li.style.alignItems = 'center';
            li.style.justifyContent = 'space-between';
            li.style.opacity = task.completed ? '0.5' : '1';
            li.style.textDecoration = task.completed ? 'line-through' : 'none';

            // Subject Color
            let color = '#3498db';
            if (task.subject.includes('Chem')) color = '#e74c3c';
            if (task.subject.includes('Bio')) color = '#2ecc71';

            const displayName = task.subTopic 
    ? `${task.id}: ${task.subTopic}` 
    : `${task.id} (Full Test)`;

li.innerHTML = `
    <div style="display:flex; align-items:center; gap:10px; flex:1;">
        <input type="checkbox" ${task.completed ? 'checked' : ''} 
            onchange="toggleTaskCompletion(${index})" 
            style="width:18px; height:18px; accent-color:var(--secondary-color); cursor:pointer;">
        
        <div>
            <span style="font-weight:600; font-size:14px; display:block;">${displayName}</span>
            <span style="font-size:11px; color:${color};">
                ${task.points} pts • ${task.chapter}
            </span>
        </div>
    </div>
    <i class="fas fa-trash" onclick="removeTask(${index})" style="color:#ccc; cursor:pointer; font-size:12px;"></i>
`;
            listContainer.appendChild(li);
        });
    }

    if(summaryLabel) {
        summaryLabel.innerHTML = `<strong>${completedPoints}</strong> / ${dailyGoal} Points Goal (${totalPlannedPoints} planned)`;
    }
}

// --- ACTIONS ---

function toggleTaskCompletion(index) {
    plannedTasks[index].completed = !plannedTasks[index].completed;
    
    const taskKey = `completed_${plannedTasks[index].id}`;
    if (plannedTasks[index].completed) {
        localStorage.setItem(taskKey, 'true');
    } else {
        localStorage.removeItem(taskKey);
    }

    localStorage.setItem('plannedTasks', JSON.stringify(plannedTasks));
    initDashboard(); // Re-render to update cards
}

function removeTask(index) {
    plannedTasks.splice(index, 1);
    localStorage.setItem('plannedTasks', JSON.stringify(plannedTasks));
    renderPlannerList();
}

/* --- Replace this function in dashboard.js --- */

function triggerSmartFill() {
    // 1. Calculate Current Load (Sum of all planned points)
    let currentPoints = plannedTasks.reduce((sum, t) => sum + t.points, 0);
    
    // 2. Get Recommendations from Engine
    const analytics = generateSmartFocus('2026-02-12');
    const needed = analytics.dailyTarget - currentPoints;

    if (needed <= 0) {
        alert("You have already planned enough points for today!");
        return;
    }

    // 3. Filter recommendations (THE NEW LOGIC)
    const newTasks = analytics.tasks.filter(recTask => {
        // Check if ANY part of this test ID is already in the planner.
        // This prevents Smart Fill from adding "DT-1 (Full)" if you already added "DT-1: Conductors".
        const isPartiallyPlanned = plannedTasks.some(existing => existing.id === recTask.id);
        
        // Return TRUE only if this test is completely new to the planner
        return !isPartiallyPlanned;
    });

    if (newTasks.length === 0) {
        alert("No suitable new tasks found to fill the gap. Try adding specific topics manually.");
        return;
    }

    // 4. Fill the gap
    let pointsAdded = 0;
    let tasksAddedCount = 0;

    for (const task of newTasks) {
        // Stop if we have met the goal
        if (pointsAdded >= needed) break;
        
        // Add full task to planner
        plannedTasks.push({
            ...task,
            completed: false,
            subTopic: null // Mark as a full test
        });
        
        pointsAdded += task.points;
        tasksAddedCount++;
    }

    // 5. Save & Render
    localStorage.setItem('plannedTasks', JSON.stringify(plannedTasks));
    renderPlannerList();
    alert(`Smart Engine added ${tasksAddedCount} tasks (${pointsAdded} points) to meet your goal.`);
}

// --- SYLLABUS MODAL (Keep strictly for manual backup) ---
function openSyllabusModal() {
    document.getElementById('syllabus-modal').classList.add('modal-active');
    renderSyllabusInModal();
}

function closeSyllabusModal() {
    document.getElementById('syllabus-modal').classList.remove('modal-active');
}

function renderSyllabusInModal() {
    const container = document.getElementById('syllabus-list-container');
    if(!container) return;
    container.innerHTML = '';

    Object.entries(syllabusDatabase).forEach(([key, card]) => {
        const h4 = document.createElement('h4');
        h4.innerText = card.title;
        h4.style.marginTop = '15px';
        h4.style.color = '#555';
        container.appendChild(h4);

        card.subjects.forEach(subject => {
            subject.chapters.forEach(chapter => {
                chapter.tests.forEach(test => {
                    const isDone = localStorage.getItem(`completed_${test.id}`);
                    const isPlanned = plannedTasks.some(t => t.id === test.id);
                    if (isDone) return;

                    const div = document.createElement('div');
                    div.style.padding = '8px';
                    div.style.borderBottom = '1px solid #eee';
                    div.style.cursor = 'pointer';
                    div.style.display = 'flex';
                    div.style.justifyContent = 'space-between';
                    
                    if (isPlanned) {
                        div.style.backgroundColor = '#f0f0f0';
                        div.style.color = '#999';
                    }

                    div.innerHTML = `<span>${test.id}: ${test.topics}</span>`;

                    if (!isPlanned) {
                        div.onclick = () => {
                             // Simple Add Logic
                             let pts = 2; // Default
                             if(subject.toLowerCase().includes('phy')) pts = 4;
                             if(subject.toLowerCase().includes('chem')) pts = 3;
                             
                             plannedTasks.push({
                                id: test.id, subject: subject.name, chapter: chapter.title, points: pts, completed: false
                             });
                             localStorage.setItem('plannedTasks', JSON.stringify(plannedTasks));
                             renderPlannerList();
                             closeSyllabusModal();
                        };
                        div.onmouseover = () => div.style.backgroundColor = '#eef';
                        div.onmouseout = () => div.style.backgroundColor = 'transparent';
                    }
                    container.appendChild(div);
                });
            });
        });
    });
}
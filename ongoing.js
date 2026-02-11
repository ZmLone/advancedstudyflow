/* --- ongoing.js --- */

// Configuration
const plannedTasks = JSON.parse(localStorage.getItem('plannedTasks')) || [];
const ACTIVE_TARGETS = ['aiats7', 'org_chem', 'bio_11']; // Phase 1 IDs

document.addEventListener('DOMContentLoaded', () => {
    renderCardsView();
});

// --- VIEW 1: RENDER CARDS ---
function renderCardsView() {
    const grid = document.getElementById('cards-grid');
    grid.innerHTML = '';

    ACTIVE_TARGETS.forEach(cardId => {
        const data = syllabusDatabase[cardId];
        if (!data) return;

        // Determine Card Color
        let borderClass = 'card-physics';
        if (data.title.toLowerCase().includes('chem')) borderClass = 'card-chemistry';
        if (data.title.toLowerCase().includes('bio')) borderClass = 'card-biology';
        if (cardId.includes('aiats')) borderClass = 'card-aiats';

        const card = document.createElement('div');
        card.className = `target-card ${borderClass}`;
        card.innerHTML = `
            <h3>${data.title}</h3>
            <p style="color:#666; font-size:13px;">Click to view Syllabus breakdown</p>
        `;
        card.onclick = () => showDetailsView(cardId);
        grid.appendChild(card);
    });
}

// --- VIEW 2: RENDER DETAILS (SUB-TOPICS) ---
function showDetailsView(cardId) {
    document.getElementById('cards-view').style.display = 'none';
    document.getElementById('details-view').style.display = 'block';

    const data = syllabusDatabase[cardId];
    document.getElementById('detail-title').innerText = data.title;
    
    const listContainer = document.getElementById('topics-list');
    listContainer.innerHTML = '';

    // Calculate Base Points for this subject
    let baseTestPoints = 2;
    if (data.title.toLowerCase().includes('physics')) baseTestPoints = 4;
    if (data.title.toLowerCase().includes('chem')) baseTestPoints = 3;

    data.subjects.forEach(subject => {
        subject.chapters.forEach(chapter => {
            chapter.tests.forEach(test => {
                
                // 1. SPLIT TOPICS BY COMMA
                // Example: "Charge, Conductors" -> ["Charge", "Conductors"]
                const subTopics = test.topics.split(',').map(s => s.trim());
                
                // 2. CALCULATE POINTS PER SUB-TOPIC
                // Example: 4 points / 2 subtopics = 2 points each
                const pointsPerSubTopic = parseFloat((baseTestPoints / subTopics.length).toFixed(1));

                // Create Test Block
                const dtBlock = document.createElement('div');
                dtBlock.className = 'dt-block';
                
                let html = `
                    <div class="dt-header">
                        <span>${test.id}</span>
                        <span style="font-size:12px; font-weight:400; color:#888;">${chapter.title}</span>
                    </div>
                `;

                // Render Each Sub-Topic Row
                subTopics.forEach(subTopicName => {
                    // Check if this SPECIFIC sub-topic is in plan
                    // We generate a unique ID: "DT-1_Conductors"
                    const uniqueSubId = `${test.id}_${subTopicName.replace(/\s+/g, '')}`;
                    const isPlanned = plannedTasks.some(t => t.uniqueId === uniqueSubId);

                    let btn = '';
                    if (isPlanned) {
                        btn = `<button class="remove-btn" onclick="toggleSubTopic('${uniqueSubId}')"><i class="fas fa-minus"></i> Remove</button>`;
                    } else {
                        btn = `<button class="add-btn" onclick="addSubTopic('${uniqueSubId}', '${test.id}', '${subTopicName}', ${pointsPerSubTopic}, '${subject.name}', '${chapter.title}')"><i class="fas fa-plus"></i> Add</button>`;
                    }

                    html += `
                        <div class="subtopic-row">
                            <div style="flex:1;">
                                <span style="font-size:13px; color:#444;">${subTopicName}</span>
                                <span style="font-size:10px; color:#888; margin-left:8px;">(${pointsPerSubTopic} pts)</span>
                            </div>
                            ${btn}
                        </div>
                    `;
                });

                dtBlock.innerHTML = html;
                listContainer.appendChild(dtBlock);
            });
        });
    });
}

function showCardsView() {
    document.getElementById('details-view').style.display = 'none';
    document.getElementById('cards-view').style.display = 'block';
}

// --- LOGIC: ADD/REMOVE SUB-TOPICS ---

function addSubTopic(uniqueId, testId, subTopicName, points, subject, chapter) {
    plannedTasks.push({
        uniqueId: uniqueId,   // New unique identifier
        id: testId,           // Keep original ID for reference
        subTopic: subTopicName, // Store the specific topic name
        subject: subject,
        chapter: chapter,
        points: points,       // Store the fractional points
        completed: false
    });
    saveAndRefreshDetails();
}

function toggleSubTopic(uniqueId) {
    const index = plannedTasks.findIndex(t => t.uniqueId === uniqueId);
    if (index > -1) {
        plannedTasks.splice(index, 1);
        saveAndRefreshDetails();
    }
}

function saveAndRefreshDetails() {
    localStorage.setItem('plannedTasks', JSON.stringify(plannedTasks));
    // Find current title to know which ID to refresh, or just look at DOM
    // Simplest is to re-render the view currently open. 
    // For now, we simply re-render the list based on the visible title.
    // (A quick hack to get ID back: iterate DB to find title match, or just use a global var)
    // Let's use a Global var for currentActiveCard
    if (window.currentActiveCard) {
        showDetailsView(window.currentActiveCard);
    }
}

// Hook showDetails to set the global var
const originalShowDetails = showDetailsView;
showDetailsView = function(cardId) {
    window.currentActiveCard = cardId;
    originalShowDetails(cardId);
}
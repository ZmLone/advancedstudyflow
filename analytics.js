/* --- analytics.js (Universal Independent Velocity Logic) --- */

// ==========================================
// 1. CONFIGURATION
// ==========================================
const POINTS_CONFIG = {
    PHYSICS: 4,
    CHEMISTRY: 3,
    BIOLOGY_STD: 2,
    BIOLOGY_HIGH: 3
};

const BIO_HIGH_WEIGHTAGE = [
    "Principles of Inheritance", "Molecular Basis", "Evolution",
    "Cell", "Biomolecules", "Ecosystem", "Human Health"
];

// DYNAMIC CONFIGURATION FOR ALL PHASES
const TARGET_CONFIG = {
    // PHASE 1 TARGETS
    "aiats7": {
        deadline: new Date("2026-02-22"), 
        startDate: new Date("2026-02-12"), // Active Now
        title: "AIATS 7"
    },
    "aiats6": {
        deadline: new Date("2026-03-08"), 
        startDate: new Date("2026-02-23"), // Starts later
        title: "AIATS 6"
    },
    "org_chem": {
        deadline: new Date("2026-03-08"), 
        startDate: new Date("2026-02-12"),
        title: "Organic Chem"
    },
    "bio_11": {
        deadline: new Date("2026-03-15"), 
        startDate: new Date("2026-02-12"),
        title: "Class 11 Bio"
    },

    // PHASE 2 & 3 TARGETS (Future Proofing)
    "phy_electro": {
        deadline: new Date("2026-03-15"),
        startDate: new Date("2026-03-09"),
        title: "Electrostatics"
    },
    "rem_chem": {
        deadline: new Date("2026-03-15"),
        startDate: new Date("2026-03-09"),
        title: "Remaining Chem"
    },
    "phy_11_sel": {
        deadline: new Date("2026-03-27"),
        startDate: new Date("2026-03-16"),
        title: "Class 11 Physics"
    }
};

// ==========================================
// 2. HELPER FUNCTIONS
// ==========================================
function getChapterPoints(subject, title) {
    const sub = subject.toLowerCase();
    if (sub.includes("physics")) return POINTS_CONFIG.PHYSICS;
    if (sub.includes("chemistry")) return POINTS_CONFIG.CHEMISTRY;
    
    if (sub.includes("botany") || sub.includes("zoology")) {
        const isHigh = BIO_HIGH_WEIGHTAGE.some(k => title.includes(k));
        return isHigh ? POINTS_CONFIG.BIOLOGY_HIGH : POINTS_CONFIG.BIOLOGY_STD;
    }
    return 2;
}

// ==========================================
// 3. CORE ENGINE (Independent Velocity)
// ==========================================

function generateSmartFocus(simulatedDate = null) {
    const today = simulatedDate ? new Date(simulatedDate) : new Date();
    
    // We will track data per TARGET (Card ID)
    let activeTargets = {}; 
    let globalDailyTarget = 0;
    let selectedTasks = [];
    let isGlobalPanic = false;

    // 1. ITERATE THROUGH EVERY CONFIGURED TARGET
    for (const [cardId, config] of Object.entries(TARGET_CONFIG)) {
        
        // A. Check Logic: Is this card active today?
        if (today < config.startDate) continue; // Too early
        
        // B. Check Logic: Is the deadline already passed?
        // (Optional: Keep it active if pending points exist, handled below)
        
        const cardData = syllabusDatabase[cardId];
        if (!cardData) continue;

        // C. Initialize Metrics for this Target
        activeTargets[cardId] = {
            title: config.title,
            deadline: config.deadline,
            totalPoints: 0,
            earnedPoints: 0,
            tasks: [],
            dailyRate: 0,
            daysLeft: 0
        };

        // D. Scan Syllabus to populate points & tasks
        cardData.subjects.forEach(subject => {
            subject.chapters.forEach(chapter => {
                const pts = getChapterPoints(subject.name, chapter.title);
                
                chapter.tests.forEach(test => {
                    const isDone = localStorage.getItem(`completed_${test.id}`) === 'true';
                    activeTargets[cardId].totalPoints += pts;

                    if (isDone) {
                        activeTargets[cardId].earnedPoints += pts;
                    } else {
                        activeTargets[cardId].tasks.push({
                            id: test.id,
                            subject: subject.name,
                            chapter: chapter.title,
                            points: pts,
                            cardId: cardId, // Tag task with its source
                            deadline: config.deadline
                        });
                    }
                });
            });
        });

        // E. CALCULATE INDEPENDENT VELOCITY
        const pending = activeTargets[cardId].totalPoints - activeTargets[cardId].earnedPoints;
        
        if (pending > 0) {
            const msPerDay = 1000 * 60 * 60 * 24;
            const daysToDeadline = Math.ceil((config.deadline - today) / msPerDay);
            
            // SUBTRACT 1 DAY BUFFER (The "Day Before" Rule)
            const effectiveDays = Math.max(0, daysToDeadline - 1);
            
            let rate = 0;
            if (effectiveDays <= 0) {
                // PANIC: Deadline is tomorrow or passed! Do everything NOW.
                rate = pending; 
                isGlobalPanic = true;
            } else {
                rate = Math.ceil(pending / effectiveDays);
            }

            activeTargets[cardId].dailyRate = rate;
            activeTargets[cardId].daysLeft = daysToDeadline;
            
            // Add to Global Goal
            globalDailyTarget += rate;
        }
    }

    // 2. SELECTION (The "Parallel Pipe" Logic)
    // We must pick tasks from EACH target to meet its SPECIFIC daily rate.

    for (const [cardId, data] of Object.entries(activeTargets)) {
        if (data.dailyRate <= 0) continue;

        let currentCardPoints = 0;
        
        // Sort tasks: High points first
        data.tasks.sort((a, b) => b.points - a.points);

        for (const task of data.tasks) {
            if (currentCardPoints >= data.dailyRate) break;
            
            selectedTasks.push(task);
            currentCardPoints += task.points;
        }
    }

    // 3. RETURN DATA
    return {
        dailyTarget: globalDailyTarget,
        tasks: selectedTasks, // Contains mixed tasks from AIATS, Org, Bio etc.
        isPanic: isGlobalPanic,
        activeTargets: activeTargets, // Useful for debugging or detailed stats
        daysLeft: 0 // (Legacy field, ignore)
    };
}
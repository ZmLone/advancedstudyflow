/* --- upcoming.js --- */

// --- CONFIGURATION ---
// Ensure this matches ongoing.js so you see consistent results
const SIMULATED_DATE = '2026-02-12'; 

// --- THE DATA (Same as Ongoing) ---
const studyPlan = [
    // PHASE 1 (Feb 12 - Mar 08)
    {
        id: "aiats7",
        title: "AIATS 7 Target",
        subject: "aiats",
        desc: "Prepare for AIATS 7 exam.",
        start: "2026-02-12",
        end: "2026-02-22",
        icon: "fa-clipboard-check"
    },
    {
        id: "aiats6",
        title: "AIATS 6 Target",
        subject: "aiats",
        desc: "Prepare for AIATS 6 exam.",
        start: "2026-02-23", // Future relative to Feb 12
        end: "2026-03-08",
        icon: "fa-clipboard-list"
    },
    {
        id: "org_chem",
        title: "Organic Chemistry",
        subject: "chemistry",
        desc: "Class 12th Organic (Excl. GOC)",
        start: "2026-02-12",
        end: "2026-03-08",
        icon: "fa-flask"
    },
    {
        id: "bio_11",
        title: "Class 11 Biology",
        subject: "biology",
        desc: "Complete Class 11 Biology Syllabus",
        start: "2026-02-12",
        end: "2026-03-15",
        icon: "fa-dna"
    },

    // PHASE 2 (Mar 09 - Mar 15)
    {
        id: "rem_chem",
        title: "Remaining Chemistry",
        subject: "chemistry",
        desc: "Complete rest of 11th/12th Chem.",
        start: "2026-03-09",
        end: "2026-03-15",
        icon: "fa-vial"
    },
    {
        id: "phy_electro",
        title: "Physics: Electro & Current",
        subject: "physics",
        desc: "Electrostatics & Current Electricity",
        start: "2026-03-09",
        end: "2026-03-15",
        icon: "fa-bolt"
    },

    // PHASE 3 (Mar 16 - Mar 27)
    {
        id: "phy_11_sel",
        title: "Class 11 Physics (Selected)",
        subject: "physics",
        desc: "Units, Motion, WPE, Gravitation, etc.",
        start: "2026-03-16",
        end: "2026-03-27",
        icon: "fa-atom"
    }
];

// --- MAIN LOGIC ---

function getToday() {
    if (SIMULATED_DATE) return new Date(SIMULATED_DATE);
    return new Date();
}

function renderUpcoming() {
    const today = getToday();
    const grid = document.getElementById('upcoming-grid');
    const dateDisplay = document.getElementById('ref-date-display');
    
    // Display Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.innerText = "Viewing from: " + today.toLocaleDateString('en-US', options);

    grid.innerHTML = '';

    // Filter Logic: Start Date is in the FUTURE (greater than today)
    const futureTargets = studyPlan.filter(item => {
        const start = new Date(item.start);
        start.setHours(0,0,0,0);
        today.setHours(0,0,0,0);
        return start > today;
    });

    // Sort by Start Date (Nearest first)
    futureTargets.sort((a, b) => new Date(a.start) - new Date(b.start));

    if (futureTargets.length === 0) {
        grid.innerHTML = '<p>No upcoming targets found. You are near the end!</p>';
        return;
    }

    // Generate HTML
    futureTargets.forEach(target => {
        const card = document.createElement('div');
        card.className = `target-card`;
        
        // Calculate days remaining until start
        const startDate = new Date(target.start);
        const timeDiff = startDate - today;
        const daysUntil = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

        // Click to view Syllabus Preview
        card.onclick = () => {
            window.location.href = `syllabus-details.html?id=${target.id}&mode=upcoming`;
        };

        card.innerHTML = `
            <h3><i class="fas ${target.icon}"></i> ${target.title}</h3>
            <p>${target.desc}</p>
            <div class="meta-info">
                <span class="starts-in">Starts in ${daysUntil} days</span>
                <span>${target.start}</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderUpcoming);
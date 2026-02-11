/* --- global.js --- */

// 1. Sidebar Logic (Existing)
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

function toggleSidebar() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
}

// 2. HEADER LOGIC (New)

// --- Configuration ---
// Set to '2026-02-19' to test Ramadan mode
const CURRENT_DATE = new Date(); 
const RAMADAN_START_DATE = new Date('2026-02-19');

// --- State ---
let userProfile = JSON.parse(localStorage.getItem('userProfile')) || { name: 'Student' };
let spiritualData = JSON.parse(localStorage.getItem('spiritualData')) || {};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Load Profile Name
    updateProfileDisplay();
    
    // Check Ramadan Status
    checkRamadanMode();

    // Load Today's Prayers
    loadDailyPrayers();
});

// --- Profile Functions ---
function openProfileModal() {
    document.getElementById('profile-modal').classList.add('modal-active');
    document.getElementById('username-input').value = userProfile.name;
}

function closeProfileModal() {
    document.getElementById('profile-modal').classList.remove('modal-active');
}

function saveProfile() {
    const name = document.getElementById('username-input').value;
    if (name) {
        userProfile.name = name;
        localStorage.setItem('userProfile', JSON.stringify(userProfile));
        updateProfileDisplay();
        closeProfileModal();
    }
}

function updateProfileDisplay() {
    // If you have a place to show the name in the header, update it here
    // For now, we store it for the leaderboard
    console.log("User is:", userProfile.name);
}

// --- Prayer / Ramadan Functions ---
function openPrayerModal() {
    document.getElementById('prayer-modal').classList.add('modal-active');
}

function closePrayerModal() {
    document.getElementById('prayer-modal').classList.remove('modal-active');
}

function checkRamadanMode() {
    const iconBtn = document.getElementById('prayer-icon-btn');
    const ramadanBadge = document.getElementById('ramadan-badge');
    const fastingSection = document.getElementById('fasting-section');

    if (CURRENT_DATE >= RAMADAN_START_DATE) {
        // 1. Change Icon Appearance
        iconBtn.innerHTML = '<i class="fas fa-moon"></i>'; // Change to Moon Icon
        iconBtn.style.color = "#d4af37"; // Force Gold
        
        // 2. Show Badge
        ramadanBadge.style.display = "block";
        
        // 3. Enable Fasting Toggle in Modal
        fastingSection.style.display = "block";
    } else {
        // Normal Mode
        iconBtn.innerHTML = '<i class="fas fa-mosque"></i>';
    }
}

function savePrayers() {
    const dateKey = CURRENT_DATE.toISOString().split('T')[0]; // YYYY-MM-DD
    
    const prayers = {
        fajr: document.getElementById('fajr').checked,
        dhuhr: document.getElementById('dhuhr').checked,
        asr: document.getElementById('asr').checked,
        maghrib: document.getElementById('maghrib').checked,
        isha: document.getElementById('isha').checked,
        fasting: document.getElementById('fasting-toggle').checked
    };

    spiritualData[dateKey] = prayers;
    localStorage.setItem('spiritualData', JSON.stringify(spiritualData));
    
    closePrayerModal();
    alert("Ma'sha'Allah! Progress recorded.");
}

function loadDailyPrayers() {
    const dateKey = CURRENT_DATE.toISOString().split('T')[0];
    const todayData = spiritualData[dateKey];

    if (todayData) {
        document.getElementById('fajr').checked = todayData.fajr;
        document.getElementById('dhuhr').checked = todayData.dhuhr;
        document.getElementById('asr').checked = todayData.asr;
        document.getElementById('maghrib').checked = todayData.maghrib;
        document.getElementById('isha').checked = todayData.isha;
        document.getElementById('fasting-toggle').checked = todayData.fasting;
    }
}
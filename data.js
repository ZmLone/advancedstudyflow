// CONFIGURATION: Points System
const POINTS = {
    Physics: 4,
    Chemistry: 3,
    Biology: 2
};

// MASTER PLAN: Your specific dates and targets
const MASTER_PLAN = {
    phase1: {
        name: "Phase 1: The Foundation",
        start: "2026-02-10",
        end: "2026-03-08",
        targets: [
            { id: "aiats7", name: "AIATS-7 Target", deadline: "2026-02-22", type: "urgent" },
            { id: "aiats6", name: "AIATS-6 Target", deadline: "2026-03-08", type: "high" },
            { id: "bio11", name: "Class 11 Biology", deadline: "2026-03-08", type: "concurrent" },
            { id: "orgChem", name: "Organic Chemistry", deadline: "2026-03-08", type: "concurrent" }
        ]
    },
    phase2: {
        name: "Phase 2: The Bridge",
        start: "2026-03-09",
        end: "2026-03-15",
        targets: [
            { id: "phy12gap", name: "Phy 12 (Electro/Current)", type: "gap_fill" },
            { id: "chemGap", name: "Chemistry Backlog", type: "gap_fill" },
            { id: "revision1", name: "Revision Cycle 1", type: "revision" }
        ]
    },
    phase3: {
        name: "Phase 3: Final Lap",
        start: "2026-03-16",
        end: "2026-03-27",
        targets: [
            { id: "phy11", name: "Phy 11 Selected", type: "gap_fill" },
            { id: "revision2", name: "Revision Cycle 2", type: "revision" }
        ]
    }
};

[cite_start]// EXAM SCHEDULE (For Notifications) [cite: 132, 138]
const EXAMS = [
    { name: "AIATS-7", date: "2026-03-22" }, // Note: Adjusted per your custom plan deadline of Feb 22
    { name: "AIATS-6", date: "2026-03-08" }
];

// DATA: Daily Tests (Truncated example - you will map the full 269 here)
// I have structured this so the Suggester can read it.
const DAILY_TESTS = [
    // =========================================
    // PHASE 1: THE FOUNDATION (Feb 10 - Mar 08)
    // Targets: AIATS 7, AIATS 6, Bio 11th, Org Chem
    // =========================================

    // --- AIATS 7: PHYSICS (Urgent: Feb 22) ---
    { id: "XII-100", subject: "Physics", name: "Daily Test 27", topic: "Ray Optics: Reflection, Spherical Mirrors", points: 4, phase: "phase1", target: "aiats7" },
    { id: "XII-102", subject: "Physics", name: "Daily Test 28", topic: "Ray Optics: TIR, Refraction at spherical surface", points: 4, phase: "phase1", target: "aiats7" },
    { id: "XII-103", subject: "Physics", name: "Daily Test 29", topic: "Ray Optics: Prism, Dispersion", points: 4, phase: "phase1", target: "aiats7" },
    { id: "XII-104", subject: "Physics", name: "Daily Test 30", topic: "Ray Optics: Optical Instruments (Eye, Microscope)", points: 4, phase: "phase1", target: "aiats7" },
    { id: "XII-105", subject: "Physics", name: "Daily Test 31", topic: "Wave Optics: Huygens Principle, Interference", points: 4, phase: "phase1", target: "aiats7" },
    { id: "XII-106", subject: "Physics", name: "Daily Test 32", topic: "Wave Optics: Diffraction, Polarization", points: 4, phase: "phase1", target: "aiats7" },
    { id: "XII-107", subject: "Physics", name: "Daily Test 33", topic: "Dual Nature: Photoelectric Effect", points: 4, phase: "phase1", target: "aiats7" },
    { id: "XII-108", subject: "Physics", name: "Daily Test 34", topic: "Dual Nature: Wave nature of matter", points: 4, phase: "phase1", target: "aiats7" },
    { id: "XII-109", subject: "Physics", name: "Daily Test 35", topic: "Atoms: Rutherford, Bohr Model", points: 4, phase: "phase1", target: "aiats7" },
    { id: "XII-110", subject: "Physics", name: "Daily Test 36", topic: "Nuclei: Mass Energy, Binding Energy", points: 4, phase: "phase1", target: "aiats7" },
    { id: "XII-111", subject: "Physics", name: "Daily Test 37", topic: "Semiconductors: Intrinsic/Extrinsic, Diode", points: 4, phase: "phase1", target: "aiats7" },
    { id: "XII-112", subject: "Physics", name: "Daily Test 38", topic: "Semiconductors: Rectifier, Special Diodes", points: 4, phase: "phase1", target: "aiats7" },

    // --- AIATS 7: CHEMISTRY ---
    { id: "XII-38", subject: "Chemistry", name: "Daily Test 10", topic: "p-Block: Group 15 (N2, HNO3, P)", points: 3, phase: "phase1", target: "aiats7" },
    { id: "XII-42", subject: "Chemistry", name: "Daily Test 11", topic: "p-Block: Group 16 (Ozone, Sulphur)", points: 3, phase: "phase1", target: "aiats7" },
    { id: "XII-46", subject: "Chemistry", name: "Daily Test 12", topic: "p-Block: Group 17 & 18", points: 3, phase: "phase1", target: "aiats7" },
    { id: "XII-101", subject: "Chemistry", name: "Daily Test 27", topic: "Biomolecules: Carbohydrates, Amino acids", points: 3, phase: "phase1", target: "aiats7" },

    // --- AIATS 7: BOTANY ---
    { id: "XII-67", subject: "Botany", name: "Daily Test 17", topic: "Organisms & Pop: Abiotic Factors, Adaptations", points: 2, phase: "phase1", target: "aiats7" },
    { id: "XII-71", subject: "Botany", name: "Daily Test 18", topic: "Organisms & Pop: Growth Models, Interactions", points: 2, phase: "phase1", target: "aiats7" },
    { id: "XII-75", subject: "Botany", name: "Daily Test 19", topic: "Ecosystem: Structure, Productivity", points: 2, phase: "phase1", target: "aiats7" },
    { id: "XII-79", subject: "Botany", name: "Daily Test 20", topic: "Ecosystem: Energy Flow, Pyramids", points: 2, phase: "phase1", target: "aiats7" },
    { id: "XII-83", subject: "Botany", name: "Daily Test 21", topic: "Biodiversity: Patterns, Importance", points: 2, phase: "phase1", target: "aiats7" },
    { id: "XII-87", subject: "Botany", name: "Daily Test 22", topic: "Biodiversity: Loss & Conservation", points: 2, phase: "phase1", target: "aiats7" },

    // --- AIATS 7: ZOOLOGY ---
    { id: "XII-84", subject: "Zoology", name: "Daily Test 21", topic: "Biotech Principles: Tools, Recombinant DNA", points: 2, phase: "phase1", target: "aiats7" },
    { id: "XII-88", subject: "Zoology", name: "Daily Test 22", topic: "Biotech Processes: Separation, Isolation", points: 2, phase: "phase1", target: "aiats7" },
    { id: "XII-91", subject: "Zoology", name: "Daily Test 23", topic: "Biotech Applications: Agriculture (Bt Cotton)", points: 2, phase: "phase1", target: "aiats7" },
    { id: "XII-94", subject: "Zoology", name: "Daily Test 24", topic: "Biotech Applications: Medicine (Insulin, Gene Therapy)", points: 2, phase: "phase1", target: "aiats7" },
    { id: "XII-97", subject: "Zoology", name: "Daily Test 25", topic: "Biotech Applications: Transgenic Animals, Ethics", points: 2, phase: "phase1", target: "aiats7" },

    // --- AIATS 6: PHYSICS (High Priority: Mar 08) ---
    { id: "XII-61", subject: "Physics", name: "Daily Test 16", topic: "Moving Charges: Magnetic Force", points: 4, phase: "phase1", target: "aiats6" },
    { id: "XII-65", subject: "Physics", name: "Daily Test 17", topic: "Moving Charges: Biot-Savart, Cyclotron", points: 4, phase: "phase1", target: "aiats6" },
    { id: "XII-69", subject: "Physics", name: "Daily Test 18", topic: "Moving Charges: Ampere Law, Solenoid", points: 4, phase: "phase1", target: "aiats6" },
    { id: "XII-73", subject: "Physics", name: "Daily Test 19", topic: "Moving Charges: Torque, Galvanometer", points: 4, phase: "phase1", target: "aiats6" },
    { id: "XII-77", subject: "Physics", name: "Daily Test 20", topic: "Magnetism: Bar Magnet, Gauss Law", points: 4, phase: "phase1", target: "aiats6" },
    { id: "XII-81", subject: "Physics", name: "Daily Test 21", topic: "Magnetism: Earth Magnetism, Materials", points: 4, phase: "phase1", target: "aiats6" },
    { id: "XII-85", subject: "Physics", name: "Daily Test 22", topic: "EMI: Faraday Law, Lenz Law", points: 4, phase: "phase1", target: "aiats6" },
    { id: "XII-89", subject: "Physics", name: "Daily Test 23", topic: "EMI: Eddy Currents, Inductance", points: 4, phase: "phase1", target: "aiats6" },
    { id: "XII-92", subject: "Physics", name: "Daily Test 24", topic: "AC: Resistor, Inductor, Capacitor", points: 4, phase: "phase1", target: "aiats6" },
    { id: "XII-95", subject: "Physics", name: "Daily Test 25", topic: "AC: LCR Circuit, Power, Transformers", points: 4, phase: "phase1", target: "aiats6" },
    { id: "XII-98", subject: "Physics", name: "Daily Test 26", topic: "EM Waves: Displacement Current, Spectrum", points: 4, phase: "phase1", target: "aiats6" },

    // --- AIATS 6: CHEMISTRY ---
    { id: "XII-96", subject: "Chemistry", name: "Daily Test 25", topic: "Amines: Nomenclature, Preparation", points: 3, phase: "phase1", target: "aiats6" },
    { id: "XII-99", subject: "Chemistry", name: "Daily Test 26", topic: "Amines: Chemical Reactions, Diazonium", points: 3, phase: "phase1", target: "aiats6" },
    { id: "XII-50", subject: "Chemistry", name: "Daily Test 13", topic: "d & f-Block: Properties, KMnO4, K2Cr2O7", points: 3, phase: "phase1", target: "aiats6" },
    { id: "XII-54", subject: "Chemistry", name: "Daily Test 14", topic: "d & f-Block: Lanthanoids, Actinoids", points: 3, phase: "phase1", target: "aiats6" },
    { id: "XII-58", subject: "Chemistry", name: "Daily Test 15", topic: "Coordination Compounds: Werner Theory, Isomerism", points: 3, phase: "phase1", target: "aiats6" },
    { id: "XII-62", subject: "Chemistry", name: "Daily Test 16", topic: "Coordination Compounds: VBT, CFT, Carbonyls", points: 3, phase: "phase1", target: "aiats6" },

    // --- AIATS 6: BOTANY ---
    { id: "XII-39", subject: "Botany", name: "Daily Test 10", topic: "Molecular Basis: DNA Structure, Packaging", points: 2, phase: "phase1", target: "aiats6" },
    { id: "XII-43", subject: "Botany", name: "Daily Test 11", topic: "Molecular Basis: Search for Genetic Material, Replication", points: 2, phase: "phase1", target: "aiats6" },
    { id: "XII-47", subject: "Botany", name: "Daily Test 12", topic: "Molecular Basis: Transcription", points: 2, phase: "phase1", target: "aiats6" },
    { id: "XII-51", subject: "Botany", name: "Daily Test 13", topic: "Molecular Basis: Genetic Code, Translation", points: 2, phase: "phase1", target: "aiats6" },
    { id: "XII-55", subject: "Botany", name: "Daily Test 14", topic: "Molecular Basis: Regulation (Lac Operon), HGP", points: 2, phase: "phase1", target: "aiats6" },
    { id: "XII-59", subject: "Botany", name: "Daily Test 15", topic: "Microbes: Household & Industrial", points: 2, phase: "phase1", target: "aiats6" },
    { id: "XII-63", subject: "Botany", name: "Daily Test 16", topic: "Microbes: Sewage, Biogas, Biofertilizers", points: 2, phase: "phase1", target: "aiats6" },

    // --- CONCURRENT TARGET: BIOLOGY (Class 11 Full) ---
    // (Sample set - add remaining Class 11 Bio tests here)
    { id: "XI-3", subject: "Botany", name: "Daily Test 1", topic: "Cell: The Unit of Life", points: 2, phase: "phase1", target: "bio11" },
    { id: "XI-7", subject: "Botany", name: "Daily Test 2", topic: "Cell: Organelles (Endomembrane)", points: 2, phase: "phase1", target: "bio11" },
    { id: "XI-11", subject: "Botany", name: "Daily Test 3", topic: "Cell: Mitochondria, Plastids", points: 2, phase: "phase1", target: "bio11" },
    { id: "XI-15", subject: "Botany", name: "Daily Test 4", topic: "Cell: Nucleus, Chromosomes", points: 2, phase: "phase1", target: "bio11" },
    { id: "XI-19", subject: "Botany", name: "Daily Test 5", topic: "Cell Cycle: Mitosis", points: 2, phase: "phase1", target: "bio11" },
    { id: "XI-23", subject: "Botany", name: "Daily Test 6", topic: "Cell Cycle: Meiosis", points: 2, phase: "phase1", target: "bio11" },
    { id: "XI-27", subject: "Botany", name: "Daily Test 7", topic: "Living World: Taxonomy", points: 2, phase: "phase1", target: "bio11" },
    { id: "XI-31", subject: "Botany", name: "Daily Test 8", topic: "Living World: Categories", points: 2, phase: "phase1", target: "bio11" },
    { id: "XI-35", subject: "Botany", name: "Daily Test 9", topic: "Biological Classification: Monera", points: 2, phase: "phase1", target: "bio11" },
    { id: "XI-39", subject: "Botany", name: "Daily Test 10", topic: "Biological Classification: Bacteria Types", points: 2, phase: "phase1", target: "bio11" },
    { id: "XI-43", subject: "Botany", name: "Daily Test 11", topic: "Biological Classification: Protista", points: 2, phase: "phase1", target: "bio11" },
    { id: "XI-47", subject: "Botany", name: "Daily Test 12", topic: "Biological Classification: Fungi Classes", points: 2, phase: "phase1", target: "bio11" },
    { id: "XI-51", subject: "Botany", name: "Daily Test 13", topic: "Biological Classification: Virus, Viroids", points: 2, phase: "phase1", target: "bio11" },
    { id: "XI-55", subject: "Botany", name: "Daily Test 14", topic: "Morphology: Root, Stem", points: 2, phase: "phase1", target: "bio11" },
    { id: "XI-59", subject: "Botany", name: "Daily Test 15", topic: "Morphology: Leaf, Inflorescence", points: 2, phase: "phase1", target: "bio11" },
    { id: "XI-63", subject: "Botany", name: "Daily Test 16", topic: "Morphology: Flower, Fruit", points: 2, phase: "phase1", target: "bio11" },
    { id: "XI-67", subject: "Botany", name: "Daily Test 17", topic: "Morphology: Seeds, Families", points: 2, phase: "phase1", target: "bio11" },
    { id: "XI-71", subject: "Botany", name: "Daily Test 18", topic: "Anatomy: Tissues, Xylem", points: 2, phase: "phase1", target: "bio11" },
    { id: "XI-75", subject: "Botany", name: "Daily Test 19", topic: "Anatomy: Phloem, Tissue Systems", points: 2, phase: "phase1", target: "bio11" },
    { id: "XI-79", subject: "Botany", name: "Daily Test 20", topic: "Anatomy: Internal Structures", points: 2, phase: "phase1", target: "bio11" },
    { id: "XI-83", subject: "Botany", name: "Daily Test 21", topic: "Anatomy: Secondary Growth", points: 2, phase: "phase1", target: "bio11" },
    // ... [Add remaining 11th Zoology Tests here following same pattern] ...

    // --- CONCURRENT TARGET: ORGANIC CHEMISTRY (Full) ---
    { id: "XI-90", subject: "Chemistry", name: "Daily Test 23", topic: "Organic Basics: Tetravalence, Nomenclature", points: 3, phase: "phase1", target: "orgChem" },
    { id: "XI-94", subject: "Chemistry", name: "Daily Test 24", topic: "Organic Basics: Isomerism, Fission", points: 3, phase: "phase1", target: "orgChem" },
    { id: "XI-98", subject: "Chemistry", name: "Daily Test 25", topic: "Organic Basics: Effects, Aromaticity", points: 3, phase: "phase1", target: "orgChem" },
    { id: "XI-102", subject: "Chemistry", name: "Daily Test 26", topic: "Organic Basics: Reaction Intermediates", points: 3, phase: "phase1", target: "orgChem" },
    { id: "XI-106", subject: "Chemistry", name: "Daily Test 27", topic: "Organic Basics: Mechanisms, Purification", points: 3, phase: "phase1", target: "orgChem" },
    { id: "XI-110", subject: "Chemistry", name: "Daily Test 28", topic: "Hydrocarbons: Alkanes", points: 3, phase: "phase1", target: "orgChem" },
    { id: "XI-114", subject: "Chemistry", name: "Daily Test 29", topic: "Hydrocarbons: Alkenes", points: 3, phase: "phase1", target: "orgChem" },
    { id: "XI-118", subject: "Chemistry", name: "Daily Test 30", topic: "Hydrocarbons: Alkynes, Aromatic", points: 3, phase: "phase1", target: "orgChem" },
    { id: "XII-66", subject: "Chemistry", name: "Daily Test 17", topic: "Haloalkanes: Classification, C-X Bond", points: 3, phase: "phase1", target: "orgChem" },
    { id: "XII-70", subject: "Chemistry", name: "Daily Test 18", topic: "Haloalkanes: Elimination vs Substitution", points: 3, phase: "phase1", target: "orgChem" },
    { id: "XII-74", subject: "Chemistry", name: "Daily Test 19", topic: "Haloalkanes: Aromatic Substitution", points: 3, phase: "phase1", target: "orgChem" },
    { id: "XII-78", subject: "Chemistry", name: "Daily Test 20", topic: "Alcohols: Nomenclature, Prep", points: 3, phase: "phase1", target: "orgChem" },
    { id: "XII-82", subject: "Chemistry", name: "Daily Test 21", topic: "Alcohols: Aromatic Prep, Reactions", points: 3, phase: "phase1", target: "orgChem" },
    { id: "XII-86", subject: "Chemistry", name: "Daily Test 22", topic: "Ethers: Prep, Properties", points: 3, phase: "phase1", target: "orgChem" },
    { id: "XII-90", subject: "Chemistry", name: "Daily Test 23", topic: "Aldehydes: Carbonyl Group, Prep", points: 3, phase: "phase1", target: "orgChem" },
    { id: "XII-93", subject: "Chemistry", name: "Daily Test 24", topic: "Carboxylic Acids: Nomenclature, Properties", points: 3, phase: "phase1", target: "orgChem" },


    // =========================================
    // PHASE 2: THE BRIDGE (Mar 09 - Mar 15)
    // Targets: Phy 12 (Electro/Current), Chem Backlog
    // =========================================
    { id: "XII-1", subject: "Physics", name: "Daily Test 1", topic: "Charges & Fields: Introduction", points: 4, phase: "phase2", target: "phy12gap" },
    { id: "XII-5", subject: "Physics", name: "Daily Test 2", topic: "Charges & Fields: Coulomb Law", points: 4, phase: "phase2", target: "phy12gap" },
    { id: "XII-9", subject: "Physics", name: "Daily Test 3", topic: "Charges & Fields: Electric Field", points: 4, phase: "phase2", target: "phy12gap" },
    { id: "XII-13", subject: "Physics", name: "Daily Test 4", topic: "Charges & Fields: Field Lines, Dipole", points: 4, phase: "phase2", target: "phy12gap" },
    { id: "XII-17", subject: "Physics", name: "Daily Test 5", topic: "Charges & Fields: Flux, Gauss Law", points: 4, phase: "phase2", target: "phy12gap" },
    { id: "XII-21", subject: "Physics", name: "Daily Test 6", topic: "Potential: Point Charge", points: 4, phase: "phase2", target: "phy12gap" },
    { id: "XII-25", subject: "Physics", name: "Daily Test 7", topic: "Potential: Equipotential, Potential Energy", points: 4, phase: "phase2", target: "phy12gap" },
    { id: "XII-29", subject: "Physics", name: "Daily Test 8", topic: "Potential: Conductors, Dielectrics", points: 4, phase: "phase2", target: "phy12gap" },
    { id: "XII-33", subject: "Physics", name: "Daily Test 9", topic: "Capacitance: Parallel Plate", points: 4, phase: "phase2", target: "phy12gap" },
    { id: "XII-37", subject: "Physics", name: "Daily Test 10", topic: "Capacitance: Combinations, Energy", points: 4, phase: "phase2", target: "phy12gap" },
    { id: "XII-41", subject: "Physics", name: "Daily Test 11", topic: "Current Electricity: Ohm Law, Drift", points: 4, phase: "phase2", target: "phy12gap" },
    { id: "XII-45", subject: "Physics", name: "Daily Test 12", topic: "Current Electricity: Resistors Series/Parallel", points: 4, phase: "phase2", target: "phy12gap" },
    { id: "XII-49", subject: "Physics", name: "Daily Test 13", topic: "Current Electricity: Cells, Internal Resistance", points: 4, phase: "phase2", target: "phy12gap" },
    { id: "XII-53", subject: "Physics", name: "Daily Test 14", topic: "Current Electricity: Kirchhoff Laws", points: 4, phase: "phase2", target: "phy12gap" },
    { id: "XII-57", subject: "Physics", name: "Daily Test 15", topic: "Current Electricity: Wheatstone, Meter Bridge", points: 4, phase: "phase2", target: "phy12gap" },

    // =========================================
    // PHASE 3: FINAL LAP (Mar 16 - Mar 27)
    // Targets: Phy 11 Selected, Final Revision
    // =========================================
    { id: "XI-1", subject: "Physics", name: "Daily Test 1", topic: "Units: Introduction, Errors", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-5", subject: "Physics", name: "Daily Test 2", topic: "Units: Significant Figures", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-9", subject: "Physics", name: "Daily Test 3", topic: "Units: Dimensions", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-13", subject: "Physics", name: "Daily Test 4", topic: "Motion Straight: Displacement, Velocity", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-17", subject: "Physics", name: "Daily Test 5", topic: "Motion Straight: Calculus, Graphs", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-21", subject: "Physics", name: "Daily Test 6", topic: "Motion Straight: Kinematic Equations", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-25", subject: "Physics", name: "Daily Test 7", topic: "Motion Straight: Gravity", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-29", subject: "Physics", name: "Daily Test 8", topic: "Motion Straight: Relative Velocity", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-33", subject: "Physics", name: "Daily Test 9", topic: "Motion Plane: Vectors", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-37", subject: "Physics", name: "Daily Test 10", topic: "Motion Plane: 2D Motion", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-41", subject: "Physics", name: "Daily Test 11", topic: "Motion Plane: Relative Velocity 2D", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-45", subject: "Physics", name: "Daily Test 12", topic: "Motion Plane: Projectile", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-49", subject: "Physics", name: "Daily Test 13", topic: "Motion Plane: Circular Motion", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-53", subject: "Physics", name: "Daily Test 14", topic: "Laws of Motion: Newton 1st Law", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-57", subject: "Physics", name: "Daily Test 15", topic: "Laws of Motion: Newton 2nd Law", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-61", subject: "Physics", name: "Daily Test 16", topic: "Laws of Motion: Newton 3rd Law", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-65", subject: "Physics", name: "Daily Test 17", topic: "Laws of Motion: Forces", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-69", subject: "Physics", name: "Daily Test 18", topic: "Laws of Motion: Friction", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-73", subject: "Physics", name: "Daily Test 19", topic: "Laws of Motion: Circular Dynamics", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-77", subject: "Physics", name: "Daily Test 20", topic: "Work Energy: Dot Product, Theorem", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-81", subject: "Physics", name: "Daily Test 21", topic: "Work Energy: Potential Energy", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-85", subject: "Physics", name: "Daily Test 22", topic: "Work Energy: Conservation", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-89", subject: "Physics", name: "Daily Test 23", topic: "Work Energy: Power", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-93", subject: "Physics", name: "Daily Test 24", topic: "Work Energy: Collisions", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-117", subject: "Physics", name: "Daily Test 30", topic: "Gravitation: Kepler Laws, Universal Law", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-121", subject: "Physics", name: "Daily Test 31", topic: "Gravitation: Potential, Satellites", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-124", subject: "Physics", name: "Daily Test 32", topic: "Solids: Stress, Strain, Hooke Law", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-127", subject: "Physics", name: "Daily Test 33", topic: "Solids: Elastic Moduli", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-137", subject: "Physics", name: "Daily Test 38", topic: "Thermal: Temp, Ideal Gas, Expansion", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-139", subject: "Physics", name: "Daily Test 39", topic: "Thermal: Specific Heat, Calorimetry", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-141", subject: "Physics", name: "Daily Test 40", topic: "Thermal: Conduction, Convection", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-143", subject: "Physics", name: "Daily Test 41", topic: "Thermal: Radiation, Newton Law", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-145", subject: "Physics", name: "Daily Test 42", topic: "Thermodynamics: Zeroth & First Law", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-147", subject: "Physics", name: "Daily Test 43", topic: "Thermodynamics: Processes", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-149", subject: "Physics", name: "Daily Test 44", topic: "Thermodynamics: Second Law, Engines", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-151", subject: "Physics", name: "Daily Test 45", topic: "Kinetic Theory: Ideal Gas, Equipartition", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-152", subject: "Physics", name: "Daily Test 46", topic: "Oscillations: SHM Intro", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-153", subject: "Physics", name: "Daily Test 47", topic: "Oscillations: Velocity, Acceleration", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-154", subject: "Physics", name: "Daily Test 48", topic: "Oscillations: Pendulum, Systems", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-155", subject: "Physics", name: "Daily Test 49", topic: "Waves: Introduction", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-156", subject: "Physics", name: "Daily Test 50", topic: "Waves: Speed, Displacement", points: 4, phase: "phase3", target: "phy11" },
    { id: "XI-157", subject: "Physics", name: "Daily Test 51", topic: "Waves: Superposition, Beats", points: 4, phase: "phase3", target: "phy11" }
];
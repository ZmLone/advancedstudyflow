/* --- syllabus-details.js --- */

// --- 1. THE DATA (Based on PDF Schedule) ---
const syllabusDatabase = {
    // === CARD: AIATS 7 ===
    "aiats7": {
        title: "AIATS 7 Syllabus (Feb 12 - Feb 22)",
        subjects: [
            {
                name: "Physics",
                chapters: [
                    {
                        title: "Ray Optics",
                        tests: [
                            { id: "DT-27 (Phy-XII)", topics: "Reflection of light, Spherical mirrors, Refraction" },
                            { id: "DT-28 (Phy-XII)", topics: "Total internal reflection, Refraction at spherical surface, Lenses" },
                            { id: "DT-29 (Phy-XII)", topics: "Refraction through prism, Dispersion, Optical Instruments (Eye)" },
                            { id: "DT-30 (Phy-XII)", topics: "Telescope, Microscope" }
                        ]
                    },
                    {
                        title: "Wave Optics",
                        tests: [
                            { id: "DT-31 (Phy-XII)", topics: "Huygens Principle, Interference, Young's experiment" },
                            { id: "DT-32 (Phy-XII)", topics: "Diffraction, Polarization" }
                        ]
                    },
                    {
                        title: "Dual Nature of Radiation",
                        tests: [
                            { id: "DT-33 (Phy-XII)", topics: "Photoelectric effect, Einstein's equation, Photons" },
                            { id: "DT-34 (Phy-XII)", topics: "Wave nature of matter, Davisson Germer Experiment" }
                        ]
                    },
                    {
                        title: "Atoms & Nuclei",
                        tests: [
                            { id: "DT-35 (Phy-XII)", topics: "Rutherford model, Bohr model, Line spectra" },
                            { id: "DT-36 (Phy-XII)", topics: "Binding energy, Nuclear force, Radioactivity" }
                        ]
                    },
                    {
                        title: "Semiconductors",
                        tests: [
                            { id: "DT-37 (Phy-XII)", topics: "Intrinsic/Extrinsic semiconductors, P-N Junction diode" },
                            { id: "DT-38 (Phy-XII)", topics: "Junction diode as rectifier, Special purpose diodes" }
                        ]
                    }
                ]
            },
            {
                name: "Chemistry",
                chapters: [
                    {
                        title: "p-Block Elements (Group 15-18)",
                        tests: [
                            { id: "DT-10 (Chem-XII)", topics: "Group 15: N2, NH3, Oxides of Nitrogen, HNO3" },
                            { id: "DT-11 (Chem-XII)", topics: "Ozone, Sulphur forms, Group 16 compounds" },
                            { id: "DT-12 (Chem-XII)", topics: "Group 17 (Halogens), Group 18 (Inert Gases)" }
                        ]
                    },
                    {
                        title: "Biomolecules",
                        tests: [
                            { id: "DT-27 (Chem-XII)", topics: "Carbohydrates, Amino acids" }
                        ]
                    }
                ]
            },
            {
                name: "Botany",
                chapters: [
                    {
                        title: "Organisms and Populations",
                        tests: [
                            { id: "DT-17 (Bot-XII)", topics: "Biomes, Abiotic factors, Adaptations" },
                            { id: "DT-18 (Bot-XII)", topics: "Population characteristics, Growth models, Interactions" }
                        ]
                    },
                    {
                        title: "Ecosystem",
                        tests: [
                            { id: "DT-19 (Bot-XII)", topics: "Structure, Productivity, Decomposition" },
                            { id: "DT-20 (Bot-XII)", topics: "Energy flow, Ecological pyramids" }
                        ]
                    },
                    {
                        title: "Biodiversity",
                        tests: [
                            { id: "DT-21 (Bot-XII)", topics: "Levels, Patterns, Importance of biodiversity" },
                            { id: "DT-22 (Bot-XII)", topics: "Loss of biodiversity and conservation" }
                        ]
                    }
                ]
            },
            {
                name: "Zoology",
                chapters: [
                    {
                        title: "Biotechnology: Principles",
                        tests: [
                            { id: "DT-21 (Zoo-XII)", topics: "Tools of recombinant DNA technology" },
                            { id: "DT-22 (Zoo-XII)", topics: "Cloning vectors, Processes of recombinant DNA" }
                        ]
                    },
                    {
                        title: "Biotechnology: Applications",
                        tests: [
                            { id: "DT-23 (Zoo-XII)", topics: "Agriculture: Bt Cotton, Pest resistant plants" },
                            { id: "DT-24 (Zoo-XII)", topics: "Medicine: Insulin, Gene Therapy, Diagnosis" },
                            { id: "DT-25 (Zoo-XII)", topics: "Transgenic Animals, Ethical Issues" }
                        ]
                    }
                ]
            }
        ]
    },

    // === CARD: ORGANIC CHEMISTRY ===
    "org_chem": {
        title: "Organic Chemistry Target (Feb 12 - Mar 08)",
        subjects: [
            {
                name: "Chemistry (Class XII)",
                chapters: [
                    {
                        title: "Haloalkanes and Haloarenes",
                        tests: [
                            { id: "DT-17 (Chem-XII)", topics: "Nomenclature, Nature of C-X bond, Preparation, Optical activity" },
                            { id: "DT-18 (Chem-XII)", topics: "Elimination reactions, Reaction with Na" },
                            { id: "DT-19 (Chem-XII)", topics: "Aromatic nucleophilic substitution, Polyhalogen compounds" }
                        ]
                    },
                    {
                        title: "Alcohols, Phenols and Ethers",
                        tests: [
                            { id: "DT-20 (Chem-XII)", topics: "Nomenclature, Preparation of alcohols" },
                            { id: "DT-21 (Chem-XII)", topics: "Preparation of aromatic alcohols, Reactions of phenols" },
                            { id: "DT-22 (Chem-XII)", topics: "Preparation & properties of Ethers" }
                        ]
                    },
                    {
                        title: "Aldehydes, Ketones & Carboxylic Acids",
                        tests: [
                            { id: "DT-23 (Chem-XII)", topics: "Nomenclature, Carbonyl group, Nucleophilic addition" },
                            { id: "DT-24 (Chem-XII)", topics: "Halogenation, Carboxylic acids preparation & properties" }
                        ]
                    },
                    {
                        title: "Amines",
                        tests: [
                            { id: "DT-25 (Chem-XII)", topics: "Structure, Nomenclature, Preparation" },
                            { id: "DT-26 (Chem-XII)", topics: "Chemical reactions, Diazonium salts" }
                        ]
                    }
                ]
            }
        ]
    },

    
    
    
    // === CARD: CLASS 11 BIOLOGY ===
    "bio_11": {
        title: "Class 11 Biology Target (Feb 12 - Mar 15)",
        subjects: [
            {
                name: "Botany (Class XI)",
                chapters: [
                    {
                        title: "Cell: The Unit of Life",
                        tests: [
                            { id: "DT-1 (Bot-XI)", topics: "Cell theory, Prokaryotic vs Eukaryotic cells" },
                            { id: "DT-2 (Bot-XI)", topics: "Plasma membrane, Cell wall, Endomembrane system" },
                            { id: "DT-3 (Bot-XI)", topics: "Mitochondria, Plastid, Ribosome, Cytoskeleton" },
                            { id: "DT-4 (Bot-XI)", topics: "Centrosome, Cilia, Nucleus, Chromosomes" }
                        ]
                    },
                    {
                        title: "Cell Cycle & Cell Division",
                        tests: [
                            { id: "DT-5 (Bot-XI)", topics: "Cell cycle phases, Mitosis, Cytokinesis" },
                            { id: "DT-6 (Bot-XI)", topics: "Meiosis I & II, Significance" }
                        ]
                    },
                    {
                        title: "The Living World",
                        tests: [
                            { id: "DT-7 (Bot-XI)", topics: "Characteristics of life, Taxonomy, Systematics" },
                            { id: "DT-8 (Bot-XI)", topics: "Taxonomic categories" }
                        ]
                    },
                    {
                        title: "Biological Classification",
                        tests: [
                            { id: "DT-9 (Bot-XI)", topics: "Monera, Bacteria structure & life process" },
                            { id: "DT-10 (Bot-XI)", topics: "Reproduction in bacteria, Mycoplasma" },
                            { id: "DT-11 (Bot-XI)", topics: "Protista (Chrysophytes, Euglenoids, Protozoans)" },
                            { id: "DT-12 (Bot-XI)", topics: "Fungi classes (Phyco, Asco, Basidio, Deutero)" },
                            { id: "DT-13 (Bot-XI)", topics: "Virus, Viroids, Lichens" }
                        ]
                    },
                    {
                        title: "Morphology of Flowering Plants",
                        tests: [
                            { id: "DT-14 (Bot-XI)", topics: "Root types, Stem modifications" },
                            { id: "DT-15 (Bot-XI)", topics: "Leaf, Inflorescence, Flower symmetry" },
                            { id: "DT-16 (Bot-XI)", topics: "Floral parts, Aestivation, Placentation, Fruits" },
                            { id: "DT-17 (Bot-XI)", topics: "Seed structure, Families (Solanaceae, Fabaceae etc.)" }
                        ]
                    },
                    {
                        title: "Anatomy of Flowering Plants",
                        tests: [
                            { id: "DT-18 (Bot-XI)", topics: "Tissues (Parenchyma, Collenchyma), Xylem" },
                            { id: "DT-19 (Bot-XI)", topics: "Phloem, Tissue systems, Vascular bundles" },
                            { id: "DT-20 (Bot-XI)", topics: "Internal structure of Dicot/Monocot root, stem, leaf" },
                            { id: "DT-21 (Bot-XI)", topics: "Secondary Growth (Complete Chapter)" }
                        ]
                    },
                    {
                        title: "Plant Kingdom",
                        tests: [
                            { id: "DT-22 (Bot-XI)", topics: "Classification systems, Algae characters" },
                            { id: "DT-23 (Bot-XI)", topics: "Algae classes (Chloro, Phaeo, Rhodo)" },
                            { id: "DT-24 (Bot-XI)", topics: "Bryophytes & Pteridophytes" },
                            { id: "DT-25 (Bot-XI)", topics: "Gymnosperms" }
                        ]
                    },
                    {
                        title: "Plant Physiology",
                        tests: [
                            { id: "DT-26 (Bot-XI)", topics: "Photosynthesis: Pigments, Light reaction" },
                            { id: "DT-27 (Bot-XI)", topics: "Photosynthesis: Dark reaction (C3, C4), Photorespiration" },
                            { id: "DT-28 (Bot-XI)", topics: "Respiration: Glycolysis, Krebs cycle" },
                            { id: "DT-29 (Bot-XI)", topics: "Respiration: ETS, Amphibolic pathway" },
                            { id: "DT-30 (Bot-XI)", topics: "Growth phases, Differentiation" },
                            { id: "DT-31 (Bot-XI)", topics: "Hormones: Auxins, Gibberellins, Cytokinins" },
                            { id: "DT-32 (Bot-XI)", topics: "Hormones: Ethylene, ABA, Photoperiodism" }
                        ]
                    }
                ]
            },
            {
                name: "Zoology (Class XI)",
                chapters: [
                    {
                        title: "Structural Organisation (Tissues)",
                        tests: [
                            { id: "DT-1 (Zoo-XI)", topics: "Epithelial Tissue: Simple & Compound" },
                            { id: "DT-2 (Zoo-XI)", topics: "Connective Tissue: Bone, Cartilage, Blood" },
                            { id: "DT-3 (Zoo-XI)", topics: "Muscular & Nervous Tissue: Neuron structure" }
                        ]
                    },
                    {
                        title: "Biomolecules",
                        tests: [
                            { id: "DT-4 (Zoo-XI)", topics: "Carbohydrates: Monosaccharides, Polysaccharides" },
                            { id: "DT-5 (Zoo-XI)", topics: "Proteins (Structure), Lipids, Nucleic Acids" },
                            { id: "DT-6 (Zoo-XI)", topics: "Enzymes: Mechanism, Factors affecting activity" }
                        ]
                    },
                    {
                        title: "Breathing & Exchange of Gases",
                        tests: [
                            { id: "DT-7 (Zoo-XI)", topics: "Respiratory organs, Human Respiratory System" },
                            { id: "DT-8 (Zoo-XI)", topics: "Mechanism of Breathing, Respiratory Volumes" },
                            { id: "DT-9 (Zoo-XI)", topics: "Exchange & Transport of Gases, Disorders" }
                        ]
                    },
                    {
                        title: "Body Fluids & Circulation",
                        tests: [
                            { id: "DT-10 (Zoo-XI)", topics: "Blood composition, Coagulation, Lymph" },
                            { id: "DT-11 (Zoo-XI)", topics: "Human Heart Structure, Circulatory pathways" },
                            { id: "DT-12 (Zoo-XI)", topics: "Cardiac Cycle, ECG, Heart sounds" },
                            { id: "DT-13 (Zoo-XI)", topics: "Double circulation, Regulation, Disorders" }
                        ]
                    },
                    {
                        title: "Excretory Products & Elimination",
                        tests: [
                            { id: "DT-14 (Zoo-XI)", topics: "Modes of Excretion, Human Excretory System" },
                            { id: "DT-15 (Zoo-XI)", topics: "Nephron Structure (Cortical vs Juxtamedullary)" },
                            { id: "DT-16 (Zoo-XI)", topics: "Urine Formation, Counter current mechanism" },
                            { id: "DT-17 (Zoo-XI)", topics: "Regulation of Kidney Function (RAAS, ADH)" },
                            { id: "DT-18 (Zoo-XI)", topics: "Micturition, Urine composition, Dialysis" }
                        ]
                    },
                    {
                        title: "Locomotion & Movement",
                        tests: [
                            { id: "DT-19 (Zoo-XI)", topics: "Types of Movement, Muscle Contraction Mechanism" },
                            { id: "DT-20 (Zoo-XI)", topics: "Axial Skeleton: Skull, Vertebral column, Ribs" },
                            { id: "DT-21 (Zoo-XI)", topics: "Appendicular Skeleton, Joints, Disorders" }
                        ]
                    },
                    {
                        title: "Neural Control & Coordination",
                        tests: [
                            { id: "DT-22 (Zoo-XI)", topics: "Neuron types, Nerve Impulse Transmission" },
                            { id: "DT-23 (Zoo-XI)", topics: "Central Neural System: Brain Structure" },
                            { id: "DT-24 (Zoo-XI)", topics: "Spinal Cord, PNS, ANS (Sympathetic/Parasympathetic)" }
                        ]
                    },
                    {
                        title: "Chemical Coordination & Integration",
                        tests: [
                            { id: "DT-25 (Zoo-XI)", topics: "Hypothalamus, Pituitary Gland & Hormones" },
                            { id: "DT-26 (Zoo-XI)", topics: "Thyroid, Parathyroid, Adrenal Glands" },
                            { id: "DT-27 (Zoo-XI)", topics: "Pancreas, Pineal, Thymus" },
                            { id: "DT-28 (Zoo-XI)", topics: "Gonads, Hormone Mechanism (Steroid vs Protein)" }
                        ]
                    },
                    {
                        title: "Animal Kingdom (Non-Chordates)",
                        tests: [
                            { id: "DT-29 (Zoo-XI)", topics: "Basis of Classification (Symmetry, Coelom)" },
                            { id: "DT-30 (Zoo-XI)", topics: "Porifera: Canal system, Spicules" },
                            { id: "DT-31 (Zoo-XI)", topics: "Cnidaria: Metagenesis, Corals" },
                            { id: "DT-32 (Zoo-XI)", topics: "Ctenophora & Platyhelminthes" },
                            { id: "DT-33 (Zoo-XI)", topics: "Aschelminthes & Annelida" },
                            { id: "DT-34 (Zoo-XI)", topics: "Arthropoda & Mollusca" },
                            { id: "DT-35 (Zoo-XI)", topics: "Echinodermata & Hemichordata" }
                        ]
                    },
                    {
                        title: "Animal Kingdom (Chordates)",
                        tests: [
                            { id: "DT-36 (Zoo-XI)", topics: "Chordata features, Cyclostomata, Pisces" },
                            { id: "DT-37 (Zoo-XI)", topics: "Amphibia: General characters" },
                            { id: "DT-38 (Zoo-XI)", topics: "Reptilia: General characters, Snakes" },
                            { id: "DT-39 (Zoo-XI)", topics: "Aves: General characters" },
                            { id: "DT-40 (Zoo-XI)", topics: "Mammalia: General characters" }
                        ]
                    },
                    {
                        title: "Structural Organisation (Morphology)",
                        tests: [
                            { id: "DT-41 (Zoo-XI)", topics: "Cockroach: Morphology (Head, Thorax, Abdomen)" },
                            { id: "DT-42 (Zoo-XI)", topics: "Cockroach: Digestive, Resp, Circ Systems" },
                            { id: "DT-43 (Zoo-XI)", topics: "Cockroach: Excretory, Nervous, Repro Systems" },
                            { id: "DT-44 (Zoo-XI)", topics: "Frog: Morphology & Anatomy (Complete)" }
                        ]
                    }
                ]
            }
        ]
    },
    
    // === CARD: AIATS 6 ===
    "aiats6": {
        title: "AIATS 6 Syllabus (Feb 23 - Mar 08)",
        subjects: [
            {
                name: "Physics",
                chapters: [
                    {
                        title: "Moving Charges and Magnetism",
                        tests: [
                            { id: "DT-16 (Phy-XII)", topics: "Motion in magnetic field, Velocity selector" },
                            { id: "DT-17 (Phy-XII)", topics: "Biot-savart's law, Cyclotron, Current element" },
                            { id: "DT-18 (Phy-XII)", topics: "Ampere's Circuital Law, Solenoid, Toroid" },
                            { id: "DT-19 (Phy-XII)", topics: "Torque on current loop, Moving coil Galvanometer" }
                        ]
                    },
                    {
                        title: "Magnetism and Matter",
                        tests: [
                            { id: "DT-20 (Phy-XII)", topics: "Bar magnet, Magnetism and Gauss's Law" },
                            { id: "DT-21 (Phy-XII)", topics: "Earth's magnetism, Magnetic properties of materials" }
                        ]
                    },
                    {
                        title: "Electromagnetic Induction",
                        tests: [
                            { id: "DT-22 (Phy-XII)", topics: "Faraday's laws, Lenz's law, Motional EMF" },
                            { id: "DT-23 (Phy-XII)", topics: "Eddy currents, Self & Mutual Inductance" }
                        ]
                    },
                    {
                        title: "Alternating Current",
                        tests: [
                            { id: "DT-24 (Phy-XII)", topics: "AC voltage applied to Resistor/Inductor/Capacitor" },
                            { id: "DT-25 (Phy-XII)", topics: "LCR circuit, Power in AC, Transformers" }
                        ]
                    },
                    {
                        title: "Electromagnetic Waves",
                        tests: [
                            { id: "DT-26 (Phy-XII)", topics: "Displacement current, EM Spectrum" }
                        ]
                    }
                ]
            },
            {
                name: "Chemistry",
                chapters: [
                    {
                        title: "d and f-Block Elements",
                        tests: [
                            { id: "DT-13 (Chem-XII)", topics: "General properties, KMnO4 and K2Cr2O7" },
                            { id: "DT-14 (Chem-XII)", topics: "Lanthanoids, Actinoids, Applications" }
                        ]
                    },
                    {
                        title: "Coordination Compounds",
                        tests: [
                            { id: "DT-15 (Chem-XII)", topics: "Werner's theory, Nomenclature, Isomerism" },
                            { id: "DT-16 (Chem-XII)", topics: "VBT, CFT, Bonding in metal carbonyls" }
                        ]
                    },
                    {
                        title: "Amines",
                        tests: [
                            { id: "DT-25 (Chem-XII)", topics: "Structure, Nomenclature, Preparation" },
                            { id: "DT-26 (Chem-XII)", topics: "Chemical reactions, Diazonium salts" }
                        ]
                    }
                ]
            },
            {
                name: "Botany",
                chapters: [
                    {
                        title: "Molecular Basis of Inheritance",
                        tests: [
                            { id: "DT-10 (Bot-XII)", topics: "DNA Structure, Packaging" },
                            { id: "DT-11 (Bot-XII)", topics: "Search for genetic material, RNA World, Replication" },
                            { id: "DT-12 (Bot-XII)", topics: "Transcription (Prokaryotes & Eukaryotes)" },
                            { id: "DT-13 (Bot-XII)", topics: "Genetic Code, t-RNA, Translation" },
                            { id: "DT-14 (Bot-XII)", topics: "Gene Regulation (Operon), HGP, DNA Fingerprinting" }
                        ]
                    },
                    {
                        title: "Microbes in Human Welfare",
                        tests: [
                            { id: "DT-15 (Bot-XII)", topics: "Microbes in household & industrial products" },
                            { id: "DT-16 (Bot-XII)", topics: "Sewage treatment, Biogas, Biofertilizers" }
                        ]
                    }
                ]
            },
            {
                name: "Zoology",
                chapters: [
                    {
                        title: "Evolution",
                        tests: [
                            { id: "DT-10 (Zoo-XII)", topics: "Origin of Life, Theories (Miller's Experiment)" },
                            { id: "DT-11 (Zoo-XII)", topics: "Evidences: Morphological, Embryological" },
                            { id: "DT-12 (Zoo-XII)", topics: "Hardy Weinberg Principle, Adaptive Radiation" },
                            { id: "DT-13 (Zoo-XII)", topics: "Speciation, Geological time scale" },
                            { id: "DT-14 (Zoo-XII)", topics: "Human Evolution" }
                        ]
                    },
                    {
                        title: "Human Health & Disease",
                        tests: [
                            { id: "DT-15 (Zoo-XII)", topics: "Common Diseases: Bacterial, Viral, Fungal" },
                            { id: "DT-16 (Zoo-XII)", topics: "Malaria Life Cycle, Immunity types" },
                            { id: "DT-17 (Zoo-XII)", topics: "Vaccination, Allergies, Lymphoid Organs" },
                            { id: "DT-18 (Zoo-XII)", topics: "AIDS: Cause, Symptoms, Prevention" },
                            { id: "DT-19 (Zoo-XII)", topics: "Cancer: Detection & Treatment" },
                            { id: "DT-20 (Zoo-XII)", topics: "Drugs & Alcohol Abuse" }
                        ]
                    }
                ]
            }
        ]
    },
"phy_electro": {
        title: "Physics: Electrostatics & Current (Mar 09 - Mar 15)",
        subjects: [
            {
                name: "Physics (Class XII)",
                chapters: [
                    {
                        title: "Electric Charges and Fields",
                        tests: [
                            { id: "DT-1 (Phy-XII)", topics: "Electric charges, Conductors, Insulators, Properties of charge" },
                            { id: "DT-2 (Phy-XII)", topics: "Coulomb's law, Force between multiple charges" },
                            { id: "DT-3 (Phy-XII)", topics: "Electric Field, Field due to system of charges" },
                            { id: "DT-4 (Phy-XII)", topics: "Electric field lines, Electric Dipole, Dipole in uniform field" },
                            { id: "DT-5 (Phy-XII)", topics: "Electric flux, Gauss's Law & its Applications" }
                        ]
                    },
                    {
                        title: "Electrostatic Potential and Capacitance",
                        tests: [
                            { id: "DT-6 (Phy-XII)", topics: "Electrostatic potential, Potential due to point charge" },
                            { id: "DT-7 (Phy-XII)", topics: "Equipotential surfaces, Potential energy of system of charges" },
                            { id: "DT-8 (Phy-XII)", topics: "Electrostatics of conductors, Dielectrics and polarization" },
                            { id: "DT-9 (Phy-XII)", topics: "Capacitors and capacitance, Parallel plate capacitor" },
                            { id: "DT-10 (Phy-XII)", topics: "Combination of capacitors, Energy stored, Van de Graff Generator" }
                        ]
                    },
                    {
                        title: "Current Electricity",
                        tests: [
                            { id: "DT-11 (Phy-XII)", topics: "Electric current, Ohm's law, Drift velocity, Resistivity" },
                            { id: "DT-12 (Phy-XII)", topics: "Combination of resistors (Series and Parallel)" },
                            { id: "DT-13 (Phy-XII)", topics: "Cells, EMF, Internal resistance, Cells in series/parallel" },
                            { id: "DT-14 (Phy-XII)", topics: "Kirchhoff's laws and applications" },
                            { id: "DT-15 (Phy-XII)", topics: "Wheatstone bridge, Meter Bridge" }
                        ]
                    }
                ]
            }
        ]
    },
    // === CARD: REMAINING CHEMISTRY (Mar 09 - Mar 15) ===
    "rem_chem": {
        title: "Remaining Chemistry (Mar 09 - Mar 15)",
        subjects: [
            {
                name: "Chemistry (Class XI)",
                chapters: [
                    {
                        title: "Some Basic Concepts of Chemistry",
                        tests: [
                            { id: "DT-1 (Chem-XI)", topics: "Laws of chemical combination, Dalton's theory, Mole concept basics" },
                            { id: "DT-2 (Chem-XI)", topics: "Mole concept detailed" },
                            { id: "DT-3 (Chem-XI)", topics: "Stoichiometry, Empirical formula" },
                            { id: "DT-4 (Chem-XI)", topics: "Limiting reagents, Concentration terms (Molarity, Molality)" }
                        ]
                    },
                    {
                        title: "Structure of Atom",
                        tests: [
                            { id: "DT-5 (Chem-XI)", topics: "Bohr's model, Photoelectric effect, Dual nature" },
                            { id: "DT-6 (Chem-XI)", topics: "Quantum numbers, Orbitals, Aufbau principle" },
                            { id: "DT-7 (Chem-XI)", topics: "Electronic configuration, Pauli's & Hund's rules" }
                        ]
                    },
                    {
                        title: "Classification of Elements",
                        tests: [
                            { id: "DT-8 (Chem-XI)", topics: "Periodic table history, s, p, d, f blocks" },
                            { id: "DT-9 (Chem-XI)", topics: "Periodic trends: Radius, Ionization Enthalpy, Electronegativity" }
                        ]
                    },
                    {
                        title: "Chemical Bonding",
                        tests: [
                            { id: "DT-10 (Chem-XI)", topics: "VSEPR Theory, Hybridization, Dipole moment" },
                            { id: "DT-11 (Chem-XI)", topics: "Valence Bond Theory, Resonance" },
                            { id: "DT-12 (Chem-XI)", topics: "Hybridization types, Sigma & Pi bonds" },
                            { id: "DT-13 (Chem-XI)", topics: "Molecular Orbital Theory (MOT), Hydrogen bonding" }
                        ]
                    },
                    {
                        title: "Thermodynamics",
                        tests: [
                            { id: "DT-14 (Chem-XI)", topics: "First Law, Internal Energy, Work & Heat" },
                            { id: "DT-15 (Chem-XI)", topics: "Hess's Law, Enthalpy of reactions" },
                            { id: "DT-16 (Chem-XI)", topics: "Entropy, Second Law, Gibbs Free Energy" }
                        ]
                    },
                    {
                        title: "Equilibrium",
                        tests: [
                            { id: "DT-17 (Chem-XI)", topics: "Chemical Equilibrium, Le Chatelier's Principle" },
                            { id: "DT-18 (Chem-XI)", topics: "Ionic Equilibrium, pH, Acids & Bases" },
                            { id: "DT-19 (Chem-XI)", topics: "Buffer Solutions, Solubility Product" }
                        ]
                    },
                    {
                        title: "Redox Reactions",
                        tests: [
                            { id: "DT-20 (Chem-XI)", topics: "Oxidation Numbers, Balancing Redox Reactions" },
                            { id: "DT-21 (Chem-XI)", topics: "Electrochemical cells, Titrations" }
                        ]
                    }
                ]
            },
            {
                name: "Chemistry (Class XII)",
                chapters: [
                    {
                        title: "Solutions",
                        tests: [
                            { id: "DT-1 (Chem-XII)", topics: "Concentration terms, Henry's Law, Raoult's Law" },
                            { id: "DT-2 (Chem-XII)", topics: "Colligative Properties, van't Hoff Factor" }
                        ]
                    },
                    {
                        title: "Electrochemistry",
                        tests: [
                            { id: "DT-3 (Chem-XII)", topics: "Nernst Equation, Electrochemical Cells" },
                            { id: "DT-4 (Chem-XII)", topics: "Gibbs Energy, Equilibrium Constant" },
                            { id: "DT-5 (Chem-XII)", topics: "Conductance, Kohlrausch Law" },
                            { id: "DT-6 (Chem-XII)", topics: "Electrolysis, Batteries, Corrosion" }
                        ]
                    },
                    {
                        title: "Chemical Kinetics",
                        tests: [
                            { id: "DT-7 (Chem-XII)", topics: "Rate Law, Order, Half-life (Zero & First Order)" },
                            { id: "DT-8 (Chem-XII)", topics: "Arrhenius Equation, Activation Energy" },
                            { id: "DT-9 (Chem-XII)", topics: "Collision Theory" }
                        ]
                    }
                ]
            }
        ]
    },
    // === CARD: CLASS 11 PHYSICS (Selected Chapters) ===
    "phy_11_sel": {
        title: "Class 11 Physics (Selected) (Mar 16 - Mar 27)",
        subjects: [
            {
                name: "Physics (Class XI)",
                chapters: [
                    {
                        title: "Units & Measurements",
                        tests: [
                            { id: "DT-1 (Phy-XI)", topics: "Units, Errors in measurement" },
                            { id: "DT-2 (Phy-XI)", topics: "Significant figures" },
                            { id: "DT-3 (Phy-XI)", topics: "Dimensional analysis and applications" }
                        ]
                    },
                    {
                        title: "Motion in a Straight Line",
                        tests: [
                            { id: "DT-4 (Phy-XI)", topics: "Path length, Displacement, Average velocity" },
                            { id: "DT-5 (Phy-XI)", topics: "Instantaneous velocity, Calculus, Graphs" },
                            { id: "DT-6 (Phy-XI)", topics: "Kinematic equations" },
                            { id: "DT-7 (Phy-XI)", topics: "Motion under gravity" },
                            { id: "DT-8 (Phy-XI)", topics: "Relative velocity" }
                        ]
                    },
                    {
                        title: "Motion in a Plane",
                        tests: [
                            { id: "DT-9 (Phy-XI)", topics: "Vectors: Addition, Subtraction, Resolution" },
                            { id: "DT-10 (Phy-XI)", topics: "Motion in a plane with constant acceleration" },
                            { id: "DT-11 (Phy-XI)", topics: "Relative velocity in two dimensions" },
                            { id: "DT-12 (Phy-XI)", topics: "Projectile motion: Range, Height, Time of flight" },
                            { id: "DT-13 (Phy-XI)", topics: "Uniform circular motion" }
                        ]
                    },
                    {
                        title: "Work, Energy & Power",
                        tests: [
                            { id: "DT-20 (Phy-XI)", topics: "Work, Kinetic Energy, Work-Energy Theorem" },
                            { id: "DT-21 (Phy-XI)", topics: "Potential Energy, Spring force" },
                            { id: "DT-22 (Phy-XI)", topics: "Conservation of Mechanical Energy, Vertical Circle" },
                            { id: "DT-23 (Phy-XI)", topics: "Power" },
                            { id: "DT-24 (Phy-XI)", topics: "Collisions (1D and 2D), Elastic & Inelastic" }
                        ]
                    },
                    {
                        title: "Gravitation",
                        tests: [
                            { id: "DT-30 (Phy-XI)", topics: "Kepler's laws, Universal law, Acceleration due to gravity" },
                            { id: "DT-31 (Phy-XI)", topics: "Gravitational Potential, Escape Speed, Satellites" }
                        ]
                    },
                    {
                        title: "Mechanical Properties of Solids",
                        tests: [
                            { id: "DT-32 (Phy-XI)", topics: "Stress & Strain, Hooke's Law, Young's Modulus" },
                            { id: "DT-33 (Phy-XI)", topics: "Elastic Potential Energy, Applications" }
                        ]
                    },
                    {
                        title: "Thermal Properties of Matter",
                        tests: [
                            { id: "DT-38 (Phy-XI)", topics: "Temperature, Thermal Expansion, Gas Equation" },
                            { id: "DT-39 (Phy-XI)", topics: "Specific Heat, Calorimetry, Change of State" },
                            { id: "DT-40 (Phy-XI)", topics: "Heat Transfer: Conduction, Convection" },
                            { id: "DT-41 (Phy-XI)", topics: "Radiation, Stefan's Law, Newton's Law of Cooling" }
                        ]
                    },
                    {
                        title: "Thermodynamics",
                        tests: [
                            { id: "DT-42 (Phy-XI)", topics: "Zeroth Law, First Law, Internal Energy" },
                            { id: "DT-43 (Phy-XI)", topics: "Thermodynamic Processes" },
                            { id: "DT-44 (Phy-XI)", topics: "Second Law, Heat Engines, Carnot Engine" }
                        ]
                    },
                    {
                        title: "Kinetic Theory",
                        tests: [
                            { id: "DT-45 (Phy-XI)", topics: "Ideal Gas, Law of Equipartition, Mean Free Path" }
                        ]
                    },
                    {
                        title: "Oscillations",
                        tests: [
                            { id: "DT-46 (Phy-XI)", topics: "Periodic Motion, SHM vs Uniform Circular Motion" },
                            { id: "DT-47 (Phy-XI)", topics: "Velocity, Acceleration, Energy in SHM" },
                            { id: "DT-48 (Phy-XI)", topics: "Simple Pendulum, Systems executing SHM" }
                        ]
                    },
                    {
                        title: "Waves",
                        tests: [
                            { id: "DT-49 (Phy-XI)", topics: "Transverse & Longitudinal Waves" },
                            { id: "DT-50 (Phy-XI)", topics: "Progressive Wave Equation, Speed of Wave" },
                            { id: "DT-51 (Phy-XI)", topics: "Superposition, Reflection, Beats" }
                        ]
                    }
                ]
            }
        ]
    }

    
};



// --- 2. LOGIC TO RENDER THE PAGE ---

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const cardId = urlParams.get('id'); // Get the 'id' passed from ongoing.html

    const contentDiv = document.getElementById('syllabus-content');
    const titleHeader = document.getElementById('page-title');

    // Check if data exists for this card
    if (cardId && syllabusDatabase[cardId]) {
        const data = syllabusDatabase[cardId];
        titleHeader.innerText = data.title;
        renderSyllabus(data.subjects, contentDiv);
    } else {
        titleHeader.innerText = "Syllabus Not Found";
        contentDiv.innerHTML = "<p style='text-align:center; padding:20px;'>No data available for this target yet.</p>";
    }
});

function renderSyllabus(subjects, container) {
    container.innerHTML = '';

    subjects.forEach(subject => {
        // Create Subject Group
        const subjectGroup = document.createElement('div');
        subjectGroup.className = 'subject-group';
        
        const subjectTitle = document.createElement('div');
        subjectTitle.className = 'subject-title';
        subjectTitle.innerText = subject.name;
        subjectGroup.appendChild(subjectTitle);

        // Iterate Chapters
        subject.chapters.forEach(chapter => {
            // Create Accordion HTML structure
            const accordion = document.createElement('div');
            accordion.className = 'chapter-accordion';

            // Header (The part you click)
            const header = document.createElement('div');
            header.className = 'accordion-header';
            header.onclick = () => toggleAccordion(header);
            
            header.innerHTML = `
                <h4>${chapter.title}</h4>
                <i class="fas fa-chevron-down accordion-icon"></i>
            `;

            // Content (The list of Daily Tests)
            const content = document.createElement('div');
            content.className = 'accordion-content';

            // List of tests inside the chapter
            chapter.tests.forEach(test => {
                const testItem = document.createElement('div');
                testItem.className = 'dt-item';
                testItem.innerHTML = `
                    <span class="dt-name">${test.id}</span>
                    <div class="dt-topics">${test.topics}</div>
                `;
                content.appendChild(testItem);
            });

            accordion.appendChild(header);
            accordion.appendChild(content);
            subjectGroup.appendChild(accordion);
        });

        container.appendChild(subjectGroup);
    });
}

// Logic to open/close accordion
function toggleAccordion(headerElement) {
    // Toggle active class
    headerElement.classList.toggle('active');

    // Get the content sibling
    const content = headerElement.nextElementSibling;

    if (headerElement.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + "px";
    } else {
        content.style.maxHeight = 0;
    }
}
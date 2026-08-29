/* =========================================================================
   MAXTRON RACING CLUB — SITE CONTENT DATA
   ========================================================================= */

window.SITE_CONTENT = {
  brandName: "MAXTRON",
  brandSub: "RACING CLUB",

  navMain: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Domains", href: "#domains" },
    { label: "Team", href: "#team" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "Contact", href: "#contact" }
  ],

  navProject: [
    { label: "Back to Home", href: "index.html" },
    { label: "Our Project", href: "#project" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Tech Specs", href: "#specs" },
    { label: "Regulations", href: "#regulations" }
  ],

  hero: {
    eyebrow: "NMIT · STUDENT MOTORSPORTS ENGINEERING",
    tagline: "DRIVEN TO DOMINATE",
    description: "A newly established student-led motorsports engineering team at Nitte Meenakshi Institute of Technology (NMIT), Bengaluru — designing, building, and racing prototype motorcycles."
  },

  stats: [
    { number: "08+", label: "Team Members" },
    { number: "02", label: "Prototype Motorcycles" },
    { number: "01", label: "Mission" },
    { number: "2026", label: "Established" }
  ],

  about: {
    title: "Engineering Tomorrow's Motorsport Champions",
    body1: "MAXTRON Racing Club is a student-driven initiative focused on designing, building, and racing high-performance prototype motorcycles in national and international competitions.",
    body2: "We aim to develop engineering excellence, promote innovation, and put NMIT on the global motorsport map — building a sustainable platform that future student teams can continue to grow.",
    missionText: "To design, develop, and race competitive prototype motorcycles while providing students with practical experience in engineering, manufacturing, testing, and motorsport operations — through innovation, teamwork, industry collaboration, and continuous improvement.",
    visionText: "To establish MAXTRON Racing Club as a respected student motorsports engineering team, proudly representing Nitte Meenakshi Institute of Technology in national and international student motorcycle engineering competitions."
  },

  timeline: [
    {
      year: "2026",
      title: "Club Establishment & Foundation",
      desc: "Founded by passionate engineering students at Nitte Meenakshi Institute of Technology (NMIT). Formed 8 core sub-departments and laid down standard operating procedures for research and development."
    },
    {
      year: "2027",
      title: "National Debut — FMAE MotoStudent India",
      desc: "Entering the national arena with two identical high-performance prototype motorcycles (Petrol and Electric platforms) to validate engineering designs on track."
    },
    {
      year: "Future",
      title: "Going International — MotoStudent Spain",
      desc: "Representing NMIT and India in global student motorsports competitions in Europe, testing our custom fabrication and vehicle dynamics against top global institutions."
    }
  ],

  domains: [
    { icon: "🛠️", title: "Chassis & Frame", desc: "Self-manufactured tubular chassis design, triangulated frame structures, and crash-protection engineering." },
    { icon: "⚙️", title: "Powertrain & Engine", desc: "Petrol (240–340cc 4-stroke) and Electric (≤10kW) propulsion integration, cooling, and transmission systems." },
    { icon: "🚲", title: "Suspension & Braking", desc: "Front/rear suspension tuning, hydraulic disc brake systems, and steering geometry design." },
    { icon: "⚡", title: "Electricals & Electronics", desc: "ECU integration, wiring, data acquisition, dashboards, and (for EV) high-voltage system safety." },
    { icon: "🛩️", title: "Aerodynamics & Fairing", desc: "Fairing design, bodywork, wings, and aerodynamic packaging within FMAE dimensional limits." },
    { icon: "👨‍🏭", title: "Manufacturing & Fabrication", desc: "CNC machining, TIG welding, precision fabrication, and assembly of both prototypes." },
    { icon: "📈", title: "Vehicle Dynamics & Testing", desc: "Static scrutineering prep, dynamic safety testing, performance evaluation, and race-day tuning." },
    { icon: "💼", title: "Management & Sponsorship", desc: "Budgeting, sponsor relations, documentation, logistics, and competition project management." }
  ],

  team: [
    { name: "Mahantayya K. Hiremath", role: "Faculty In-charge", image: "assets/images/team_faculty.png", initials: "MKH" },
    { name: "Dhruva Naik", role: "Vice Captain", image: "assets/images/team_rep.png", initials: "DN" },
    { name: "N Sai Pracheet Reddy", role: "Media and Marketing", image: "assets/images/team_managing.png", initials: "NSP" },
    { name: "Sankeerth Issax", role: "Chassis & Frame Lead", image: "assets/images/team_chassis.png", initials: "SI" },
    { name: "Anish Madhukar", role: "Captain", image: "assets/images/team_powertrain.png", initials: "AM" },
    { name: "Dhruva R Naik", role: "Suspension & Braking Lead", image: "assets/images/team_susp.png", initials: "DN" },
    { name: "Yatin A Sai", role: "Electronics Lead", image: "assets/images/team_elec.png", initials: "YS" },
    { name: "Varun", role: "Sponsorship", image: "assets/images/team_mfg.png", initials: "V" }
  ],

  sponsors: [
    { name: "Shell", logoText: "SHELL", isMajor: true, desc: "Official Principal Sponsor" },
    { name: "Your Logo Here", logoText: "PARTNER", isMajor: false, desc: "Sponsorship Slot Available" }
  ],

  project: {
    title: "Two Identical. One Mission.",
    description: "We are designing and building two identical Formula Moto Student prototype motorcycles as per FMAE MotoStudent (India) regulations. Developing two identical machines lets us run parallel testing, compare telemetry data, and improve reliability — while reducing overall development time.",
    features: [
      "Advanced Engineering Design",
      "Data Driven Performance",
      "Precision Manufacturing",
      "Reliability & Safety First",
      "Rigorous Testing & Validation",
      "Built For Competition"
    ],
    pillars: [
      { icon: "🏁", title: "Compete", desc: "Participate in FMAE MotoStudent (India) and other national events." },
      { icon: "🌐", title: "Achieve", desc: "Compete internationally at MotoStudent (Spain) and beyond." },
      { icon: "🎓", title: "Learn", desc: "Provide hands-on experience and skill development." },
      { icon: "🏆", title: "Represent", desc: "Proudly represent NMIT on national and global platforms." }
    ]
  },

  roadmap: {
    title: "Competition Development Roadmap",
    lead: "A structured roadmap — building a strong engineering foundation before progressing to international student motorcycle engineering competitions.",
    stages: [
      { year: "2026", phase: "Design & CAD Verification", objective: "Establish 3D models, perform Finite Element Analysis (FEA) on the chassis frame, run Computational Fluid Dynamics (CFD) for the fairing structure, and finalize components layout." },
      { year: "2027", phase: "FMAE MotoStudent (India)", objective: "Manufacture, test, and successfully compete with two Formula Moto Student prototype motorcycles while establishing the team's engineering foundation and gaining competition experience." },
      { year: "2028 & Future", phase: "MotoStudent (Spain)", objective: "Represent NMIT on an international stage by competing against leading global universities and continuously improving the team's engineering capabilities." },
      { year: "Long-Term", phase: "Global Motorsports Platform", objective: "Expand participation in globally recognized student motorsport events, strengthen industry collaborations, and establish MAXTRON as a sustainable, competitive motorsports program." }
    ]
  },

  specsLead: "The proposed motorcycles are being developed with a focus on performance, safety, reliability, and compliance with FMAE MotoStudent (India) regulations. Specifications may be refined during detailed design based on validation, availability, and technical partnerships.",
  specsNote: "Note: These specifications represent the team's preferred technical configuration. Final component selection depends on validation, sponsorship, budget approval, and competition regulations.",

  technicalSpecs: [
    { category: "General", name: "Project", value: "Development of Two Identical Formula Moto Student Prototype Motorcycles" },
    { category: "General", name: "Competition", value: "FMAE MotoStudent (India)" },
    { category: "Powertrain", name: "Engine Platform", value: "321cc Parallel-Twin (Yamaha YZF-R3/MT-03 or Kawasaki Ninja 300 — subject to partnership)" },
    { category: "Powertrain", name: "Cooling System", value: "Liquid Cooled" },
    { category: "Powertrain", name: "Fuel System", value: "Electronic Fuel Injection (EFI)" },
    { category: "Powertrain", name: "Transmission", value: "6-Speed Manual" },
    { category: "Chassis & Aero", name: "Frame / Chassis", value: "Custom fabricated 4130 Chromoly steel tubular chassis" },
    { category: "Chassis & Aero", name: "Swingarm", value: "Custom lightweight racing swingarm" },
    { category: "Chassis & Aero", name: "Fairings", value: "Aerodynamic lightweight bodywork, wings within FMAE limits" },
    { category: "Suspension & Brakes", name: "Front Suspension", value: "WP Suspension — adjustable USD forks (or equivalent)" },
    { category: "Suspension & Brakes", name: "Rear Suspension", value: "WP Suspension — adjustable monoshock (or equivalent)" },
    { category: "Suspension & Brakes", name: "Front / Rear Brakes", value: "Brembo / ByBre racing brake system, braided steel lines" },
    { category: "Suspension & Brakes", name: "Tyres", value: "Pirelli racing slick tyres — 110/70-17 front, 150/60-17 rear" },
    { category: "Suspension & Brakes", name: "Wheels", value: "17-inch lightweight alloy racing wheels" },
    { category: "General", name: "Exhaust System", value: "Akrapovič / SC-Project / Arrow full racing exhaust (subject to partnership)" },
    { category: "Electronics", name: "Electronics", value: "Competition-ready ECU, wiring harness, sensors & data acquisition" },
    { category: "General", name: "Rider Safety Gear", value: "AGV Pista GP RR helmet, Alpinestars GP Tech V4 suit, gloves & boots" },
    { category: "General", name: "Design & Simulation", value: "CAD modelling, CAE analysis, vehicle simulation" },
    { category: "General", name: "Manufacturing", value: "CNC machining, precision fabrication, TIG welding & assembly" },
    { category: "General", name: "Testing & Validation", value: "Static inspection, dynamic testing, performance & track validation" }
  ],

  regsLead: "A condensed reference to the FMAE MotoStudent Technical Rulebook (Version 5.1, released 4th April 2026) that governs our prototype build.",

  regulations: [
    { title: "General Design & Dimensions", points: [
      "Minimum width between semi-handlebar ends: 450mm",
      "Minimum tilt angle without touching ground: 50°",
      "Minimum ground clearance (unloaded, fully equipped): 100mm",
      "Maximum fairing width: 600mm · Maximum saddle width: 450mm",
      "Minimum total unladen weight (both categories): 95kg, including fluids"
    ]},
    { title: "Frame & Crash Protection", points: [
      "Frame, subframe, and swingarm must be fully self-manufactured — commercial frames are forbidden",
      "Frame must protect engine, fuel, and electrical/electronic systems in a fall",
      "Mandatory nylon/fibre crash protectors on chassis and propulsion system"
    ]},
    { title: "Fairing & Mudguards", points: [
      "All edges rounded to a minimum 1mm radius",
      "Lower fairing must contain at least 2.5 litres of liquid in an incident",
      "Front and rear mudguards compulsory"
    ]},
    { title: "Brake System", points: [
      "Disc hydraulic brakes required, front and rear — completely independent circuits",
      "Steel alloy discs only — carbon/ceramic and internally-ventilated discs forbidden",
      "Anti-lock braking systems (ABS) are not allowed"
    ]},
    { title: "Suspension & Steering", points: [
      "Any suspension configuration allowed — active/electronic control systems are forbidden",
      "Adjustments must be manual (mechanical/hydraulic) only",
      "Minimum steering turning angle: 15° on either side, with mechanical stoppers"
    ]},
    { title: "Rims & Tyres", points: [
      "Rims: steel, aluminium, or magnesium only — composite rims forbidden",
      "Slick tyres required: 110/70-17 front, 150/60-17 rear (both categories)"
    ]},
    { title: "Electronic Systems", points: [
      "Traction control, ABS, and anti-wheelie systems are forbidden",
      "Live telemetry is prohibited — data may only be downloaded during pit stops",
      "Rider information systems on the dashboard are freely configurable"
    ]},
    { title: "Rider Equipment", points: [
      "Closed-face helmet with integral chin guard — Snell, SFI, or FIA approved standards only",
      "One-piece leather (or equivalent) suit with EN 1621-2 back and EN 1621-3 chest protectors",
      "Leather gloves and boots with protection are mandatory"
    ]},
    { title: "MotoStudent Petrol Category", points: [
      "4-stroke piston engine, 240cc–340cc total displacement",
      "Original ECU and engine map must remain unmodified",
      "Official fuel only: unleaded, 98 octane or less",
      "Maximum exhaust noise: 105 dB/A at 5,000 RPM"
    ]},
    { title: "MotoStudent Electric Category", points: [
      "Electric motor: ≤10kW DC, maximum 126 VDC system voltage",
      "Mandatory Battery Management System (BMS) and Insulation Monitoring Device (IMD)",
      "Precharge circuit required before contactor closes; galvanic separation of HV and LV systems",
      "Charging connector must be IP-65 rated when closed; red HV warning light mandatory"
    ]},
    { title: "Static & Dynamic Scrutineering", points: [
      "Structural bench test: 300kg horizontal load (front wheel), 250kg vertical load (saddle)",
      "Brake test minimums: front shaft ≥ 0.30kN, rear shaft ≥ 0.25kN",
      "EV insulation check: disconnection circuit must open within 30 seconds of a 50kΩ fault resistance",
      "Dynamic Safety Check: official rider verifies start-up, braking, and cornering before race approval"
    ]}
  ]
};

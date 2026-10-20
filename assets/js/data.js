/* ==========================================================================
   PORTFOLIO CONTENT — edit this file to update the website.
   --------------------------------------------------------------------------
   - Every list below (skills, experience, projects, achievements) renders
     automatically. Add, remove or reorder entries; no HTML changes needed.
   - Leave a field as "" (empty) to hide it. Empty sections show a tidy
     "coming soon" message instead of placeholder text.
   - Lines marked  TODO  are things only you can fill in.
   ========================================================================== */

window.PORTFOLIO = {
  profile: {
    name: "Lennard Dequina",
    title: "Technical Support Engineer",

    // TODO: contact links. Leave "" to hide a link.
    email: "",            // e.g. "yourname@gmail.com" (use a personal address)
    linkedin: "",         // e.g. "https://www.linkedin.com/in/your-handle"
    github: "",           // e.g. "https://github.com/your-username"
    otherLinks: [
      // { label: "YouTube", url: "https://youtube.com/@your-channel" },
    ],

    // Résumé: upload your PDF to assets/resume.pdf, then set available: true
    resume: {
      available: false,   // TODO: set to true once assets/resume.pdf exists
      path: "assets/resume.pdf"
    }
  },

  /* ---------- Technical skills ----------
     Only list skills you can confidently discuss in an interview. */
  skills: [
    {
      category: "Technical Support",
      items: [
        "Technical troubleshooting",
        "Technical investigation",
        "Support case management",
        "Customer support"
      ]
    },
    {
      category: "Problem Solving",
      items: [
        "Root-cause analysis",
        "Issue reproduction & isolation",
        "Analytical thinking"
      ]
    },
    {
      category: "Communication",
      items: [
        "Clear customer communication",
        "Explaining technical issues simply",
        "Written case updates"
      ]
    },
    {
      category: "Hardware & Technology",
      items: [
        "PC hardware",
        "Gaming technology",
        "Software"
      ]
    }
    // TODO: add the tools you actually use, for example:
    // { category: "Operating Systems", items: ["Windows 10/11", "Windows Server"] },
    // { category: "Networking", items: ["TCP/IP", "DNS", "VPN troubleshooting"] },
    // { category: "Tools & Platforms", items: ["Salesforce", "Jira", "ServiceNow"] },
  ],

  /* ---------- Professional experience (newest first) ---------- */
  experience: [
    {
      role: "Technical Support Engineer",
      company: "NiCE",
      start: "",          // TODO: e.g. "Mar 2023"
      end: "Present",
      location: "",       // TODO: e.g. "Manila, Philippines" or "Remote"
      summary:
        "Investigate, troubleshoot and resolve technical issues reported by customers, owning support cases from first response through resolution.",
      // TODO: review these and add specifics (products, scale, tools), without confidential details.
      highlights: [
        "Analyze and troubleshoot customer-reported technical issues to identify root causes",
        "Manage technical support cases end to end, keeping customers informed at each step",
        "Translate complex technical findings into clear, actionable updates for customers"
      ]
    }
    // TODO: add previous roles in the same format:
    // {
    //   role: "Job Title", company: "Company", start: "Jan 2021", end: "Feb 2023",
    //   location: "City", summary: "One-line summary.",
    //   highlights: ["Responsibility or accomplishment", "Another one"]
    // },
  ],

  /* ---------- Projects & case studies ----------
     Never publish customer data, internal tools, or confidential case details.
     Personal projects, home labs, PC builds and sanitized write-ups work well. */
  projects: [
    {
      title: "Personal Portfolio Website",
      overview: "This website: a fast, accessible portfolio hosted for free on GitHub Pages.",
      problem: "Needed a professional, always-online place to share my experience with recruiters, at no hosting cost.",
      approach: "Built a dependency-free static site with semantic HTML, modern CSS and vanilla JavaScript. Content lives in one data file, so updates take minutes.",
      tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      outcome: "A responsive, keyboard-accessible site that stays online independently of any local machine.",
      repo: "",   // filled in after publishing
      demo: ""
    }
    // TODO: add projects in the same format:
    // {
    //   title: "", overview: "", problem: "", approach: "",
    //   tech: ["", ""], outcome: "", repo: "https://github.com/...", demo: ""
    // },
  ],

  /* ---------- Achievements, training & certifications ---------- */
  achievements: [
    // TODO: add yours, for example:
    // { type: "Certification", title: "CompTIA A+", issuer: "CompTIA", date: "2024", url: "" },
    // { type: "Award", title: "Award name", issuer: "NiCE", date: "2025", description: "" },
    // { type: "Training", title: "Course name", issuer: "Provider", date: "2025", url: "" },
  ]
};

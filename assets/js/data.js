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
    name: "John Lennard Dequiña",
    title: "Virtual Assistance · Customer & Technical Support",

    // Contact links. Leave "" to hide a link.
    email: "",            // TODO: e.g. "yourname@gmail.com" (use a personal address)
    linkedin: "https://www.linkedin.com/in/johnlennarddequina/",
    github: "https://github.com/itsnotlnrd",
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
      category: "Virtual Assistance & Admin",
      items: [
        "Email management",
        "Calendar management",
        "Data entry & spreadsheets",
        "Online research & reports",
        "Social media & content",
        "Customer support"
      ]
    },
    {
      category: "Productivity & Creative Tools",
      items: [
        "Google Workspace",
        "Microsoft Office / Excel",
        "Slack",
        "Microsoft Teams",
        "Zoom",
        "Canva"
      ]
    },
    {
      category: "Support & Troubleshooting",
      items: [
        "Troubleshooting",
        "Root cause analysis",
        "Incident management",
        "Customer escalation management",
        "API / JSON data analysis"
      ]
    },
    {
      category: "Databases & Data",
      items: [
        "SQL",
        "MongoDB",
        "Oracle SQL Developer",
        "Database development",
        "Data integration & ETL",
        "Microsoft Power BI"
      ]
    },
    {
      category: "Programming",
      items: [
        "C#",
        "Python",
        "Java",
        "C++",
        "PHP",
        "HTML",
        "Vue.js"
      ]
    },
    {
      category: "Tools & Platforms",
      items: [
        "Salesforce",
        "Salesforce Lightning",
        "Postman",
        "Adobe Photoshop",
        "Adobe Premiere Pro"
      ]
    },
    {
      category: "Professional Skills",
      items: [
        "Written communication (EF SET C1)",
        "Analytical skills",
        "Decision-making",
        "Cross-functional collaboration",
        "Time management",
        "Adaptability"
      ]
    }
  ],

  /* ---------- Professional experience (newest first) ---------- */
  experience: [
    {
      role: "Technical Support Engineer",
      company: "NiCE",
      start: "Jan 2026",
      end: "Present",
      location: "Taguig, Philippines · Hybrid",
      summary:
        "Support customers of CXone Reporting, Dashboard and Performance Management products, owning escalated cases from first response to resolution.",
      highlights: [
        "Manage multiple concurrent cases, prioritizing work and keeping customers and stakeholders updated with clear written communication",
        "Investigate issues by analyzing API/JSON data, comparing datasets and reproducing problems through cross-browser testing",
        "Coordinate with R&D, Technical Account Managers and Key Account Managers to escalate and resolve complex issues",
        "Document findings and link related issues to broader platform incidents"
      ]
    },
    {
      role: "Software Engineer",
      company: "NiCE",
      start: "Jan 2025",
      end: "Jan 2026",
      location: "Philippines · Remote",
      summary: "",
      highlights: [
        "Continued responsibilities from ClearView under NiCE following the acquisition",
        "Worked closely with cross-functional teams to ensure smooth data and system transitions"
      ]
    },
    {
      role: "Database Analyst",
      company: "ClearView",
      start: "Jun 2024",
      end: "Jan 2025",
      location: "Philippines · Remote",
      summary: "",
      highlights: [
        "Troubleshot tickets related to back-end changes and data issues",
        "Maintained and supported advanced ETL processes",
        "Modified and optimized existing data integrations",
        "Collaborated with the Senior Data Services Lead to support client requests",
        "Documented data processes"
      ]
    },
    {
      role: "Database Administrator",
      company: "Small Business Corporation",
      start: "Aug 2023",
      end: "May 2024",
      location: "Makati, Philippines · On-site",
      summary: "",
      highlights: [
        "Assisted in database design, management, maintenance and optimization to ensure data integrity, availability and security",
        "Contributed ideas to the company's Unified Borrower Masterlist project",
        "Helped manage user access controls and permissions to maintain data security"
      ]
    },
    {
      role: "Intern",
      company: "Hesedovation PTE LTD",
      start: "Mar 2023",
      end: "May 2023",
      location: "",
      summary: "Gained hands-on experience developing applications with the Vue.js framework.",
      highlights: [
        "Assisted in building a to-do list application that supported the company's goals"
      ]
    }
  ],

  /* ---------- Projects & case studies ----------
     Never publish customer data, internal tools, or confidential case details.
     Personal projects, home labs, PC builds and sanitized write-ups work well. */
  projects: [
    {
      title: "Personal Portfolio Website",
      overview: "This website: a fast, accessible portfolio hosted for free on GitHub Pages.",
      problem: "Needed a professional, always-online place to showcase my work and experience, at no hosting cost.",
      approach: "Built a dependency-free static site with semantic HTML, modern CSS and vanilla JavaScript. Content lives in one data file, so updates take minutes.",
      tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      outcome: "A responsive, keyboard-accessible site that stays online independently of any local machine.",
      repo: "https://github.com/itsnotlnrd/itsnotlnrd.github.io",
      demo: ""
    }
    // TODO: add projects in the same format:
    // {
    //   title: "", overview: "", problem: "", approach: "",
    //   tech: ["", ""], outcome: "", repo: "https://github.com/...", demo: ""
    // },
  ],

  /* ---------- Education, certifications & training ---------- */
  achievements: [
    { type: "Education", title: "BS Computer Science", issuer: "University of St. La Salle", date: "2019 – 2023", url: "" },
    { type: "Certification", title: "EF SET English Certificate: C1 Advanced", issuer: "EF SET", date: "Mar 2024", url: "https://cert.efset.org/D7HwzU" },
    { type: "Training", title: "SkillUP: Python Programming", issuer: "EDUCBA", date: "", url: "" },
    { type: "Training", title: "SkillUP: Tableau", issuer: "EDUCBA", date: "", url: "" }
    // TODO: add more, for example:
    // { type: "Award", title: "Award name", issuer: "Issuer", date: "2025", description: "" },
  ]
};

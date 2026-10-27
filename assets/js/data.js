/* ==========================================================================
   PORTFOLIO CONTENT — edit this file to update the website.
   --------------------------------------------------------------------------
   - Every list below (capabilities, experience, projects, credentials)
     renders automatically. Add, remove or reorder entries; no HTML changes.
   - Leave a field as "" (empty) to hide it.
   - Lines marked  TODO  are things only you can fill in.
   ========================================================================== */

window.PORTFOLIO = {
  profile: {
    name: "John Lennard Dequiña",

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

  /* ---------- What I do ----------
     One row per area: a short sentence about the work, then the tools.
     Only list tools you can confidently discuss in an interview. */
  capabilities: [
    {
      area: "Admin & coordination",
      text: "Inbox and calendar upkeep, data entry, spreadsheet clean-up, online research and short written reports. Social media and simple design work in Canva.",
      tools: ["Google Workspace", "Microsoft Office", "Excel", "Canva", "Slack", "Microsoft Teams", "Zoom"]
    },
    {
      area: "Customer & technical support",
      text: "Taking a problem from first reply to resolution: reproducing it, finding the root cause, escalating with clear notes and keeping the customer updated in writing.",
      tools: ["Salesforce", "Postman", "API / JSON analysis", "Incident & escalation management"]
    },
    {
      area: "Data",
      text: "Querying and fixing data, maintaining ETL jobs and integrations, and turning tables into something people can read.",
      tools: ["SQL", "MongoDB", "Oracle SQL Developer", "ETL", "Power BI", "Tableau"]
    },
    {
      area: "Web & creative",
      text: "Building and maintaining WordPress sites, plus image and video editing when content needs it.",
      tools: ["WordPress", "HTML", "Adobe Photoshop", "Adobe Premiere Pro"]
    },
    {
      area: "AI tools",
      text: "Drafting and polishing emails and documents, summarizing research, organizing spreadsheet data, and building sites and small automations. Every output is checked by hand before it goes anywhere.",
      tools: ["ChatGPT", "Claude", "Google Gemini", "Microsoft Copilot"]
    },
    {
      area: "Programming",
      text: "A Computer Science degree and software engineering work mean I can read code, write scripts and talk to developers in their terms.",
      tools: ["C#", "Python", "Java", "C++", "PHP", "Vue.js"]
    }
  ],

  /* ---------- Professional experience (newest first) ---------- */
  experience: [
    {
      role: "Technical Support Engineer",
      company: "NiCE",
      start: "Jan 2026",
      end: "Present",
      location: "Hybrid",
      highlights: [
        "Own escalated cases for CXone reporting and dashboard products from first response to resolution",
        "Analyze API/JSON data and reproduce issues across browsers to find the cause",
        "Coordinate with R&D and account managers, and document findings for related incidents"
      ]
    },
    {
      role: "Software Engineer",
      company: "NiCE",
      start: "Jan 2025",
      end: "Jan 2026",
      location: "Remote",
      highlights: [
        "Continued my ClearView responsibilities after NiCE acquired the company",
        "Worked with cross-functional teams to keep data and systems running through the transition"
      ]
    },
    {
      role: "Database Analyst",
      company: "ClearView",
      start: "Jun 2024",
      end: "Jan 2025",
      location: "Remote",
      highlights: [
        "Supported client requests with the Senior Data Services Lead",
        "Troubleshot tickets caused by back-end changes and data issues",
        "Maintained and optimized ETL processes and data integrations, and documented them"
      ]
    },
    {
      role: "Database Administrator",
      company: "Small Business Corporation",
      start: "Aug 2023",
      end: "May 2024",
      location: "Makati · On-site",
      highlights: [
        "Helped design, maintain and optimize databases for integrity, availability and security",
        "Managed user access and permissions; contributed to the Unified Borrower Masterlist project"
      ]
    },
    {
      role: "Intern",
      company: "Hesedovation PTE LTD",
      start: "Mar 2023",
      end: "May 2023",
      location: "",
      highlights: [
        "Helped build a to-do list application with Vue.js"
      ]
    }
  ],

  /* ---------- Projects ----------
     image: a real screenshot in assets/img/ (leave "" for a text-only entry).
     Never publish customer data, internal tools, or confidential case details. */
  projects: [
    {
      title: "Jeannie Roberts, author website",
      summary: "A complete WordPress site for a romance and suspense author: a home for her books, a place to buy them, and a way to grow her reader list.",
      built: [
        "Custom theme, navigation and page layouts",
        "A page for each book, plus an online shop",
        "Newsletter sign-up with a free eBook offer",
        "ARC (advance reader copy) sign-up form"
      ],
      tech: ["WordPress", "Web design", "AI tools"],
      image: "assets/img/author-site.jpg",
      imageAlt: "Home page of authorjeannieroberts.com: the Jeannie Roberts logo, site navigation, the headline All Roads Lead Home and three book covers.",
      demo: "https://authorjeannieroberts.com/",
      repo: ""
    },
    {
      title: "Super Barangay Cleaners",
      summary: "My undergraduate thesis: a third-person shooter whose levels are built by a procedural content generation algorithm. Presented at USLS Computing Expo 1.0 in March 2023.",
      built: [],
      tech: ["Game development", "Procedural generation"],
      image: "",
      imageAlt: "",
      demo: "",
      repo: ""
    },
    {
      title: "This website",
      summary: "Plain HTML, CSS and JavaScript with no build step, hosted free on GitHub Pages. All content lives in one data file.",
      built: [],
      tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      image: "",
      imageAlt: "",
      demo: "",
      repo: "https://github.com/itsnotlnrd/itsnotlnrd.github.io"
    }
  ],

  /* ---------- Education, certifications & training ---------- */
  achievements: [
    { type: "Degree", title: "BS Computer Science", issuer: "University of St. La Salle, Bacolod", date: "2019 – 2023", url: "" },
    { type: "Certificate", title: "EF SET English, C1 Advanced", issuer: "EF SET", date: "Mar 2024", url: "https://cert.efset.org/D7HwzU" },
    { type: "Training", title: "SkillUP: Python Programming", issuer: "EDUCBA", date: "May 2023", url: "" },
    { type: "Training", title: "SkillUP: Tableau", issuer: "EDUCBA", date: "May 2023", url: "" }
  ]
};

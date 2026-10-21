/* Renders content from data.js and wires up interactions.
   You normally don't need to edit this file. Edit data.js instead. */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  var data = window.PORTFOLIO || {};
  var profile = data.profile || {};
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- helpers ----------
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "text") node.textContent = attrs[k];
        else if (k === "class") node.className = attrs[k];
        else node.setAttribute(k, attrs[k]);
      });
    }
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }
  function has(v) { return typeof v === "string" ? v.trim() !== "" : Array.isArray(v) ? v.length > 0 : !!v; }
  function safeUrl(u) { return /^(https?:\/\/|mailto:)/i.test(u) || /^[\w./-]+$/.test(u) ? u : "#"; }
  function link(href, text, external) {
    var a = el("a", { href: safeUrl(href), text: text });
    if (external) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
    return a;
  }
  function empty(title, msg) {
    return el("div", { class: "empty" }, [el("strong", { text: title }), el("p", { text: msg })]);
  }
  function mount(id, nodes) {
    var root = document.getElementById(id);
    if (!root) return;
    nodes.forEach(function (n) { n.classList.add("reveal"); root.appendChild(n); });
  }

  // ---------- skills ----------
  var skills = (data.skills || []).filter(function (s) { return has(s.items); });
  mount("skills-list", skills.length ? skills.map(function (s) {
    return el("article", { class: "skill-card" }, [
      el("h3", { text: s.category }),
      el("ul", { class: "chips" }, s.items.map(function (i) { return el("li", { class: "chip", text: i }); }))
    ]);
  }) : [empty("Skills coming soon", "This section is being updated.")]);

  // ---------- experience ----------
  var exp = data.experience || [];
  mount("experience-list", exp.length ? exp.map(function (e) {
    var dates = [e.start, e.end].filter(has).join(" — ");
    var meta = [dates, e.location].filter(has).join(" · ");
    return el("li", { class: "tl-item" }, [
      el("article", { class: "tl-card" }, [
        el("div", { class: "tl-top" }, [
          el("div", null, [el("h3", { text: e.role }), el("p", { class: "tl-company", text: e.company })]),
          has(meta) ? el("p", { class: "tl-meta", text: meta }) : null
        ]),
        has(e.summary) ? el("p", { class: "tl-summary", text: e.summary }) : null,
        has(e.highlights) ? el("ul", { class: "tl-list" }, e.highlights.map(function (h) { return el("li", { text: h }); })) : null
      ])
    ]);
  }) : [empty("Experience coming soon", "This section is being updated.")]);

  // ---------- projects ----------
  var projects = data.projects || [];
  mount("projects-list", projects.length ? projects.map(function (p) {
    var rows = [["Problem", p.problem], ["Approach", p.approach], ["Outcome", p.outcome]]
      .filter(function (r) { return has(r[1]); });
    var links = [];
    if (has(p.repo)) links.push(link(p.repo, "Source code →", true));
    if (has(p.demo)) links.push(link(p.demo, "Live demo →", true));
    return el("article", { class: "project" }, [
      el("h3", { text: p.title }),
      has(p.overview) ? el("p", { class: "project-overview", text: p.overview }) : null,
      rows.length ? el("dl", null, rows.reduce(function (acc, r) {
        return acc.concat([el("div", null, [el("dt", { text: r[0] }), el("dd", { text: r[1] })])]);
      }, [])) : null,
      has(p.tech) ? el("ul", { class: "chips", "aria-label": "Technologies used" }, p.tech.map(function (t) { return el("li", { class: "chip", text: t }); })) : null,
      links.length ? el("div", { class: "project-links" }, links) : null
    ]);
  }) : [empty("Case studies in progress", "New projects will be published here soon.")]);

  // ---------- achievements ----------
  var ach = data.achievements || [];
  mount("achievements-list", ach.length ? ach.map(function (a) {
    var sub = [a.issuer, a.date].filter(has).join(" · ");
    var title = has(a.url) ? el("h3", null, [link(a.url, a.title, true)]) : el("h3", { text: a.title });
    return el("article", { class: "ach" }, [
      has(a.type) ? el("span", { class: "ach-type", text: a.type }) : null,
      title,
      has(sub) ? el("p", { text: sub }) : null,
      has(a.description) ? el("p", { text: a.description }) : null
    ]);
  }) : [empty("Certifications & achievements coming soon", "Training, certifications and recognition will be listed here.")]);

  // ---------- contact + footer ----------
  var contacts = [];
  if (has(profile.email)) contacts.push({ label: "Email", value: profile.email, href: "mailto:" + profile.email });
  if (has(profile.linkedin)) contacts.push({ label: "LinkedIn", value: profile.linkedin.replace(/^https?:\/\/(www\.)?/, ""), href: profile.linkedin, ext: true });
  if (has(profile.github)) contacts.push({ label: "GitHub", value: profile.github.replace(/^https?:\/\/(www\.)?/, ""), href: profile.github, ext: true });
  (profile.otherLinks || []).forEach(function (o) {
    if (has(o.url)) contacts.push({ label: o.label, value: o.url.replace(/^https?:\/\/(www\.)?/, ""), href: o.url, ext: true });
  });

  var contactList = document.getElementById("contact-list");
  var footerLinks = document.getElementById("footer-links");
  if (contacts.length) {
    contacts.forEach(function (c) {
      var a = link(c.href, "", c.ext);
      a.appendChild(el("span", null, [el("span", { class: "label", text: c.label }), el("span", { class: "value", text: c.value })]));
      a.appendChild(el("span", { class: "arrow", "aria-hidden": "true", text: "→" }));
      contactList.appendChild(el("li", null, [a]));
      footerLinks.appendChild(el("li", null, [link(c.href, c.label, c.ext)]));
    });
  } else {
    contactList.appendChild(el("li", null, [el("p", { text: "Contact links are being added. Please check back shortly." })]));
  }

  // ---------- résumé ----------
  var resume = profile.resume || {};
  var heroBtn = document.querySelector("[data-resume-btn]");
  var resumeActions = document.getElementById("resume-actions");
  var resumeText = document.getElementById("resume-text");
  if (resume.available && has(resume.path)) {
    heroBtn.textContent = "Download résumé";
    heroBtn.href = resume.path;
    heroBtn.setAttribute("download", "");
    resumeActions.appendChild(el("a", { class: "btn btn-primary", href: resume.path, target: "_blank", rel: "noopener", text: "View résumé" }));
    resumeActions.appendChild(el("a", { class: "btn btn-ghost", href: resume.path, download: "", text: "Download PDF" }));
  } else {
    heroBtn.textContent = "Résumé";
    resumeText.textContent = "My résumé is available on request. Reach out and I'll send the latest version.";
    var req = has(profile.email)
      ? el("a", { class: "btn btn-primary", href: "mailto:" + profile.email + "?subject=" + encodeURIComponent("Résumé request"), text: "Request résumé" })
      : el("a", { class: "btn btn-primary", href: "#contact", text: "Get in touch" });
    resumeActions.appendChild(req);
  }

  document.getElementById("year").textContent = new Date().getFullYear();

  // ---------- nav ----------
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var navLinks = document.getElementById("nav-links");
  function setMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    navLinks.classList.toggle("open", open);
  }
  toggle.addEventListener("click", function () { setMenu(toggle.getAttribute("aria-expanded") !== "true"); });
  navLinks.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navLinks.classList.contains("open")) { setMenu(false); toggle.focus(); }
  });
  // active section highlight
  var sectionLinks = {};
  navLinks.querySelectorAll("a[href^='#']").forEach(function (a) { sectionLinks[a.getAttribute("href").slice(1)] = a; });
  function setActive(activeId) {
    Object.keys(sectionLinks).forEach(function (id) {
      var on = id === activeId;
      sectionLinks[id].classList.toggle("active", on);
      if (on) sectionLinks[id].setAttribute("aria-current", "true"); else sectionLinks[id].removeAttribute("aria-current");
    });
  }
  window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 8);
    // the last section is short, so mark it active once the page bottom is reached
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) setActive("contact");
  }, { passive: true });

  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) setActive(en.target.id); });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(sectionLinks).forEach(function (id) { var s = document.getElementById(id); if (s) spy.observe(s); });

    // reveal on scroll
    var rev = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); rev.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    document.querySelectorAll(".reveal").forEach(function (n) { rev.observe(n); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (n) { n.classList.add("in"); });
  }

  // ---------- terminal animation ----------
  var term = document.getElementById("term");
  var lines = [
    [["c-prompt", "$ "], ["c-cmd", "today --plan"]],
    [["c-info", "[task] "], ["", "inbox sorted, priorities flagged "], ["c-ok", "done"]],
    [["c-info", "[task] "], ["", "meetings scheduled ............ "], ["c-ok", "done"]],
    [["c-info", "[task] "], ["", "spreadsheet updated & cleaned . "], ["c-ok", "done"]],
    [["c-info", "[task] "], ["", "customer replies sent ......... "], ["c-ok", "done"]],
    [["c-warn", "[note] "], ["", "research summary ready for review"]],
    [["c-info", "[task] "], ["", "notes documented & shared"]],
    [["c-prompt", "$ "], ["c-cmd", "wrap-up "], ["c-ok", "✓ all tasks complete"]]
  ];
  function span(cls, txt) { var s = document.createElement("span"); if (cls) s.className = cls; s.textContent = txt; return s; }
  if (reduceMotion) {
    lines.forEach(function (l) { l.forEach(function (p) { term.appendChild(span(p[0], p[1])); }); term.appendChild(document.createTextNode("\n")); });
  } else {
    var cursor = span("cursor", "");
    var li = 0, pi = 0, ci = 0, current = null;
    term.appendChild(cursor);
    (function tick() {
      if (li >= lines.length) return;
      var part = lines[li][pi];
      if (!current) { current = span(part[0], ""); term.insertBefore(current, cursor); }
      current.textContent += part[1].charAt(ci++);
      var delay = li === 0 || part[0] === "c-cmd" ? 45 : 14;
      if (ci >= part[1].length) {
        ci = 0; pi++; current = null;
        if (pi >= lines[li].length) { pi = 0; li++; term.insertBefore(document.createTextNode("\n"), cursor); delay = 320; }
      }
      setTimeout(tick, delay);
    })();
  }
})();

/* Renders content from data.js and marks the current section in the nav.
   You normally don't need to edit this file. Edit data.js instead. */
(function () {
  "use strict";

  var data = window.PORTFOLIO || {};
  var profile = data.profile || {};

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
  function bare(url) { return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""); }
  function inline(items, cls) {
    return el("ul", { class: "inline " + (cls || "") }, items.map(function (t) { return el("li", { text: t }); }));
  }
  function mount(id, nodes, emptyText) {
    var root = document.getElementById(id);
    if (!root) return;
    if (!nodes.length) { root.appendChild(el("p", { class: "empty", text: emptyText })); return; }
    nodes.forEach(function (n) { root.appendChild(n); });
  }

  // ---------- what I do ----------
  var caps = data.capabilities || [];
  var capRoot = document.getElementById("skills-list");
  caps.forEach(function (c) {
    capRoot.appendChild(el("div", { class: "cap" }, [
      el("dt", { text: c.area }),
      el("dd", null, [
        has(c.text) ? el("p", { text: c.text }) : null,
        has(c.tools) ? inline(c.tools, "tools") : null
      ])
    ]));
  });
  if (!caps.length) capRoot.appendChild(el("p", { class: "empty", text: "This section is being updated." }));

  // ---------- experience ----------
  mount("experience-list", (data.experience || []).map(function (e) {
    var dates = [e.start, e.end].filter(has).join(" – ");
    return el("li", { class: "job" }, [
      el("p", { class: "job-when", text: dates }),
      el("div", { class: "job-body" }, [
        el("h3", null, [document.createTextNode(e.role + " "), el("span", { class: "job-org", text: "at " + e.company })]),
        has(e.location) ? el("p", { class: "job-where", text: e.location }) : null,
        has(e.highlights) ? el("ul", null, e.highlights.map(function (h) { return el("li", { text: h }); })) : null
      ])
    ]);
  }), "This section is being updated.");

  // ---------- projects ----------
  mount("projects-list", (data.projects || []).map(function (p) {
    var links = [];
    if (has(p.demo)) links.push(link(p.demo, "Visit " + bare(p.demo), true));
    if (has(p.repo)) links.push(link(p.repo, "Source on GitHub", true));
    var featured = has(p.image);
    return el("article", { class: featured ? "project project-featured" : "project" }, [
      featured ? el("figure", { class: "shot" }, [
        el("img", { src: safeUrl(p.image), alt: p.imageAlt || "", loading: "lazy", width: "1200", height: "833" })
      ]) : null,
      el("div", { class: "project-text" }, [
        el("h3", { text: p.title }),
        has(p.summary) ? el("p", { text: p.summary }) : null,
        has(p.tech) ? inline(p.tech, "tools") : null,
        links.length ? el("p", { class: "project-links" }, links) : null
      ]),
      has(p.built) ? el("div", { class: "project-built" }, [
        el("h4", { text: "What I built" }),
        el("ul", null, p.built.map(function (b) { return el("li", { text: b }); }))
      ]) : null
    ]);
  }), "New work will be published here soon.");

  // ---------- education ----------
  mount("achievements-list", (data.achievements || []).map(function (a) {
    var title = has(a.url) ? link(a.url, a.title, true) : document.createTextNode(a.title);
    return el("li", null, [
      el("span", { class: "cred-type", text: a.type || "" }),
      el("span", { class: "cred-title" }, [title]),
      el("span", { class: "cred-meta", text: [a.issuer, a.date].filter(has).join(", ") })
    ]);
  }), "This section is being updated.");

  // ---------- contact ----------
  var contacts = [];
  if (has(profile.email)) contacts.push({ label: "Email", value: profile.email, href: "mailto:" + profile.email });
  if (has(profile.linkedin)) contacts.push({ label: "LinkedIn", value: bare(profile.linkedin), href: profile.linkedin, ext: true });
  if (has(profile.github)) contacts.push({ label: "GitHub", value: bare(profile.github), href: profile.github, ext: true });
  (profile.otherLinks || []).forEach(function (o) {
    if (has(o.url)) contacts.push({ label: o.label, value: bare(o.url), href: o.url, ext: true });
  });
  mount("contact-list", contacts.map(function (c) {
    var a = link(c.href, "", c.ext);
    a.appendChild(el("span", { class: "contact-label", text: c.label }));
    // allow line breaks after slashes so long URLs wrap at a sensible place
    var value = el("span", { class: "contact-value" });
    c.value.split("/").forEach(function (part, i, all) {
      value.appendChild(document.createTextNode(part + (i < all.length - 1 ? "/" : "")));
      if (i < all.length - 1) value.appendChild(el("wbr"));
    });
    a.appendChild(value);
    return el("li", null, [a]);
  }), "Contact links are being added.");

  // ---------- résumé ----------
  var resume = profile.resume || {};
  var resumeText = document.getElementById("resume-text");
  if (resume.available && has(resume.path)) {
    resumeText.appendChild(document.createTextNode("Prefer a document? "));
    resumeText.appendChild(el("a", { href: resume.path, download: "", text: "Download my résumé (PDF)" }));
  } else {
    resumeText.textContent = has(profile.email)
      ? "My résumé is available on request by email."
      : "My résumé is available on request. LinkedIn is the quickest way to reach me.";
  }

  document.getElementById("year").textContent = new Date().getFullYear();

  // ---------- current section in nav ----------
  var navLinks = {};
  document.querySelectorAll("#nav-links a[href^='#']").forEach(function (a) { navLinks[a.getAttribute("href").slice(1)] = a; });
  function setActive(id) {
    Object.keys(navLinks).forEach(function (k) {
      if (k === id) navLinks[k].setAttribute("aria-current", "true"); else navLinks[k].removeAttribute("aria-current");
    });
  }
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) setActive(en.target.id); });
    }, { rootMargin: "-40% 0px -55% 0px" });
    document.querySelectorAll("main > section").forEach(function (s) { spy.observe(s); });
  }
  // the last section is short, so mark it once the page bottom is reached
  window.addEventListener("scroll", function () {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) setActive("contact");
    else if (window.scrollY < 80) setActive("");
  }, { passive: true });
})();

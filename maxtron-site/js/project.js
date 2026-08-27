/* =========================================================================
   MAXTRON RACING CLUB — PROJECT DASHBOARD SCRIPT (project.html)
   ========================================================================= */

(function () {
  const C = window.SITE_CONTENT;
  if (!C) return;

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  let currentCategoryFilter = "All";
  let searchPhrase = "";

  document.addEventListener("DOMContentLoaded", () => {
    initDashboardNav();
    renderOurProject();
    renderRoadmap();
    renderSpecsTable();
    initSpecsSearchAndFilters();
    renderRegulations();

    const hash = window.location.hash;
    if (hash) {
      const sectionName = hash.replace("#", "");
      const map = { project: "project", roadmap: "roadmap", specs: "specs", regulations: "regulations" };
      if (map[sectionName]) {
        switchDashboardSection(map[sectionName]);
      }
    }
  });

  function initDashboardNav() {
    const navButtons = $$("#dbNav button");
    navButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const sectionId = btn.getAttribute("data-section");
        switchDashboardSection(sectionId);
      });
    });
  }

  function switchDashboardSection(sectionId) {
    $$("#dbNav button").forEach((btn) => {
      btn.classList.remove("active");
      if (btn.getAttribute("data-section") === sectionId) {
        btn.classList.add("active");
      }
    });

    $$(".db-section").forEach((sec) => {
      sec.classList.remove("active");
      if (sec.getAttribute("id") === sectionId) {
        sec.classList.add("active");
      }
    });

    window.scrollTo({
      top: $(".project-header").offsetHeight - 40,
      behavior: "smooth"
    });
  }

  function renderOurProject() {
    const featuresList = $("#projectFeatures");
    const pillarsGrid = $("#projectPillars");
    if (!featuresList || !pillarsGrid) return;

    featuresList.innerHTML = "";
    C.project.features.forEach((feat) => {
      const item = document.createElement("div");
      item.className = "proj-feat-item glass-panel";
      item.textContent = feat;
      featuresList.appendChild(item);
    });

    pillarsGrid.innerHTML = "";
    C.project.pillars.forEach((p) => {
      const card = document.createElement("div");
      card.className = "proj-pillar-card glass-panel";
      card.innerHTML = `
        <div class="pillar-icon">${p.icon}</div>
        <h4>${p.title}</h4>
        <p>${p.desc}</p>
      `;
      pillarsGrid.appendChild(card);
    });
  }

  function renderRoadmap() {
    const container = $("#roadmapTimeline");
    if (!container) return;
    container.innerHTML = "";
    C.roadmap.stages.forEach((stage, idx) => {
      const wrap = document.createElement("div");
      wrap.className = `roadmap-card-wrap ${idx % 2 === 1 ? "even" : ""}`;
      wrap.innerHTML = `
        <div class="roadmap-dot"></div>
        <div class="roadmap-card glass-panel">
          <div class="year">${stage.year}</div>
          <h3>${stage.phase}</h3>
          <p>${stage.objective}</p>
        </div>
      `;
      container.appendChild(wrap);
    });
  }

  function renderSpecsTable() {
    const tbody = $("#specsTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    const filteredSpecs = C.technicalSpecs.filter((spec) => {
      const matchesCategory = currentCategoryFilter === "All" || spec.category === currentCategoryFilter;
      const matchesSearch = spec.name.toLowerCase().includes(searchPhrase) ||
        spec.value.toLowerCase().includes(searchPhrase) ||
        spec.category.toLowerCase().includes(searchPhrase);
      return matchesCategory && matchesSearch;
    });

    if (filteredSpecs.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="3" style="text-align: center; color: var(--neutral-500); padding: 40px 0;">
            No matching technical specifications found.
          </td>
        </tr>
      `;
      return;
    }

    filteredSpecs.forEach((spec) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="cat-col">${spec.category}</td>
        <td class="name-col">${spec.name}</td>
        <td class="val-col">${spec.value}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  function initSpecsSearchAndFilters() {
    const searchInput = $("#specsSearch");
    const filterButtons = $$("#specsFilters button");

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchPhrase = e.target.value.toLowerCase().trim();
        renderSpecsTable();
      });
    }

    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        currentCategoryFilter = btn.getAttribute("data-filter");
        renderSpecsTable();
      });
    });
  }

  function renderRegulations() {
    const grid = $("#regsGrid");
    if (!grid) return;
    grid.innerHTML = "";

    C.regulations.forEach((reg, idx) => {
      const item = document.createElement("div");
      item.className = "reg-item";
      const listItems = reg.points.map((p) => `<li>${p}</li>`).join("");
      item.innerHTML = `
        <button class="reg-trigger" aria-expanded="false" data-index="${idx}">
          <h3>${reg.title}</h3>
          <span>+</span>
        </button>
        <div class="reg-content" style="max-height: 0px;">
          <div class="reg-content-inner">
            <ul>${listItems}</ul>
          </div>
        </div>
      `;
      grid.appendChild(item);
    });

    grid.addEventListener("click", (e) => {
      const trigger = e.target.closest(".reg-trigger");
      if (!trigger) return;

      const item = trigger.parentElement;
      const content = item.querySelector(".reg-content");
      const isOpen = item.classList.contains("open");

      $$(".reg-item").forEach((el) => {
        el.classList.remove("open");
        el.querySelector(".reg-content").style.maxHeight = "0px";
        el.querySelector(".reg-trigger").setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("open");
        trigger.setAttribute("aria-expanded", "true");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }

})();

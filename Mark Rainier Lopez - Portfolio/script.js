/* =========================================================
   DOM ELEMENTS
========================================================= */

const sections = document.querySelectorAll(".page-section");
const navItems = document.querySelectorAll("[data-section]");

const sidebar = document.getElementById("sidebar");
const mobileMenu = document.getElementById("mobileMenu");
const mobileClose = document.getElementById("mobileClose");
const sidebarOverlay = document.getElementById("sidebarOverlay");

const themeToggle = document.getElementById("themeToggle");

const photoModal = document.getElementById("photoModal");
const photoModalClose = document.querySelector(".photo-modal-close");
const photoModalOverlay = document.querySelector(".photo-modal-overlay");

const trafficModal = document.getElementById("trafficModal");
const trafficMediaButton = document.querySelector(".traffic-media-btn");
const trafficCloseButton = document.querySelector("#trafficModal .close-btn");


/* =========================================================
   SIDEBAR
========================================================= */

function openSidebar() {

  if (!sidebar || !sidebarOverlay) return;

  sidebar.classList.add("open");
  sidebarOverlay.classList.add("open");

  document.body.classList.add("sidebar-open");
}


function closeSidebar() {

  if (sidebar) {
    sidebar.classList.remove("open");
  }

  if (sidebarOverlay) {
    sidebarOverlay.classList.remove("open");
  }

  document.body.classList.remove("sidebar-open");
}


if (mobileMenu) {
  mobileMenu.addEventListener("click", openSidebar);
}


if (mobileClose) {
  mobileClose.addEventListener("click", closeSidebar);
}


if (sidebarOverlay) {
  sidebarOverlay.addEventListener("click", closeSidebar);
}


/* =========================================================
   SECTION NAVIGATION
========================================================= */

function showSection(sectionId, updateHash = true) {

  const target = document.getElementById(sectionId);

  if (!target) {
    sectionId = "home";
  }


  sections.forEach(section => {
    section.classList.remove("active-section");
  });


  const activeSection = document.getElementById(sectionId);

  if (activeSection) {
    activeSection.classList.add("active-section");
  }


  navItems.forEach(item => {

    if (item.dataset.section === sectionId) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }

  });


  if (updateHash) {

    history.pushState(
      { section: sectionId },
      "",
      `#${sectionId}`
    );

  }


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });


  closeSidebar();
}


/* =========================================================
   NAVIGATION CLICK
========================================================= */

navItems.forEach(item => {

  item.addEventListener("click", event => {

    const sectionId = item.dataset.section;

    if (!sectionId) return;

    event.preventDefault();

    showSection(sectionId);

  });

});


/* =========================================================
   LOAD INITIAL SECTION
========================================================= */

function loadInitialSection() {

  const hash = window.location.hash.replace("#", "");

  if (hash && document.getElementById(hash)) {

    showSection(hash, false);

  } else {

    showSection("home", false);

  }

}


loadInitialSection();


/* =========================================================
   BROWSER BACK / FORWARD
========================================================= */

window.addEventListener("popstate", () => {

  const hash = window.location.hash.replace("#", "");

  showSection(
    hash && document.getElementById(hash)
      ? hash
      : "home",
    false
  );

});


/* =========================================================
   DARK MODE
========================================================= */

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}


function updateThemeIcon() {

  if (!themeToggle) return;

  const icon = themeToggle.querySelector(".theme-icon i");
  const label = themeToggle.querySelector(".theme-copy strong");

  if (!icon || !label) return;


  if (document.body.classList.contains("dark")) {

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

    label.textContent = "Light Mode";

    themeToggle.setAttribute(
      "aria-label",
      "Switch to light mode"
    );

  } else {

    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");

    label.textContent = "Dark Mode";

    themeToggle.setAttribute(
      "aria-label",
      "Switch to dark mode"
    );

  }

}


updateThemeIcon();


if (themeToggle) {

  themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    const theme =
      document.body.classList.contains("dark")
        ? "dark"
        : "light";


    localStorage.setItem(
      "portfolio-theme",
      theme
    );


    updateThemeIcon();

  });

}


/* =========================================================
   PROJECT FLIP CARDS
   CLICK ONLY
========================================================= */

document.querySelectorAll(".flip-card").forEach(card => {


  card.addEventListener("click", event => {

    /*
      Do not flip when clicking buttons
      inside the card.
    */

    if (
      event.target.closest(".view-photos-btn") ||
      event.target.closest(".traffic-media-btn") ||
      event.target.closest(".magic-scheduler-media-btn") ||
      event.target.closest(".project-detail-btn")
    ) {
      return;
    }


    card.classList.toggle("is-flipped");

  });


  card.addEventListener("keydown", event => {

    if (
      event.target.closest(".view-photos-btn") ||
      event.target.closest(".traffic-media-btn") ||
      event.target.closest(".magic-scheduler-media-btn") ||
      event.target.closest(".project-detail-btn")
    ) {
      return;
    }


    if (
      event.key === "Enter" ||
      event.key === " "
    ) {

      event.preventDefault();

      card.classList.toggle("is-flipped");

    }

  });

});


/* =========================================================
   SHARED MODAL HELPERS
   (used by Magic Scheduler media + project case studies)
========================================================= */

function openModal(modal) {

  if (!modal) return;

  modal.classList.add("show");
  document.body.classList.add("modal-open");

}


function closeModal(modal) {

  if (!modal) return;

  modal.classList.remove("show");

  if (!document.querySelector(".modal.show, .photo-modal.open")) {
    document.body.classList.remove("modal-open");
  }

}


/* =========================================================
   SMART SILONG PHOTO MODAL
========================================================= */

function openPhotoModal() {

  if (!photoModal) return;

  photoModal.classList.add("open");

  document.body.classList.add("modal-open");

}


function closePhotoModal() {

  if (!photoModal) return;

  photoModal.classList.remove("open");

  document.body.classList.remove("modal-open");

}


document.querySelectorAll(".view-photos-btn").forEach(button => {

  button.addEventListener("click", event => {

    event.preventDefault();
    event.stopPropagation();

    openPhotoModal();

  });

});


if (photoModalClose) {

  photoModalClose.addEventListener("click", event => {

    event.preventDefault();
    event.stopPropagation();

    closePhotoModal();

  });

}


if (photoModalOverlay) {

  photoModalOverlay.addEventListener(
    "click",
    closePhotoModal
  );

}

/* =========================================================
   MAGIC SCHEDULER MODAL
========================================================= */

const magicSchedulerModal = document.getElementById("magicSchedulerModal");
const magicSchedulerMediaButton = document.querySelector(".magic-scheduler-media-btn");

if (magicSchedulerModal && magicSchedulerMediaButton) {

  magicSchedulerMediaButton.addEventListener("click", event => {

    event.preventDefault();
    event.stopPropagation();

    openModal(magicSchedulerModal);

  });

}


/* =========================================================
   TRAFFIC LIGHT MODAL
========================================================= */

function openTrafficModal() {

  if (!trafficModal) return;

  trafficModal.classList.add("show");

  document.body.classList.add("modal-open");

}


function closeTrafficModal() {

  if (!trafficModal) return;

  trafficModal.classList.remove("show");

  document.body.classList.remove("modal-open");

}


if (trafficMediaButton) {

  trafficMediaButton.addEventListener(
    "click",
    event => {

      event.preventDefault();
      event.stopPropagation();

      openTrafficModal();

    }
  );

}


if (trafficCloseButton) {

  trafficCloseButton.addEventListener(
    "click",
    event => {

      event.preventDefault();
      event.stopPropagation();

      closeTrafficModal();

    }
  );

}


if (trafficModal) {

  trafficModal.addEventListener(
    "click",
    event => {

      if (event.target === trafficModal) {
        closeTrafficModal();
      }

    }
  );

}


/* =========================================================
   PROJECT CASE STUDY MODALS
========================================================= */

document.querySelectorAll(".project-detail-btn").forEach(button => {

  button.addEventListener("click", event => {

    event.preventDefault();
    event.stopPropagation();

    openModal(document.getElementById(button.dataset.detail));

  });

});


/* Close buttons + backdrop click for Magic Scheduler and case studies */

document.querySelectorAll("#magicSchedulerModal, .project-detail").forEach(modal => {

  const closeButton = modal.querySelector(".close-btn");

  if (closeButton) {
    closeButton.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      closeModal(modal);
    });
  }

  modal.addEventListener("click", event => {
    if (event.target === modal) closeModal(modal);
  });

});


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener("keydown", event => {

  if (event.key !== "Escape") return;


  if (
    trafficModal &&
    trafficModal.classList.contains("show")
  ) {

    closeTrafficModal();

  }


  if (
    photoModal &&
    photoModal.classList.contains("open")
  ) {

    closePhotoModal();

  }


  document
    .querySelectorAll("#magicSchedulerModal.show, .project-detail.show")
    .forEach(closeModal);


  closeSidebar();

});
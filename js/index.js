const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");
const portfolioItem = document.querySelectorAll(".portfolio__item");

// To animate the intersection elements coming on screen
const stationaryHiddenElements =
  document.querySelectorAll(".stationary-hidden");
const transformingHiddenElements = document.querySelectorAll(
  ".transforming-hidden"
);

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

document.onclick = function (e) {
  if (
    e.target.id !== "nav-toggle" &&
    e.target.id !== "nav" &&
    e.target.id !== "hamburger" &&
    e.target.id !== "nav__list"
  ) {
    document.body.classList.remove("nav-open");
  }
};

portfolioItem.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.innerHTML;
  });
});

const stationaryObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("stationary-show");
    } else {
      entry.target.classList.remove("stationary-show");
    }
  });
});
stationaryHiddenElements.forEach((el) => stationaryObserver.observe(el));

const transformingObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("transforming-show");
    } else {
      entry.target.classList.remove("transforming-show");
    }
  });
});
transformingHiddenElements.forEach((el) => transformingObserver.observe(el));

const contactUsDialog = document.querySelector(".contact-us-dialog");
const contactUsShowButton = document.querySelector(".contact-us-button");
const footerContactUsShowButton = document.querySelector(
  ".footer__contact-us-button"
);
const contactUsCloseButton = document.querySelector(
  ".contact-us-close-dialog-button"
);

// "Show the dialog" button opens the dialog modally for footer or nav
contactUsShowButton.addEventListener("click", () => {
  contactUsDialog.showModal();
});

footerContactUsShowButton.addEventListener("click", () => {
  contactUsDialog.showModal();
});

// "contactUsCloseButton" button closes the dialog
contactUsCloseButton.addEventListener("click", () => {
  contactUsDialog.close();
});

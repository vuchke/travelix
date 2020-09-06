// Mobile nav
//Selectors
let header = document.querySelector(".header");
let hamburger = document.querySelector(".hamburger-menu");

// nav shrink on scroll
window.addEventListener("scroll", () => {
  let windowPosition = window.scrollY > 500;
  header.classList.toggle("active", windowPosition);
});
// open mob nav
hamburger.addEventListener("click", () => {
  header.classList.toggle("menu-open");
});

// status-bar perc
const bars = document.querySelectorAll(".stats-bar-perc");
const statValue = document.querySelectorAll(".stat-value");
let barSection = document.querySelector(".stats-content");
let done = 0;

function runBars() {
  bars.forEach((bar) => {
    let percentage = bar.dataset.percent;
    let backgroundColor = bar.dataset.color;
    bar.style.width = percentage + "%";
    bar.style.backgroundColor = backgroundColor;
  });

  statValue.forEach((value) => {
    value.innerText = 0;

    let target = +value.dataset.target;
    let speed = target / 100;

    let countValue = function () {
      let displayedValue = +value.innerText;
      if (displayedValue < target) {
        value.innerText = Math.ceil(displayedValue + speed);
        setTimeout(countValue, 20);
      } else {
        value.innerText = target;
        done = 1;
      }
    };
    countValue();
  });
}

const sectionBarObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting && done !== 1) {
      runBars();
    }
  },
  {
    rootMargin: "0px 0px -300px 0px",
  }
);
if (barSection) {
  sectionBarObserver.observe(barSection);
}

// counters
const counters = document.querySelectorAll(".counter");

function runCounter() {
  counters.forEach((counter) => {
    counter.innerText = 0;

    let target = +counter.dataset.target;
    let speed = +counter.dataset.speed;

    let countIt = function () {
      let displayedCount = +counter.innerText;
      if (displayedCount < target) {
        counter.innerText = displayedCount + speed;
        setTimeout(countIt, 50);
      } else {
        counter.innerText = target;
      }
    };
    countIt();
  });
}

let counterSection = document.querySelector(".milestones");

const sectionCounterObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      runCounter();
    }
  },
  {
    rootMargin: "0px 0px -200px 0px",
  }
);

if (counterSection) {
  sectionCounterObserver.observe(counterSection);
}

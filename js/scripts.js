window.addEventListener("DOMContentLoaded", (event) => {
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  navbarShrink();

  document.addEventListener("scroll", navbarShrink);

  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  new SimpleLightbox({
    elements: "#about a.about-box",
  });

  document.body
    .querySelector("i.bi-telegram")
    .addEventListener("click", function (event) {
      alert("Please do not disturb after 10pm");
    });

  addEventListener("keydown", function (event) {
    console.log("You pressed: " + event.key);
  });

  $("document").ready(function () {
    console.log("Document is ready");
  });

  $("#contactForm").submit(function (event) {
    alert("Form was submitted");
    var array = $("#contactForm").serializeArray();
    console.log(array);
    console.log("Form was submitted");
  });

  var active = false;
  var copyright = $("#copyright");
  copyright.on("click", function () {
    if (active) {
      copyright.removeClass("pulse");
      copyright.text("Copyright © 2023 - Examination System")
      active = false;
    } else {
      copyright.addClass("pulse");
      copyright.text("I AM PULSING!")
      active = true;
    }
  });
  
  var isActive = false;
  var form = $("input");
  form.on("click", function () {
    if (isActive) {
      form.removeClass("pulse");
      isActive = false;
    } else {
      form.addClass("pulse");
      isActive = true;
    }
  });
});

function playSound() {
  new Audio("assets/sound/f1_team_radio.mp3").play();
}

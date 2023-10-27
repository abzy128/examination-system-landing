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

  var telegram = document.body.querySelector("i.bi-telegram");
  if (telegram != null) {
    telegram.addEventListener("click", function (event) {
      alert("Please do not disturb after 10pm");
    });
  }

  addEventListener("keydown", function (event) {
    if (event.key === "l" || event.key === "L") {
      $("#unavailable").modal("toggle");
    }
    if(event.key === "p" || event.key === "P") {
      playSound();
    }
    // Commented out because it was annoying
    // if(event.key === "g" || event.key === "G") {
    //   this.window.open("https://google.kz", "_blank")
    // }
    // if(event.key === "a" || event.key === "a") {
    //   this.window.open("https://moodle.astanait.edu.kz", "_blank")
    // }
  });

  $("document").ready(function () {
    console.log("Document is ready");
  });

  $("#contactForm").submit(function (event) {
    event.preventDefault();
    var array = $("#contactForm").serializeArray();
    var form = new FormResponse();
    console.log(array);
    form.Name = array[0].value;
    form.Email = array[1].value;
    form.Phone = array[2].value;
    form.Message = array[3].value;
    console.log(form);
    console.log("Form was submitted");
    alert("Form was submitted");
  });

  var active = false;
  var copyright = $("#copyright");
  copyright.on("mouseover", function () {
    if (active) {
      copyright.removeClass("pulse");
      copyright.text("Copyright © 2023 - Examination System");
      active = false;
    } else {
      copyright.addClass("pulse");
      copyright.text("I AM PULSING!");
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

class FormResponse {
  Name = "";
  Email = "";
  Phone = "";
  Message = "";
}
const navMenu = document.getElementById("nav-menu");
navToggle = document.getElementById("nav-toggle");
navClose = document.getElementById("nav-close");
/*show menu*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
//
/*menu hidden*/
//
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
  /*20,08*/
}
//
/*Remove menu mobile*/
//
const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  //when we clink on each nav-link we remove the show menu
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*--------Shadow header-------*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  /**/
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);
/*------E-MAIL-----------*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();
  //serviceID - templateID - #Form - publicKey
  emailjs
    .sendForm(
      "service_p6ms3uk",
      "template_7iezbih",
      "#contact-form",
      "-1rQDcNdcP8KJdFot"
    )
    .then(
      () => {
        //show sent message
        contactMessage.textContent = "Mensagem enviada com sucesso!";

        //remove message after tree seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 3000);
        //clear input fields
        contactForm.reset();
      },
      () => {
        //show error message
        contactMessage.textContent = "Mensagem não enviada - Erro de serviço";
      }
    );
};
contactForm.addEventListener("submit", sendEmail);
/*------Show scroll up ---------*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  //when the scroll is higher than 350Vh, add the show-scroll
  //class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
/*-------scroll sections active link---------*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*======LIGHT THEME=====*/
/*
const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx bxs-sun";

//previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

//we obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "light" : "dark";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bxs-sun";

//we validate if the user previously chose a topic
if (selectedTheme) {
  //if the validation is fulfilled, we ask what the issue was to know if we activated or desactivated the light
  document.body.classList[selectedTheme === "light" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}
//Activate / desactivated the theme manually with the button

themeButton.addEventListener("click", () => {
  //add or remove the light / icon theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  //we save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
*/

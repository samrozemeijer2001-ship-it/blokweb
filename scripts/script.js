// JavaScript Document
console.log("Ola amigos");

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// =============================
// PARTYHARDY
// =============================

// elementen selecteren
const samImage = document.querySelector('#sam-trigger');
const pageBody = document.body;
const samAudio = document.querySelector('#sam-audio');
const originalSamSrc = samImage.getAttribute('src');
const cheeringSamSrc = 'images/PortretSamJuichen.png';

// beveiliging
if (samImage) {
  samImage.addEventListener('click', startSamEffect);
}

function startSamEffect() {
  // voorkom dubbel klikken
  if (pageBody.classList.contains('sam-party')) return;

  // state activeren
  pageBody.classList.add('sam-party');
  samImage.setAttribute('src', cheeringSamSrc);

  // audio starten
  if (samAudio) {
    samAudio.currentTime = 0;
    samAudio.play();
  }

  // na 7 seconden class weer verwijderen
  setTimeout(stopSamEffect, 7000);
}

function stopSamEffect() {
  pageBody.classList.remove('sam-party');

  // afbeelding terugzetten
  samImage.setAttribute('src', originalSamSrc);

  // audio stoppen
  if (samAudio) {
    samAudio.pause();
    samAudio.currentTime = 0;
  }
}

// =============================
// TERUG TO TOPKNOP
// =============================

const scrollTopBtn = document.getElementById("scroll-top");

if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// =============================
// LADIES THEME
// =============================

const ladiesTrigger = document.getElementById("ladies-trigger");
const sparkleAudio = document.getElementById("sparkle");

if (ladiesTrigger && sparkleAudio) {
  ladiesTrigger.addEventListener("click", () => {

    // thema wisselen
    document.body.classList.toggle("dames");

    // sparkle geluid afspelen
    sparkleAudio.currentTime = 0;
    sparkleAudio.play();

  });
}
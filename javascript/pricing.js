
document.addEventListener("DOMContentLoaded", () => {
  const featured = document.querySelector(".featured");

  featured.addEventListener("mouseenter", () => {
    featured.style.transform = "scale(1.08)";
  });

  featured.addEventListener("mouseleave", () => {
    featured.style.transform = "scale(1.05)";
  });

  console.log("LockIn site loaded ✨ Study smart, stay sassy.");
});

document.addEventListener("DOMContentLoaded", () => {
  const featured = document.querySelector(".featured");

  featured.addEventListener("mouseenter", () => {
    featured.style.transform = "scale(1.08)";
  });

  featured.addEventListener("mouseleave", () => {
    featured.style.transform = "scale(1.05)";
  });

  console.log("LockIn site loaded ✨ Study smart, stay sassy.");
});


function setLanguage(lang) {
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });

 
  if (lang === "fr") {
    document.getElementById("fr").style.fontWeight = "700";
    document.getElementById("en").style.fontWeight = "400";
  } else {
    document.getElementById("en").style.fontWeight = "700";
    document.getElementById("fr").style.fontWeight = "400";
  }
}

document.getElementById("fr").addEventListener("click", () => setLanguage("fr"));
document.getElementById("en").addEventListener("click", () => setLanguage("en"));

setLanguage("en");  

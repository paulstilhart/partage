// Sélection des éléments
const popin = document.querySelector(".js_popin");
const openBtns = document.querySelectorAll(".js_popin_open");
const closeBtn = document.querySelector(".js_popin_close");

// Sécurité si un élément manque
if (popin) {
  const openPopin = () => {
    popin.style.display = "flex";
    document.body.style.overflow = "hidden";
  };

  const closePopin = () => {
    popin.style.display = "none";
    document.body.style.overflow = "";
  };

  // Ouvrir (gère plusieurs triggers)
  openBtns.forEach(btn => btn && btn.addEventListener("click", openPopin));

  // Fermer via la croix
  if (closeBtn) closeBtn.addEventListener("click", closePopin);

  // Fermer en cliquant en dehors du contenu
  window.addEventListener("click", (e) => {
    if (e.target === popin) closePopin();
  });

  // Fermer avec Échap
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && popin.style.display !== "none") {
      closePopin();
    }
  });
}

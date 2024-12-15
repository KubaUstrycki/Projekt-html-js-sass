document.addEventListener("DOMContentLoaded", () => {
  const popup = document.querySelector(".popup");
  const popupClose = document.querySelector(".popup-close");
  const menuItems = document.querySelectorAll(".menu-item");
  const hamburger = document.querySelector(".hamburger");

  // Otwórz pop-up menu po kliknięciu hamburgera
  hamburger.addEventListener("click", () => {
    popup.style.display = "flex";
  });

  // Zamknij pop-up menu po kliknięciu na elementy menu
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      popup.style.display = "none";
      window.location.href = item.querySelector("a").href; // Przejdź do odpowiedniej strony
    });
  });

  // Zamknij pop-up menu po kliknięciu na przycisk zamknięcia
  popupClose.addEventListener("click", () => {
    popup.style.display = "none";
  });
});

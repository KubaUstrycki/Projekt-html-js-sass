const odliczanie = document.getElementById("odliczanie");
const result = document.getElementById("result");
const num = document.getElementById("num");

odliczanie.addEventListener("click", () => {
  result.className = "result";
  console.log("dzial");
  const num2 = parseFloat(num.value);
  let count = num2 + 1;
  const timer = setInterval(function () {
    count--;
    if (count <= 3) {
      result.className = "under3";
    }
    result.textContent = "Zostało " + count + " Sekund";
    if (count === 0) {
      clearInterval(timer);
      result.textContent = "Koniec Czasu!";
    }
  }, 1000);
});

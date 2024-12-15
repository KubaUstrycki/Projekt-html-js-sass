document.addEventListener("DOMContentLoaded", () => {
  const num1Input = document.getElementById("num1");
  const num2Input = document.getElementById("num2");
  const resultDisplay = document.getElementById("result");

  const calculate = (operation) => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    let result;

    switch (operation) {
      case "add":
        result = num1 + num2;
        break;
      case "subtract":
        result = num1 - num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      case "divide":
        result = num2 !== 0 ? num1 / num2 : "Nie można dzielić przez zero!";
        break;
      default:
        result = "Nieznana operacja";
    }

    resultDisplay.textContent = `Wynik: ${result}`;
  };

  document
    .getElementById("add")
    .addEventListener("click", () => calculate("add"));
  document
    .getElementById("subtract")
    .addEventListener("click", () => calculate("subtract"));
  document
    .getElementById("multiply")
    .addEventListener("click", () => calculate("multiply"));
  document
    .getElementById("divide")
    .addEventListener("click", () => calculate("divide"));
});

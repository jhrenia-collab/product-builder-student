
const generatorBtn = document.getElementById("generator-btn");
const lottoSetsContainer = document.getElementById("lotto-sets-container");

generatorBtn.addEventListener("click", () => {
  lottoSetsContainer.innerHTML = ""; // Clear previous sets

  for (let i = 0; i < 5; i++) {
    const lottoSet = document.createElement("div");
    lottoSet.classList.add("lotto-set");

    const numbers = generateLottoNumbers();
    numbers.forEach(number => {
      const lottoBall = document.createElement("div");
      lottoBall.classList.add("lotto-ball");
      lottoBall.textContent = number;
      lottoSet.appendChild(lottoBall);
    });

    lottoSetsContainer.appendChild(lottoSet);
  }
});

function generateLottoNumbers() {
  const numbers = new Set();
  while (numbers.size < 6) {
    numbers.add(Math.floor(Math.random() * 45) + 1);
  }
  return Array.from(numbers).sort((a, b) => a - b);
}


const generatorBtn = document.getElementById("generator-btn");
const lottoSetsContainer = document.getElementById("lotto-sets-container");
const themeSwitch = document.getElementById("checkbox");

// Function to set the theme
function setTheme(isDark) {
  if (isDark) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
    themeSwitch.checked = true;
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
    themeSwitch.checked = false;
  }
}

// Event listener for the theme switch
themeSwitch.addEventListener("change", (e) => {
  setTheme(e.target.checked);
});

// Check for saved theme preference on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    setTheme(true);
  } else {
    setTheme(false);
  }
});


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

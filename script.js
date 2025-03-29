function generatePrimes() {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";
  const n = parseInt(document.getElementById("limit").value);
  if (isNaN(n) || n < 2) return alert("Please enter a number greater than 1.");

  const isPrime = new Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let p = 2; p * p <= n; p++) {
    if (isPrime[p]) {
      for (let i = p * p; i <= n; i += p) {
        isPrime[i] = false;
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    const cell = document.createElement("div");
    cell.className = "number";
    cell.textContent = i;
    cell.classList.add(isPrime[i] ? "prime" : "non-prime");
    grid.appendChild(cell);
  }
}

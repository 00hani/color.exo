const afaf = document.querySelector(".newDiv");

const isPrimeNumber = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
let number = prompt("Enter a number: ");
for (let i = 0; i < number; i++) {
  const bogy = document.createElement("div");
  bogy.textContent = i;
  bogy.className = "box";
  afaf.appendChild(bogy);

  if (i % 2 == 0) {
    bogy.style.background = "green";
  } else if (i % 2 == !0) {
    bogy.style.background = "yellow";
  }
  if (isPrimeNumber(i)) {
    bogy.style.border = "3px solid red";
  }
}

console.log(isPrimeNumber(5));

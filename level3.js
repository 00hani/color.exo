const div1 = document.querySelector(".wrapper");
const lis = document.querySelectorAll("li");
const h1 = document.querySelector(".h1");
lis.forEach((li) => {
  //   element.style.background = "grey";
  if (li.textContent.includes("Done")) {
    li.style.background = "green";
  } else if (li.textContent.includes("Coming")) {
    li.style.background = "yellow";
  } else if (li.textContent.includes("Ongoing")) {
    li.style.background = "red";
  }
});
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
setInterval(() => {
  h1.style.color = getRandomColor();
}, 1000);

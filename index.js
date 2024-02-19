const p1 = document.querySelector("p");
const p2 = document.querySelector("id");
const paragraphs = document.querySelectorAll("p");
for (let index = 0; index < paragraphs.length; index++) {
  //   paragraphs[index].textContent;

  console.log(paragraphs[index].textContent);
}
paragraphs[3].textContent = "nouvaux paragraphe";

//p2.classList.add("newContainer");

// **level2
for (let index = 0; index < paragraphs.length; index++) {
  paragraphs[index].style.color = "red";
  if (index % 2 == 0) {
    paragraphs[index].style.color = "red";
  } else {
    paragraphs[index].style.color = "green";
  }
}
paragraphs.id = "new-id";
paragraphs.forEach((element) => {
  element.classList.add("new-class");
});

// **level3

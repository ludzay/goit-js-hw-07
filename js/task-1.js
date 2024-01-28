const liItems = document.querySelectorAll(".item");
console.log("Numbers of categories: " + liItems.length);
liItems.forEach((element) => {
  const h2Elem = element.querySelector("h2");
  console.log(h2Elem.textContent);
  const SumElem = element.querySelectorAll("li");
  console.log("Elements:" + SumElem.length);
});

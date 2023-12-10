//FOR TOGGLE THE NAVBAR
let menu = document.querySelector(".menu");
let menuBtn = document.querySelector(".menu button");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("opened");
});

//MOUSEOVER UNDERLINE AND SINGLE CARD SECTION
document.addEventListener("DOMContentLoaded", function () {
  /*-------------FIRST IMAGE--------------*/
  let text = document.querySelector("#first-project-content");
  let heading = document.querySelector(".first-small-heading");

  text.addEventListener("mouseover", () => {
    heading.style.textDecoration = "underline";
  });

  text.addEventListener("mouseout", () => {
    heading.style.textDecoration = "";
  });

  //card
  let card_p = document.querySelector(".first-container .card p");
  let card = document.querySelector(".first-container .card");

  heading.addEventListener("mouseover", () => {
    card_p.style.transform = "scale(1.3)";
  });

  heading.addEventListener("mouseout", () => {
    card_p.style.transform = "";
  });

  card.addEventListener("mouseover", () => {
    card_p.style.transform = "scale(1.3)";
  });

  card.addEventListener("mouseout", () => {
    card_p.style.transform = "";
  });

  /*-------------SECOND IMAGE--------------*/

  let secondText = document.querySelector("#second-project-content");
  let secondHeading = document.querySelector(".second-small-heading");

  secondText.addEventListener("mouseover", () => {
    secondHeading.style.textDecoration = "underline";
  });

  secondText.addEventListener("mouseout", () => {
    secondHeading.style.textDecoration = "";
  });

  //card
  let secondCard_p = document.querySelector(".second-conatiner .card p");
  let secondCard = document.querySelector(".second-conatiner .card");

  secondHeading.addEventListener("mouseover", () => {
    secondCard_p.style.transform = "scale(1.3)";
  });

  secondHeading.addEventListener("mouseout", () => {
    secondCard_p.style.transform = "";
  });

  secondCard.addEventListener("mouseover", () => {
    secondCard_p.style.transform = "scale(1.3)";
  });

  secondCard.addEventListener("mouseout", () => {
    secondCard_p.style.transform = "";
  });

  /*-------------SECOND IMAGE--------------*/

  let thirdText = document.querySelector("#third-project-content");
  let thirdHeading = document.querySelector(".third-small-heading");

  thirdText.addEventListener("mouseover", () => {
    thirdHeading.style.textDecoration = "underline";
  });

  thirdText.addEventListener("mouseout", () => {
    thirdHeading.style.textDecoration = "";
  });

  //card
  let thirdCard_p = document.querySelector(".third-container .card p");
  let thirddCard = document.querySelector(".third-container .card");

  thirdHeading.addEventListener("mouseover", () => {
    thirdCard_p.style.transform = "scale(1.3)";
  });

  thirdHeading.addEventListener("mouseout", () => {
    thirdCard_p.style.transform = "";
  });

  thirddCard.addEventListener("mouseover", () => {
    thirdCard_p.style.transform = "scale(1.3)";
  });

  thirddCard.addEventListener("mouseout", () => {
    thirdCard_p.style.transform = "";
  });
});

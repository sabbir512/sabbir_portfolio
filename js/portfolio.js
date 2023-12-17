//MOUSEOVER UNDERLINE AND SINGLE CARD SECTION
document.addEventListener("DOMContentLoaded", function () {
  /*-------------FIRST PORTFOLIO IMAGE--------------*/
  let text = document.querySelector("#portfolio-first-project-content");
  let heading = document.querySelector(".portfolio-first-small-heading");

  text.addEventListener("mouseover", () => {
    heading.style.textDecoration = "underline";
  });

  text.addEventListener("mouseout", () => {
    heading.style.textDecoration = "";
  });

  //card
  let card_p = document.querySelector(
    ".portfolio-first-container .portfolio-card p"
  );
  let card = document.querySelector(
    ".portfolio-first-container .portfolio-card"
  );

  heading.addEventListener("mouseover", () => {
    card_p.style.transform = "scale(1.2)";
  });

  heading.addEventListener("mouseout", () => {
    card_p.style.transform = "";
  });

  card.addEventListener("mouseover", () => {
    card_p.style.transform = "scale(1.2)";
  });

  card.addEventListener("mouseout", () => {
    card_p.style.transform = "";
  });

  /*-------------FIVETH PORTFOLIO IMAGE--------------*/
  let textFiveth = document.querySelector("#portfolio-fiveth-project-content");
  let headingFiveth = document.querySelector(".portfolio-fiveth-small-heading");

  textFiveth.addEventListener("mouseover", () => {
    headingFiveth.style.textDecoration = "underline";
  });

  textFiveth.addEventListener("mouseout", () => {
    headingFiveth.style.textDecoration = "";
  });

  //card
  let card_pFiveth = document.querySelector(
    ".portfolio-fiveth-container .portfolio-card p"
  );
  let cardFiveth = document.querySelector(
    ".portfolio-fiveth-container .portfolio-card"
  );

  headingFiveth.addEventListener("mouseover", () => {
    card_pFiveth.style.transform = "scale(1.1)";
  });

  headingFiveth.addEventListener("mouseout", () => {
    card_pFiveth.style.transform = "";
  });

  cardFiveth.addEventListener("mouseover", () => {
    card_pFiveth.style.transform = "scale(1.1)";
  });

  cardFiveth.addEventListener("mouseout", () => {
    card_pFiveth.style.transform = "";
  });
});

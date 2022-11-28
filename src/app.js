/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const numList = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const pintaList = ["♦", "♥", "♠", "♣"];

  function render(numListfunc, pintaListfunc) {
    const topPinta = document.querySelector(".pinta");
    const number = document.querySelector(".num");
    const bottomPinta = document.querySelector(".inv");

    if (topPinta.classList.contains("col-red")) {
      topPinta.classList.remove("col-red");
    }
    if (bottomPinta.classList.contains("col-red")) {
      bottomPinta.classList.remove("col-red");
    }

    const randomPinta =
      pintaListfunc[Math.floor(Math.random() * pintaListfunc.length)];

    topPinta.innerHTML = randomPinta;
    bottomPinta.innerHTML = randomPinta;
    console.log(randomPinta);

    if (randomPinta === "♥" || randomPinta === "♦") {
      topPinta.classList.add("col-red");
      console.log("cambiada top a rojo");
      bottomPinta.classList.add("col-red");
      console.log("cambiada top a rojo");
    }

    number.innerHTML =
      numListfunc[Math.floor(Math.random() * numListfunc.length)];
  }

  render(numList, pintaList);

  const handleClick = () => {
    render(numList, pintaList);
  };

  const button = document.querySelector(".btn");
  button.addEventListener("click", handleClick);

  console.log("Hello Rigo from the console!");
};

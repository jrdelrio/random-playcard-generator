/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { main } from "@popperjs/core";

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

  const handleClick = () => {
    const topPinta = document.querySelector(".pinta");
    const number = document.querySelector(".num");
    const bottomPinta = document.querySelector(".inv");

    if (topPinta.classList.contains("col-red")) {
      topPinta.classList.remove("col-red");
    }
    if (bottomPinta.classList.contains("col-red")) {
      bottomPinta.classList.remove("col-red");
    }

    const randomPinta = pintaList[Math.floor(Math.random() * pintaList.length)];

    topPinta.innerHTML = randomPinta;
    bottomPinta.innerHTML = randomPinta;
    console.log(randomPinta);

    if (randomPinta === "♥" || randomPinta === "♦") {
      topPinta.classList.add("col-red");
      console.log("cambiada top a rojo");
      bottomPinta.classList.add("col-red");
      console.log("cambiada top a rojo");
    }

    number.innerHTML = numList[Math.floor(Math.random() * numList.length)];

    const inw = document.querySelector("#inputwidth");
    const inh = document.querySelector("#inputheigth");
    const divcard = document.querySelector(".card");

    console.log(inw.value);
    console.log(inh.value);
    if (inw !== "") {
      divcard.style = `height: ${inh.value}px; width: ${inw.value}px;`;
    }

    console.log("renderizado");
  };

  const button = document.querySelector(".btn");
  button.addEventListener("click", handleClick);

  console.log("Hello Rigo from the console!");

  setInterval(handleClick, 10000);
};

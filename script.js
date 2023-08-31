"use strict"

const btn = document.querySelector("#btn");
const textInput = document.querySelector("[type=text]");
const square = document.querySelector("#square");
const eBtn = document.querySelector("#e_btn");
const rangeInput = document.querySelector("[type=range]");
const circle = document.querySelector("#circle");

const changeBackgroundColor = function () {
  square.style.backgroundColor = textInput.value;
  textInput.value = "";
}

const changeSize = function () {
  circle.style.width = rangeInput.value + "%";
  circle.style.height = rangeInput.value + "%";
}

btn.addEventListener("click", changeBackgroundColor)
eBtn.style.display = "none";
rangeInput.addEventListener("input", changeSize);





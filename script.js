const directions = [
  "right top",
  "right",
  "right bottom",
  "bottom",
  "left bottom",
  "left",
  "left top",
  "top",
];

let direction = directions[Math.floor(Math.random() * directions.length)];

const startColor = document.getElementById("first");
const endColor = document.getElementById("second");
const colorPicker = document.querySelectorAll(".color-picker");
const body = document.body;

const arrows = document.getElementById("arrows");
const firstText = document.querySelector(".first-value");
const secondText = document.querySelector(".second-value");
const randomBtn = document.querySelector(".button");
const copyCss = document.querySelector(".copy-css");

function randomGraDent() {
    firstText.textContent = startColor.value = randomColor()
    secondText.textContent = endColor.value = randomColor()
    changeBG(direction)
}

function changeBG(direction) {
  const startColorValue = startColor.value;
  const endColorValue = endColor.value;

  body.style.backgroundImage = `linear-gradient(to ${direction}, ${startColorValue}, ${endColorValue})`;
}

function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

window.addEventListener("DOMContentLoaded", function () {
    randomGraDent()
});

randomBtn.addEventListener("click", function () {
    randomGraDent()
});

arrows.addEventListener("click", function (e) {
  direction = e.target.id;
  console.log(e);
  changeBG(direction);
});

colorPicker.forEach(function (point) {
  point.addEventListener("change", function (e) {
    if (e.currentTarget == startColor) {
      // console.log(e.currentTarget.value);
      firstText.textContent = startColor.value; //changing the text under color picker as per color update
      changeBG(direction);
    } else {
      secondText.textContent = endColor.value;
      changeBG(direction);
    }
  });
});

copyCss.addEventListener('click', function() {
    navigator.clipboard.writeText(`linear-gradient(to ${direction}, ${startColor.value}, ${endColor.value})`)
    alert('css copyed')
})
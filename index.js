const card = document.querySelectorAll(".summary__card");

const colors = ["255,0,0", "255,127,0", "0,255,0", "0,0,255"];

for (let data in card) {
  card[data].style.color = `rgb(${colors[data]})`;
  card[data].style.backgroundColor = `rgba(${colors[data]}, 0.2)`;
}

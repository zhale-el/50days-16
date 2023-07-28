const smallCups = document.querySelectorAll(".cup-small");
const remained = document.getElementById("remained");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");

smallCups.forEach((cup, indx) => {
  cup.addEventListener("click", () => highlightCups(indx));
});

function highlightCups(indx) {
  smallCups.forEach((cup, indx2) => {
    if (indx2 <= indx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
}

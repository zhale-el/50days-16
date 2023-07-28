const smallCups = document.querySelectorAll(".cup-small");
const remained = document.getElementById("remained");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");

updateBigCup();

smallCups.forEach((cup, indx) => {
  cup.addEventListener("click", () => highlightCups(indx));
});

function highlightCups(indx) {
  if (
    smallCups[indx].classList.contains("full") &&
    !smallCups[indx].nextElementSibling?.classList.contains("full")
  ) {
    indx--;
  }

  smallCups.forEach((cup, indx2) => {
    if (indx2 <= indx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateBigCup();
}
function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;

  // if(fullCups===0){

  // }
}

let btnRoll = document.querySelector(".btn-roll");
let dice = document.querySelector('.dice')


    btnRoll.addEventListener("click", function task() {
        const decimalNumber = Math.random() * 5;
        const randomNumber = Math.floor(decimalNumber) + 1;
        dice.innerHTML = randomNumber
      }
    )


document.addEventListener("DOMContentLoaded", function () {
  let h2 = document.querySelector("h2");
   let h3 = document.querySelector("h3");

  let gameSeq = [];
  let userSeq = [];
  let btns = ["yellow", "red", "green", "purple"];
  let started = false;
  let level = 0;

  document.addEventListener("keypress", function () {
      if (started == false) {
          console.log("game is started");
          started = true;
          levelUp();
      }
  });

  function checkAns(idx) {
      if (userSeq[idx] === gameSeq[idx]) {
          if (userSeq.length === gameSeq.length) {
              setTimeout(levelUp, 1000);
          }
      } else {
          h2.innerText = `Game over! Press any key to start.`;
          reset();
      }
  }

  function gameFlash(btn) {
      btn.classList.add("flash");
      setTimeout(() => btn.classList.remove("flash"), 250);
  }

  function userFlash(btn) {
      btn.classList.add("userflash");
      setTimeout(() => btn.classList.remove("userflash"), 250);
  }

  function levelUp() {
      userSeq = [];
      level++;
      h2.innerText = `Level ${level}`;
      let randIdx = Math.floor(Math.random() * 4);
      let randColor = btns[randIdx];
      let randbtn = document.querySelector(`.${randColor}`);
      gameSeq.push(randColor);
      console.log(gameSeq);
      gameFlash(randbtn);
  }

  function btnPress() {
      let btn = this;
      userFlash(btn);
      let userColor = btn.getAttribute("id");
      userSeq.push(userColor);
      checkAns(userSeq.length - 1);
  }

  let allBtns = document.querySelectorAll(".btn");
  for (let btn of allBtns) {
      btn.addEventListener("click", btnPress);
  }

  function reset() {
      started = false;
      gameSeq = [];
      userSeq = [];
      level = 0;
      console.log("over...!");
  }
});













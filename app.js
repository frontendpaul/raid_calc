document.addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    calc();
  }
});

document.getElementById("users2star").addEventListener('blur', calc);
document.getElementById("users3star").addEventListener('blur', calc);
document.getElementById("users4star").addEventListener('blur', calc);
document.getElementById("users5star").addEventListener('blur', calc);

function calc() {
  let usersStars = [];
  let neededStars = [];

  for (let i = 2; i <= 5; i++) {
    usersStars[i] = document.getElementById(`users${i}star`);

    if (!usersStars[i].value) {
      usersStars[i] = 0;
    }
    else {
      usersStars[i] = parseInt(usersStars[i].value);
    }
  }

  for (let i = 5; i >= 2; i--) {
    if (i === 5) neededStars[i] = i - usersStars[i];
    else { neededStars[i] = neededStars[i + 1] * (i + 1) - usersStars[i]; }
    if (neededStars[i] < 0) neededStars[i] = 0;
    console.log(neededStars);
    if (i !== 2) {
      document.getElementById(`output${i}star`).innerHTML = neededStars[i];
      document.getElementById(`max${i - 1}stars`).innerHTML = neededStars[i];
    }
    else {
      document.getElementById(`output${i}star`).innerHTML = neededStars[i];
    }
  }
}


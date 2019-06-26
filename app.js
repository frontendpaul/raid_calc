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
  users2star = document.getElementById("users2star");
  users3star = document.getElementById("users3star");
  users4star = document.getElementById("users4star");
  users5star = document.getElementById("users5star");

  if (!users2star.value) {
    users2star = 0;
  }
  else {
    users2star = parseInt(users2star.value);
  }
  if (!users3star.value) {
    users3star = 0;
  }
  else {
    users3star = parseInt(users3star.value);
  }
  if (!users4star.value) {
    users4star = 0;
  }
  else {
    users4star = parseInt(users4star.value);
  }
  if (!users5star.value) {
    users5star = 0;
  }
  else {
    users5star = parseInt(users5star.value);
  }

  let needed5star = 5 - users5star;
  if (needed5star < 0) needed5star = 0;
  document.getElementById("max4stars").innerHTML = needed5star;
  document.getElementById("output5star").innerHTML = needed5star;

  let needed4star = needed5star * 5 - users4star;
  if (needed4star < 0) needed4star = 0;
  document.getElementById("max3stars").innerHTML = needed4star;
  document.getElementById("output4star").innerHTML = needed4star;

  let needed3star = needed4star * 4 - users3star;
  if (needed3star < 0) needed3star = 0;
  document.getElementById("max2stars").innerHTML = needed3star;
  document.getElementById("output3star").innerHTML = needed3star;

  let needed2star = needed3star * 3 - users2star;
  if (needed2star < 0) needed2star = 0;
  document.getElementById("output2star").innerHTML = needed2star;

  // console.log(document.getElementById("champion-select").value);
}


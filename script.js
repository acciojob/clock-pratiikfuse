//your JS code here. If required.
function getDate() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  return `${month}/${day}/${year}`;
}

function checkIfAMorPM(hours) {
  return hours >= 12 ? "PM" : "AM";
}

function getTime() {
  let date = new Date();
  let hours = date.getHours();
  let AMPM = checkIfAMorPM(hours);

  if (AMPM == "PM") {
    hours = hours % 12;
  }

  if (hours == 0) {
    hours = 12;
  }

  return hours + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + AMPM;
}
// console.log(getDate() + "," + getTime());
let pElement = document.getElementById("timer");
setInterval(() => {
  pElement.innerText = getDate() + ", " + getTime();
}, 1000);

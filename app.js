function displayTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let sec = date.getSeconds();
  let session = document.querySelector("#session");

  if (hours >= 12) {
    session.innerHTML = "PM";
  } else {
    session.innerHTML = "AM";
  }

  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = sec;
}

setInterval(displayTime, 10);

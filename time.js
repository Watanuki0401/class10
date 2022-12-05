const clockContainer = document.querySelector(".clock");
const clockTime = clockContainer.querySelector("h1");


function getTime(){
  const date = new Date();
  const minutus = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTime.innerHTML = `${hours}:${minutus}:${seconds}`;
}

function init(){
  getTime();
  setInterval(getTime,1000);
}

init();

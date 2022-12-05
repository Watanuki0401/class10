const clockContainer = document.querySelector(".clock");
const clockTime = clockContainer.querySelector("h1");

function set2(num){
  var ck = num;
  if (ck < 10){ck = "0" + ck;}
  return ck;
}

function getTime(){
  const date = new Date();
  const minutus = set2(date.getMinutes());
  const hours = set2(date.getHours());
  const seconds = set2(date.getSeconds());
  clockTime.innerHTML = `${hours}:${minutus}:${seconds}`;
}

function init(){
  getTime();
  setInterval(getTime,1000);
}

init();

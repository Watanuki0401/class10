const box = document.querySelector(".year");
const yyyy = box.querySelector("h1:nth-of-type(1)")
const ans = box.querySelector("h1:nth-of-type(3)")

let year = new Date().getFullYear();
// year = yyyy; オーバーライド用
function ck(year){
  yyyy.innerHTML = `${year}`;
  if(year%400 === 0){
    ans.innerHTML = "閏年";
  }else if(year%100 === 0){
    ans.innerHTML = "閏年ではない";
  }else if (year%4 === 0) {
    ans.innerHTML = "閏年";
  }else{
    ans.innerHTML = "閏年ではない";
  }
}

ck(year);

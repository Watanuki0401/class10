function ck(year){
  var flag;
  if(year%400 === 0){
    flag = 1;
  }else if(year%100 === 0){
    flag = 0;
  }else if (year%4 === 0) {
    flag = 1;
  }else{
    flag = 0
  }
  return flag;
}

function check(){
  let year = document.getElementById('year').value;
  const ans = document.querySelector("h1")
  if(ck(year) === 1){
    ans.innerHTML = `${year}` + "年の２月は29日まであります．";
  }else{
    ans.innerHTML = `${year}` + "年の２月は28日まであります．";
  }
}

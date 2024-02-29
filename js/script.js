function checkSame() {
  let t1 = document.getElementById("t1");
  let t2 = document.getElementById("t2");
  let t3 = document.getElementById("t3");
  let t4 = document.getElementById("t4");
  let t5 = document.getElementById("t5");
  
  let name = document.getElementById("name").value;
  
  let count = 0;
  if(t1.checked) {
    count += 1;
  }
  if(t2.checked) {
    count += 1;
  }
  if(t3.checked) {
    count += 1;
  }
  if(t4.checked) {
    count += 1;
  }
  if(t5.checked) {
    count += 1;
  }
  
  alert(`${name}님, 저와 ${count}개의 취향이 같으시네요!`);
}
const newSpan = document.getElementById('span');

let num = 0;
console.log('index.js');
setInterval(
  () => {
    num++;
    console.log(num);
    newSpan.textContent = `${num}`;
  },
  1000,
  num
);

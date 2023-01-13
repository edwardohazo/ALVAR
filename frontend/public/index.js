const newSpan = document.getElementById('span');

let num = 0;

setInterval(
  () => {
    num++;
    console.log(num);
    newSpan.textContent = `${num}`;
  },
  1000,
  num
);

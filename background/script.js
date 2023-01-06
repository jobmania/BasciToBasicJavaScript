const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const h3 = document.querySelector('h3')
const body = document.querySelector('#gradient');



function change() {
  // alert('색변경')
  // alert(color1.value)
  // alert(color2.value)
  body.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
  h3.textContent = '섞은 색깔은 ' + body.style.background + ";"
} 
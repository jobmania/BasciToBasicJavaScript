const panels = document.querySelectorAll('.panel');

panels.forEach( panel => {
  panel.addEventListener('click', () => {
      removeActive() ; // 먼저 active 클래스 제거
      panel.classList.add('active');
  });
})


function removeActive(){
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}
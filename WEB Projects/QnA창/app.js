const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
  //모든 토글에 클릭시 상위객체 (.parentNode) 를 찾아서 active 클래스를 토글
  toggle.addEventListener('click', () => {
      //코드 작성
    console.log(toggle.parentNode)
    toggle.parentNode.classList.toggle('active')  // active css클래스 추가 .
    
  })
})

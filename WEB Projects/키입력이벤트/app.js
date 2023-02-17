// 입력할 태그 객체
const insert = document.getElementById('insert');

// 현재화면에서 키입력시 이벤트 발생
window.addEventListener('keydown', (event) => {
  // console.log(event)        // 삼중 의문문
  insert.innerHTML = `
  <div class="key">
  ${event.key === ' ' ? 'SPACE' : event.key}  
  <small>event.key</small> 
</div>

<div class="key">
  ${event.keyCode}
  <small>event.keyCode</small>
</div>

<div class="key">
  ${event.code}
  <small>event.code</small>
</div>
  `;
});
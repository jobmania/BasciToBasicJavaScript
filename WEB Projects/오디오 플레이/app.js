
const sounds = document.querySelectorAll('audio')
const buttons = document.getElementById('buttons')

// 각각의 사운드 이름으로 버튼 태그를 생성
sounds.forEach((sound) => {
  const btn = document.createElement('button'); // 버튼태그
  btn.classList.add('btn');

  btn.textContent = sound.getAttribute('id'); //사운드 이름을 태그 컨텐트(내용)으로 저장
  btn

  buttons.appendChild(btn)

  // 모든 버튼에 클릭시 이벤트리스너 실행
  btn.addEventListener('click', () => {
    stopSongs()                       
    sound.play()})
  
});


//  모든 오디오를 실행중지 함수 
function stopSongs() {
  sounds.forEach((sound) => {
   
    sound.pause();
    sound.currentTime = 0;
  });
}
// alert('테스트')
//  진행바, 이전 버트, 다음버튼, 동그라미 4개
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

//1,2,3,4 단계 표시
let currentActive = 1
//다음 버튼 클릭시 

next.addEventListener('click', () => {
    currentActive++ // 단계
    // if(currentActive > circles.length){
    //    //버튼을 계속 눌러도 마지막 단계 이상 갈수는 없음(코드 작성)
    //   currentActive = 4;
    // }
    update()
  })

//이전 버튼 클릭시 
prev.addEventListener('click', () => {
  currentActive-- // 단계
  // if(currentActive < 0){
  //   currentActive = 1;
  // }
  update()
})


function update(){
  circles.forEach((circle, idx ) => {
    if(idx < currentActive){
      circle.classList.add('active');
    }else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');
  progress.style.width = (actives.length-1) / (circles.length-1) * 100 + '%';
 
  if(currentActive == 1 ){
    prev.disabled = true; // 버튼 사용중지
  }else if (currentActive == circles.length){
    next.disabled = true;
  }else{
    prev.disabled = false
    next.disabled = false
  }
   

}

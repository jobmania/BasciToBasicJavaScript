//모든 박스를 boxes 상수에 저장
const boxes = document.querySelectorAll('.box');

//윈도우창에서 스크롤하면 => checkBoxes 함수 실행
window.addEventListener('scroll', checkBoxes);

checkBoxes(); //제일 처음 실행

function checkBoxes(){
  //트리거포인트 : 박스를 보여지거나 사라지게 하는 높이
  const triggerBottom = window.innerHeight * 4/5;
  //각각의 박스의 높이를 비교해서
  boxes.forEach(box => {
        //모든 박스에 상단 높이
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom){
          box.classList.add('show');
        } else {
          box.classList.remove('show');
        }
  })
}
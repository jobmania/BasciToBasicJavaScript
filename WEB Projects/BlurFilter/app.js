// alert('테스트')
const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

// 로딩 숫자 초기값 0
let load = 0 ;
// 0.03초에 한번씩 실행 setInterval.
let time = setInterval(blurring, 30) // 단위 ms


function blurring(){  // 
  load++
  console.log(load)
  if(load > 99){
    clearInterval(time)
  } 
  loadText.textContent = `${load}%` //  loadText.textContent글짜 띄우기 load 변수를 벡틱으로 표시한다

  // 1. 블러필터 30px => 0px,  2. 글자 투명도(opacity) 1 -> 0 = 잘보이다가 점점안보임
  loadText.style.opacity = scale(load,0,100,1,0)
  bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`
  

  
}

function scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
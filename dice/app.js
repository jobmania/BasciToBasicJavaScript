// alert('테스트')
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');

// 랜덤 숫자 1~6까지 만들기 
// 랜덤 정수 난수 함수
Math.floor(Math.random() * 6) + 1; //최댓값도 포함, 최솟값도 포함, Math.floor 정수만 출력.. 0 ~ 5.9999 -> (0 ~ 5)+1 -> 1 ~ 6

let randomNum_1 = Math.floor(Math.random() * 6) + 1
let randomNum_2 = Math.floor(Math.random() * 6) + 1

//  입력에 대한 설정 백틱`` 
img1.setAttribute('src', `images/dice${randomNum_1}.png`)
img2.setAttribute('src', `images/dice${randomNum_2}.png`)

// 그냥 변수를 통한 방법
// img1.setAttribute('src', 'images/dice' + randomNum_1 + '.png')
// img2.setAttribute('src', 'images/dice' + randomNum_2 + '.png')

const h1 = document.querySelector('h1');
const h1_image = document.querySelector('.h1_image')

if (randomNum_1 > randomNum_2) {
  h1.textContent = "1번 이김 ㅅㄱ"
  h1_image.setAttribute('src', 'images/new.jpg')
} else if (randomNum_2 > randomNum_1) {
  h1.textContent = "2번 이김 ㅅㄱ"
  h1_image.setAttribute('src', 'images/new2.jpg')
} else {
  h1.textContent = "비김 ㅅㄱ"
  h1_image.setAttribute('src', 'images/flag.png')
}


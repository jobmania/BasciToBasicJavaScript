// alert("안녕")
// const button1 = document.querySelector('button')  //한개만 선택

//addEventListener를 통해 이벤트 발생 
// button1.addEventListener('click', function () { alert('클릭했다') }); // 클릭을하면 해당 함수가 실행된다.
// button1.addEventListener('dbclick', function () { alert('더블클릭했다') }); // 더블 클릭을하면 해당 함수가 실행된다.
// button1.addEventListener('mouseenter', function () { alert('마우스들어옴') }); // 마우스 들어오면 해당 함수가 실행된다.
// button1.addEventListener('mouseleave', function () { alert('마우스나감') }); // 마우스 나가기


const buttons = document.querySelectorAll('.drum')




for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    console.log(this.textContent)

    sound(this.textContent)
    animationDrum(this.textContent)


    // switch (this.textContent) {
    //   case 'w':
    //     buttons[0].classList.add('pressed');
    //     setTimeout(function () {
    //       buttons[0].classList.remove('pressed');
    //     }, 200); // 0.2초 후 실행.
    //     var audio = new Audio('sounds/crash.mp3');
    //     audio.play();
    //     break
    //   case 'a':
    //     buttons[1].classList.add('pressed');
    //     setTimeout(function () {
    //       buttons[1].classList.remove('pressed');
    //     }, 200); // 0.2초 후 실행.
    //     var audio = new Audio('sounds/kick-bass.mp3');
    //     audio.play();
    //     break
    //   case 's':
    //     buttons[2].classList.add('pressed');
    //     setTimeout(function () {
    //       buttons[2].classList.remove('pressed');
    //     }, 200); // 0.2초 후 실행.
    //     var audio = new Audio('sounds/snare.mp3');
    //     audio.play();
    //     break
    //   case 'd':
    //     buttons[3].classList.add('pressed');
    //     setTimeout(function () {
    //       buttons[3].classList.remove('pressed');
    //     }, 200); // 0.2초 후 실행.
    //     var audio = new Audio('sounds/tom-1.mp3');
    //     audio.play();
    //     break
    //   case 'j':
    //     buttons[4].classList.add('pressed');
    //     setTimeout(function () {
    //       buttons[4].classList.remove('pressed');
    //     }, 200); // 0.2초 후 실행.
    //     var audio = new Audio('sounds/tom-2.mp3');
    //     audio.play();
    //     break
    //   case 'k':
    //     buttons[5].classList.add('pressed');
    //     setTimeout(function () {
    //       buttons[5].classList.remove('pressed');
    //     }, 200); // 0.2초 후 실행.
    //     var audio = new Audio('sounds/tom-3.mp3');
    //     audio.play();
    //     break
    //   case 'l':
    //     buttons[6].classList.add('pressed');
    //     setTimeout(function () {
    //       buttons[6].classList.remove('pressed');
    //     }, 200); // 0.2초 후 실행.
    //     var audio = new Audio('sounds/tom-4.mp3');
    //     audio.play();
    //     break

    // }
  });
}



// document.addEventListener('keydown', function (e) {
//   console.log(e)
// })


for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('keydown', function (e) {
    // console.log(e.key)
    animationDrum(e.key)
    sound(e.key)
    // switch (e.key) {
    //   case 'w':
    //     var audio = new Audio('sounds/crash.mp3');
    //     audio.play();
    //     break
    //   case 'a':
    //     var audio = new Audio('sounds/kick-bass.mp3');
    //     audio.play();
    //     break
    //   case 's':
    //     var audio = new Audio('sounds/snare.mp3');
    //     audio.play();
    //     break
    //   case 'd':
    //     var audio = new Audio('sounds/tom-1.mp3');
    //     audio.play();
    //     break
    //   case 'j':
    //     var audio = new Audio('sounds/tom-2.mp3');
    //     audio.play();
    //     break
    //   case 'k':
    //     var audio = new Audio('sounds/tom-3.mp3');
    //     audio.play();
    //     break
    //   case 'l':
    //     var audio = new Audio('sounds/tom-4.mp3');
    //     audio.play();
    //     break
    // }
  });
}


function animationDrum(key) {
  switch (key) {
    case 'w':
      buttons[0].classList.add('pressed');
      setTimeout(function () {
        buttons[0].classList.remove('pressed');
      }, 200); // 0.2초 후 실행.
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break
    case 'a':
      buttons[1].classList.add('pressed');
      setTimeout(function () {
        buttons[1].classList.remove('pressed');
      }, 200); // 0.2초 후 실행.
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break
    case 's':
      buttons[2].classList.add('pressed');
      setTimeout(function () {
        buttons[2].classList.remove('pressed');
      }, 200); // 0.2초 후 실행.
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break
    case 'd':
      buttons[3].classList.add('pressed');
      setTimeout(function () {
        buttons[3].classList.remove('pressed');
      }, 200); // 0.2초 후 실행.
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break
    case 'j':
      buttons[4].classList.add('pressed');
      setTimeout(function () {
        buttons[4].classList.remove('pressed');
      }, 200); // 0.2초 후 실행.
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break
    case 'k':
      buttons[5].classList.add('pressed');
      setTimeout(function () {
        buttons[5].classList.remove('pressed');
      }, 200); // 0.2초 후 실행.
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break
    case 'l':
      buttons[6].classList.add('pressed');
      setTimeout(function () {
        buttons[6].classList.remove('pressed');
      }, 200); // 0.2초 후 실행.
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break

  }

}

function sound(key) {
  switch (key) {
    case 'w':
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break
    case 'a':
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break
    case 's':
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break
    case 'd':
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break
    case 'j':
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break
    case 'k':
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break
    case 'l':
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break
  }
}
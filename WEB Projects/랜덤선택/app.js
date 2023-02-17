//  태그상자와 입력창 textarea
const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');


textarea.focus() // 시작시 입력창 선택 

// 입력할때마다 이벤트 발생   // 키를 입력하고 뗐을때 keydown은 입력할때 
textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)  // 태크 만들기

  if(e.key === 'Enter'){
    setTimeout(() => {
        e.target.value = '' // 입력창 클리어
    }, 10)

    randomSelect() // 태그중 랜덤으로 선택
  }
}) 


function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = 랜덤태그();

    if (randomTag !== undefined) {
      하이라이트(randomTag);

      setTimeout(() => {
        하이라이트제거(randomTag);
      }, 100);
    }
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = 랜덤태그();

      하이라이트(randomTag);
    }, 100);
  }, times * 100);
}

function 랜덤태그() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

function 하이라이트(tag) {
  tag.classList.add('highlight');
}

function 하이라이트제거(tag) {
  tag.classList.remove('highlight');
}

// 입력된 문자열을 태그들로 분리해서 화면 아래에 출력
function createTags(input){
  const tags = input.split(',')
                    .filter(tag => tag.trim() !=='') // 공백을 넣은 것은 제거
                    .map(tag => tag.trim());

  tagsEl.innerHTML = '';
  tags.forEach( tag => {
    const tagEl = document.createElement('span') // 스팬태그 생성
    tagEl.classList.add('tag')
    tagEl.textContent = tag;
    tagsEl.appendChild(tagEl)
  })  
}
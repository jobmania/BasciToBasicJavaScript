// alert('테스트')

const labels = document.querySelectorAll('.form-control label')


labels.forEach((label) => {
  label.innerHTML = label.textContent  //  label.innerHTML '<h1>태그도같이</h1>
    .split('')                        //  label.textContent '오로지 글자다'
    .map((letter, idx) => `<span style="transition-delay:${idx * 80}ms">${letter}</span>`)
    .join('');
});
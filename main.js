//alert('테스트')

let fruits = ["사과", "배", "귤", "수박", "자두"]

// console.log(fruits[0])

// fruits[0] = "좁살"

// console.log(fruits[0])


// 배열의 반복문..
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}


// 객체 생성
// let user = new Object(); // '객체 생성자' 문법

// '객체 리터럴' 문법, 객체 Object(대두분은 자바스크립트는 객체타입임.)
// 객체 key + value(모든 타입이 다 가능), 특별히 함수일때 메서드라고 한다.
let user = {
  name: "강쥐",
  age: 2,
  isOk: "건강함",
  call: function () {
    alert("왈왈왈왈왈" + this.name)
  }
};  
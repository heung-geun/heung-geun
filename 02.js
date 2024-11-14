// // 1. `let` 키워드를 사용하여 변수 `age`를 선언하고 값으로 `25`를 할당하세요.

// let age = 25;


// // 2. 다음 코드의 `typeof` 결과는 무엇인가요?
// const isStudent = true;
// console.log(typeof isStudent);

// true, 참

// // 3. 변수 `score`가 60 이상이면 "합격"을, 그렇지 않으면 "불합격"을 출력하는 `if` 문을 작성하세요.

// let aaa = score => score > 60 ? "합격" : "불합격";

// // 4. 다음 배열에서 두 번째 요소를 출력하는 코드를 작성하세요.
// const fruits = ['사과', '바나나', '체리'];

// console.log(fruits[1]);

// // 5. 두 숫자를 매개변수로 받아 더한 값을 반환하는 함수를 작성하세요.
// function a(a, b){
//     return a + b;
// };
// console.log(a(1, 2));


// // 6. `const`를 사용하여 상수 `PI`를 선언하고 값으로 `3.14`를 할당하세요. 
// // 이 상수에 새로운 값을 할당하려고 하면 어떤 오류가 발생하나요?

// // const 는 한번 값을 세팅하면 변경할 수 없습니다!

// // 7. 두 변수 `a`와 `b`가 모두 참일 때만 "둘 다 참입니다."를 출력하는 코드를 작성하세요.

// let a = true
// let b = true
// if(a === true && b === true){
//     console.log("둘다 참입니다.")
// } else {
//     console.log("엿먹어라!")
// }

// // 8. 숫자 `1`부터 `5`까지 출력하는 `for` 반복문을 작성하세요.

// for(let i = 0; i < 5; i++){
//     console.log(i);
// }

// // 9. `name`과 `age` 속성을 가진 객체 `person`을 생성하고, `name`을 출력하는 코드를 작성하세요.

// let person = {
//     name: "윤형근",
//     age: "만 25",
// }
// console.log(person.name);

// // 10. 변수 `temperature`가 30 이상이면 "더워요", 그렇지 않으면 "괜찮아요"를 변수 `weather`에 할당하는 코드를 삼항 연산자를 사용하여 작성하세요.

// let weather = function(temperature){
//     if(temperature > 30) {
//         console.log("너무 더워용 ㅠㅠ");
//     } else {
//         console.log("츠어여");
//     };
// };
// weather();

// // 11. 배열 `[1, 2, 3, 4, 5]`의 각 요소에 `2`를 곱한 새로운 배열을 반환하는 `map` 함수를 사용한 코드를 작성하세요.

// let bbb = [1, 2, 3, 4, 5];
// let ccc = bbb.map(num)

// 아 강의 그저깨 들어서 기억하는건데 갑자기 생각 안나요 ㅠ

// 12. 다음 코드에서 `increment` 함수를 호출할 때마다 `count`가 증가하는 이유를 설명하세요.
// function createCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }
// const increment = createCounter();
// console.log(increment()); // 1
// console.log(increment()); // 2

// 모르겠습니다. 
// 저거 함수안에 값이라서 초기화 되야 하는거 아닌가요? 왜 저렇게 나오지;;
// 아 함수를 또 사용하는거니까 저건 삭제 되는게 아니고 계속 count 유지 하는건가요?...


// 13. `fetchData`라는 비동기 함수를 `Promise`를 사용하여 작성하고, 데이터가 성공적으로 가져와지면 "데이터 로드 성공"을, 실패하면 "데이터 로드 실패"를 출력하는 코드를 작성하세요.

// 모르겠습니다! 아 들었던건데... 쓰읍

// 14. `Animal` 클래스를 생성하고, `speak` 메소드를 정의하세요. 그 다음 `Dog` 클래스를 `Animal` 클래스에서 상속받아 `speak` 메소드를 오버라이드하여 "멍멍"을 출력하도록 하세요.

// class Animal = new  

// 짬뽕되서 기억이 안나네요 ㅠ

// 15. 다음 코드의 출력 결과를 예측하고, 그 이유를 설명하세요.
let name = "me"
let person = {
  name: '홍길동',
  regularFunction: function () {
    console.log('Regular Function:', this.name);

    setTimeout(function () {
      console.log('Regular Function inside setTimeout:', this.name);
    }, 1000);
  },
  arrowFunction: () => {
    console.log('Arrow Function:', this.name);

    setTimeout(() => {
      console.log('Arrow Function inside setTimeout:', this.name);
    }, 1000);
  },
};

// person.regularFunction(); // 바인딩으로 인해 전역함수가 주체가 되기 때문에 언디파운드가 나옴
person.arrowFunction(); // 화살표 함수는 바인딩을 생략하기 떄문에 주체인 '홍길동' 이 나옴!!! 헷

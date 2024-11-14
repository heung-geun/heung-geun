// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고,
// n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// function solution(n) {
//   let answer = -1;
//   // let i = 1;
//   let x = 2;
//   // let a = x * i;

//   while (x !== n) {
//     console.log(x);
//     if (n % x === 0) {
//         console.log(x);
//       while (x * x === n) {
//         console.log(x);
//         let b = ++x;
//         answer = b * b;
//       }
//     }
//     x++;
//   }
//   //   console.log(answer);
//   return answer;
// }

// // x 는 n이랑 같거나 i*x%n의 나머지가 0이 아니면 -1
// //
// // console.log(solution(81));
// // console.log(solution(3));
// // console.log(solution(121));
// console.log(solution(50000000000000));

// 함수 solution은 정수 n을 매개변수로 입력받습니다.
// n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
// 예를들어 n이 118372면 873211을 리턴하면 됩니다.

function solution(n) {
  let answer = "";
  let a = String(n).split("");
  a.sort(function (b, c) {
    return c - b;
  });
  a.forEach(function (d) {
    answer += d;
  });
  return Number(answer);
}
console.log(solution(1544621));

// function solution(n) {
//     // 문자풀이
//     return parseInt((n+"").split("").sort().reverse().join(""));
// }
// console.log(solution(1544621))

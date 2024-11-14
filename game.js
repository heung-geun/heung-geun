import { houses } from "./house.js";
import battle from "./battle.js";

// import displayStatus from "./battle.js";

// import "./class.js"

// 내가 수정한 코드
export async function startGame(player) {
  console.clear();
  let ground = 1;

  while (player.playerMoney <= 1000) {
    console.log("player.playerMoney 테스트", player.playerMoney);
    console.log("player.pEXP 테스트", player.pEXP);
    await battle(player, ground, houses);
    if (player.pEXP < player.maxEXP) {
      console.log("player.pEXP 테스트", player.pEXP);
      await battle(player, ground, houses);
    } // let maxEXP = player.pLavel + 10;

    // 스테이지 클리어 및 게임 종료 조건
    // 체력바 보이게 만들기 HP: █████████████████░░░ 59/70
    ground++;
  }
}

// export async function startGame() {
//   console.clear();
//   const player = new Player();
//   let stage = 1;

//   while (stage <= 10) {
//     const monster = new House(stage);
//     await battle(stage, player, monster);

//     // 스테이지 클리어 및 게임 종료 조건

//     stage++;
//   }
// }

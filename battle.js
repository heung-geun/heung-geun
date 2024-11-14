import chalk from "chalk";
import readlineSync from "readline-sync";
import { randomHouse } from "./house.js";

const battle = async (player, ground, houses) => {
  console.log("> randomHouses테스트", randomHouse(ground, houses));
  let logs = [];
  let randomHouses = randomHouse(ground, houses);
  console.log("> randomHouses테스트", randomHouses); //

  while (player.pEnergy >= 0) {
    // console.clear();
    displayStatus(player, ground, houses, randomHouses);

    logs.forEach((log) => console.log(log));

    console.log(
      chalk.green(
        `1. ${randomHouses.class1} 를 뒤진다. \n2. 아이탬을 사용한다. \n3. 휴식을 취한다. \n4. 다른집을 찾는다`
      )
    );
    const choice2 = readlineSync.question(` ==> ? `);

    logs.push(chalk.green(`${choice2}를 선택하셨습니다.`));

    function displayGo(houses) {
      let num1 = 0;
      switch (choice2) {
        case "1":
          console.log(
            chalk.green(`${randomHouses.class1}의 집으로 들어갑니다.`)
          );
          housebreaking(player, houses, ground);
          break;
        case "2":
          console.log(
            chalk.blue(
              `아이탬 1. 에너지드링크, 2. 함정 파괴, \n 1, 2중 하나를 선택해 주세요.`
            )
          );
          displayItam(player); // 아이탬창 만들어야 함
          break;
        case "3":
          console.log(chalk.gray("체력을 30 회복합니다."));
          breakTime(); // 체력회복 만들어야함
          break;
        case "4":
          console.log(
            chalk.gray("다른집을 탐색합니다. 체력이 10 감소하였습니다.")
          );
          player.pEnergy -= 10;
          battle(player, ground, houses);
          break;
        default:
          console.log(chalk.red("잘못 선택하셨습니다. 다시 선택해주세요"));
          displayGo(houses); // 유효하지 않은 입력일 경우 다시 입력 받음
      }

      function housebreaking(player, houses, ground) {
        num1 = Math.floor(Math.random() * 100);
        if (num1 < randomHouses.trapClearPercentage) {
          // 성공
          console.log(`무사히 복귀하였습니다.`);
          player.playerMoney += randomHouses.playerMoney;
          player.pEnergy -= randomHouses.houseStamina;
        }
        return battle(player, ground, houses);
      }
    }
    displayGo(houses);
  }
};

function displayStatus(player, ground, houses, randomHouses) {
  console.log("randomHouses테스트", randomHouses);

  console.log(
    chalk.magentaBright(
      `\n====================== Current Status ======================`
    )
  );
  console.log(
    chalk.cyanBright(`| ground: ${ground} |`) +
      chalk.blueBright(
        `\n\n| 닉네임: ${player.playerName} | 체력: ${player.pEnergy} | 내돈: ${player.playerMoney} | 도둑질 레벨: ${player.pLavel} |`
      ) +
      chalk.redBright(
        `\n\n◆ ${randomHouses.class1} \n\n> ${randomHouses.description}\n\n> 방해요소: ${randomHouses.mantrap}\n`
      )
  );

  console.log(
    chalk.magentaBright(
      `===========================================================\n`
    )
  );
}

export default battle;
//   export {displayStatus};

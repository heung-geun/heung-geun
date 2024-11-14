import chalk from "chalk";
import figlet from "figlet";
import readlineSync from "readline-sync";
import { startGame } from "./game.js";
import { Player } from "./class.js";

// 로비 화면을 출력하는 함수
function displayLobby() {
  console.clear();

  // 타이틀 텍스트
  console.log(
    chalk.cyan(
      figlet.textSync("Rob A House", {
        font: "Standard",
        horizontalLayout: "default",
        verticalLayout: "default",
      })
    )
  );

  // 상단 경계선
  const line = chalk.magentaBright("=".repeat(58));
  console.log(line);

  // 게임 이름
  console.log(
    chalk.yellowBright.bold(
      `
＼(╹◡╹＼Ξ／╹◡╹)／                            ヘ(￣ー￣ヘ)  

                     Rob  A  House
        
＼(╹◡╹＼Ξ／╹◡╹)／                            ヘ(￣ー￣ヘ)


`
    )
  );

  // 설명 텍스트
  console.log(chalk.green("매뉴를 선택해주세요."));
  console.log();

  // 옵션들
  console.log(chalk.blue("1.") + chalk.white(" 새로운 게임 시작"));
  console.log(chalk.blue("2.") + chalk.white(" 닉네임 설정하기"));
  console.log(chalk.blue("3.") + chalk.white(" 종료"));

  // 하단 경계선
  console.log(line);

  // 하단 설명
  console.log(chalk.gray("1-4 사이의 수를 입력한 뒤 엔터를 누르세요."));
}

const player = new Player("도두기", 100, 100, 0, {energyDrink: 0, trapDel: 0}, 0);

// 유저 입력을 받아 처리하는 함수
function handleUserInput(player) {
  const choice = readlineSync.question(" ==> : ");
  
    switch (choice) {
    case "1":
      console.log(chalk.green("게임을 시작합니다."));
      // 여기에서 새로운 게임 시작 로직을 구현
      startGame(player);
      break;
    case "2":
      console.log(chalk.yellow("닉네임을 적어주세요."));
      playerNames(player);
      break;
    case "3":
      console.log(chalk.red("게임을 종료합니다."));
      // 게임 종료 로직을 구현
      process.exit(0); // 게임 종료
    default:
      console.log(chalk.red("올바른 선택을 하세요."));
      handleUserInput(player); // 유효하지 않은 입력일 경우 다시 입력 받음
  }
}

function playerNames(player) {
  const nickname = readlineSync.question(" ==> : ");
  console.log(`안녕하세요 ${nickname}님 닉네임 설정이 완료되었습니다.`)
  player.playerName = nickname;
  handleUserInput(player);
}


// 게임 시작 함수
function start(player) {
  displayLobby();
  handleUserInput(player);
}

// 게임 실행
start(player);

import { House } from "./class.js";
import chalk from "chalk";

// 집 생성
const houseF = new House(
  "오래된 주택 F", // 이름
  `허술해 보이는 \n  주택이다. \n  집안에는 사람이 \n  없는듯 하다.`, // 설명
  "장미꽃 담벼락-5%)", // 함정 설명
  95, // 함정 성공확률
  20, // 클리어 감소 체력
  function (moneys) {
    // 클리어 돈보상
    return (moneys = Math.ceil(Math.random() * 5));
  },
  1 // 클리어 경험치
);
const houseE = new House(
  "평범한 주택 E",
  `허술해 보이는 \n  주택이다. \n  집안에는 사람이 \n  없는듯 하다.`,
  "집지키는 진돗개(-15%)",
  85,
  20,
  function (moneys) {
    return (moneys = Math.ceil(Math.random() * 10 - 5) + 5);
  },
  2
);
const houseD = new House(
  " 빌    라  D",
  `허술해 보이는 \n  빌라다. \n  집안은 보이지 \n  않는다.`,
  "잠자는 경비원(-35%)",
  65,
  30,
  function (moneys) {
    return (moneys = Math.ceil(Math.random() * 20 - 10) + 10);
  },
  3
);
const houseC = new House(
  " 아  파  트 C",
  `입구에 경비실이 \n  있다. \n  지금은 순찰중인 \n  것 같다.`,
  "아파트 경비원(-50%)",
  50,
  30,
  function (moneys) {
    return (moneys = Math.ceil(Math.random() * 50 - 15) + 15);
  },
  4
);
const houseB = new House(
  " 아  파  트 B",
  `집안은 보이지 않는다. \n  집주인이 졸부라는 \n  소문이...`,
  "아파트 경비원, 금고(-70%)",
  30,
  40,
  function (moneys) {
    return (moneys = Math.ceil(Math.random() * 100 - 30) + 30);
  },
  5
);
const houseA = new House(
  "부잣집 저택 A",
  `국회의원의 \n  저택인듯 하다. \n  금고만 털면 \n  부자가 될지도?`,
  "개인 경비원, 금고 및 CCTV 보안(-85%)",
  15,
  70,
  function (moneys) {
    return (moneys = Math.ceil(Math.random() * 450 - 300) + 300);
  },
  6
);
const houseH = new House(
  " 폐  가  Hidden",
  `귀신이 나올 듯한 \n  폐가이다. \n  땅속에 금괴가 \n  묻혀있다는 소문이!?`,
  "구덩이(-10%)",
  90,
  50,
  function (moneys) {
    return (moneys = Math.ceil(Math.random() * 500));
  },
  1
);
const houses = [houseF, houseE, houseD, houseC, houseB, houseA, houseH];


function randomHouse(ground, houses) {
  let rand_0_99 = Math.floor(Math.random() * 100);
  switch (ground, rand_0_99) {
    case 1:
      groundHouse1(houses);
      return;
    case 2:
      groundHouse2(houses);
      return;
    case 3:
      groundHouse3(houses);
      return;
    case 4:
      groundHouse4(houses);
      return;
    case 5:
      groundHouse5(houses);
      return;
    default:
      console.log(chalk.red("오류가 발생하였습니다. 게임을 종료합니다."));
      process.exit(0);
  }
}
function groundHouse1(houses, rand_0_99) {
  // console.log(houseF);
  if (rand_0_99 < 90) {
    return houses[0];
  } else {
    return houses[1];
  }
}
function groundHouse2(houses, rand_0_99) {
  // console.log(houseF);
  if (rand_0_99 < 30) {
    return houses[0];
  } else if (rand_0_99 < 80) {
    return houses[1];
  } else {
    return houses[2];
  }
}

function groundHouse3(houses, rand_0_99) {
  if (rand_0_99 < 10) {
    return houses[0];
  } else if (rand_0_99 < 50) {
    return houses[1];
  } else if (rand_0_99 < 90) {
    return houses[2];
  } else {
    return houses[3];
  }
}

function groundHouse4(houses, rand_0_99) {
  if (rand_0_99 < 10) {
    return houses[1];
  } else if (rand_0_99 < 30) {
    return houses[2];
  } else if (rand_0_99 < 55) {
    return houses[3];
  } else if (rand_0_99 < 88) {
    return houses[4];
  } else if (rand_0_99 < 99) {
    return houses[5];
  } else {
    return houses[6];
  }
}

function groundHouse5(houses, rand_0_99) {
  if (rand_0_99 < 5) {
    return houses[1];
  } else if (rand_0_99 < 20) {
    return houses[2];
  } else if (rand_0_99 < 40) {
    return houses[3];
  } else if (rand_0_99 < 60) {
    return houses[4];
  } else if (rand_0_99 < 95) {
    return houses[5];
  } else {
    return houses[6];
  }
}

export { houses, randomHouse };

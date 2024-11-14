class House {
  constructor(
    name, // 이름
    description, // 집 설명
    trapTitle, // 함정 이름
    trapClearPercentage, // 아이템으로 함정 부술 수 있는 확률
    houseStamina, // 집의 공격력
    money, // 집에 있는 보상
    hEXP, // 클리어 경험치
  ) {
    this.name = name;
    this.description = description;
    this.trapTitle = trapTitle;
    this.trapClearPercentage = trapClearPercentage;
    this.houseStamina = houseStamina;
    this.money = money;
    this.hEXP = hEXP;
  }

  attack(playerDamage) {
    //   if() {}
    // 몬스터의 공격

    // if (playerDamage * this.trapClearPercentage)
  }
}

class Player {
  constructor(
    playerName,
    pEnergy,
    maxEnergy,
    playerMoney,
    pPocket,
    pEXP
  ) {
    // 현재 체력/ 최대체력(최대체력 증가가능)
    // 만랩 5랩, 집털기 실패시 money -10,
    this.playerName = playerName;
    this.pEnergy = pEnergy;
    this.maxEnergy = maxEnergy;
    this.playerMoney = playerMoney;
    this.pPocket = pPocket;
    this.pEXP = pEXP;
  }

  attack() {
    // 플레이어의 공격
  }
}

export { House, Player };

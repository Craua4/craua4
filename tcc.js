let number = Math.floor(Math.random() * (10 + 1))
const player = {
  hp: 120,
  maxHp: 100,
  level: 4,
  xp: 0,
  potions: 3,
  floor: 4
};

let enemy = null;
let saindo = 0

const enemies1 = [
  { name: "Goblin", hp: 30, attack: 5, xp: 10 },
  { name: "Esqueleto", hp: 40, attack: 8, xp: 15 },
  { name: "Orc", hp: 50, attack: 12, xp: 25 }
];

const enemies2 = [
  { name: "Goblin Ligeiro", hp: 40, attack: 7, xp: 15},
  { name: "Esqueleto de Grife", hp: 50, attack: 10, xp: 20},
  { name: "Ogro", hp: 60, attack: 15, xp: 30}
]

const enemies3 = [
  { name: "Goblin Líder", hp: 50, attack: 9, xp: 20},
  { name: "Devorador de Almas", hp: 60, attack: 12, xp: 25},
  { name: "Golem", hp: 65, attack: 18, xp: 40}
]

const enemies4 = [
  { name: "Misterioso Mestre da Magia", hp: 50, attack: 11, xp: 100},
  { name: "Ceifador das Almas", hp: 60, attack: 14, xp: 125},
  { name: "Titã", hp: 65, attack: 21, xp: 150}
]
const enemies5 = [
  { name: "Misterioso Mestre da Magia (PODEROSO)", hp: 50, attack: 13, xp: 125},
  { name: "Ceifador das Almas (PODEROSO)", hp: 60, attack: 16, xp: 150},
  { name: "Titã (PODEROSO)", hp: 65, attack: 24, xp: 175}
]

function updateUI() {
  document.getElementById("playerHP").innerText = player.hp + "/" + player.maxHp;
  document.getElementById("playerLevel").innerText = player.level;
  document.getElementById("playerXP").innerText = player.xp;
  document.getElementById("potions").innerText = player.potions;
  document.getElementById("floor").innerText = player.floor;

  if (enemy) {
    document.getElementById("enemyName").innerText = enemy.name;
    document.getElementById("enemyHP").innerText = enemy.hp;
  } else {
    document.getElementById("enemyName").innerText = "Nenhum";
    document.getElementById("enemyHP").innerText = "-";
  }
}

function log(message) {
  const logDiv = document.getElementById("log");
  logDiv.innerHTML += message + "<br>";
  logDiv.scrollTop = logDiv.scrollHeight;
}
function nextEnemy() {
    if(player.floor == 1) {
        const randomEnemy = enemies1[Math.floor(Math.random() * enemies1.length)];
        enemy = { ...randomEnemy };
        log("Um " + enemy.name + " apareceu!");
    }
    if(player.floor == 2) {
        const randomEnemy = enemies2[Math.floor(Math.random() * enemies2.length)];
        enemy = { ...randomEnemy };
        log("Um " + enemy.name + " apareceu!");
    }
    if(player.floor == 3) {
        const randomEnemy = enemies3[Math.floor(Math.random() * enemies3.length)];
        enemy = { ...randomEnemy };
        log("Um " + enemy.name + " apareceu!");
    }
    if(player.floor == 4) {
        const randomEnemy = enemies4[Math.floor(Math.random() * enemies4.length)];
        enemy = { ...randomEnemy };
        log("O " + enemy.name + " apareceu!");
    }
    if(player.floor == 5) {
        const randomEnemy = enemies5[Math.floor(Math.random() * enemies5.length)];
        enemy = { ...randomEnemy };
        log("O " + enemy.name + " apareceu!");
    }
    if(player.floor == 6) {
      log("A último tesouro é encontrado...")
    }
    if(player.floor < player.level) {
        number = Math.floor(Math.random() * (10 + 1))
        if(number >= 8){
          log("Você foi soterrado pelo teto da sala!")
          log("===============================VOCÊ MORREU!===============================")
          resetGame();
        } else{
          log("O teto deste andar parece estar se rachando...")
        }
    }
  updateUI();
}

function attack() {
  if (!enemy) {
    log("Não há inimigo!");
    return;
  }

  const playerDamage = Math.floor(Math.random() * 15) + 5;
  enemy.hp -= playerDamage;
  log("Você causou " + playerDamage + " de dano!");

  if (enemy.hp <= 0) {
    log("Você derrotou o " + enemy.name + "!");
    gainXP(enemy.xp);
    enemy = null;
    updateUI();
    return;
  }
  if (enemy.hp <= 0 && player.floor == 4) {
    log("Você derrotou o " + enemy.name + "!");
    log("Você encontoru uma saída!")
    saindo++;
    gainXP(enemy.xp);
    enemy = null;
    updateUI();
    return;
  }

  const enemyDamage = Math.floor(Math.random() * enemy.attack) + 1;
  player.hp -= enemyDamage;
  log(enemy.name + " causou " + enemyDamage + " de dano!");

  if (player.hp <= 0) {
    log("===============================VOCÊ MORREU!===============================");
    resetGame();
  }

  updateUI();
}

function usePotion() {
  if (player.potions > 0) {
    if(player.hp < player.maxHp){
      player.potions--;
      log("Você usou uma poção!");
    }else{
      log("Seu HP já está curado!")
    }
    player.hp += 30;
    if (player.hp > player.maxHp) {
      player.hp = player.maxHp;
    }
  } else {
    log("Sem poções!");
  }
  updateUI();
}

function gainXP(amount) {
  player.xp += amount;
  log("Você ganhou " + amount + " XP!");

  if (player.xp >= player.level * 50) {
    player.level++;
    player.maxHp += 20;
    player.xp = 0;
    log("Você subiu para o nível " + player.level + "!");
  }
}

function nextFloor() {
  if(player.level > player.floor) {
    player.floor++;
    log("Você subiu de andar! (Novos desafios...)")

        
    if(player.hp > player.maxHp/1.5) {
      log("Os portões da dungeon estão gritando seu nome...")
    }
    if(player.hp > player.maxHp/2 && player.hp <= player.maxHp/1.5) {
      player.potions++;
      log("Por sorte você acha uma poção no final!")
    }
    if(player.hp > player.maxHp/3 && player.hp <= player.maxHp/2) {
      player.potions+=2;
      log("Como você estava ferido, um homem caridoso te dá 2 poções!")
    }
    if(player.hp <= player.maxHp/3) {
      player.potions+=3;
      log("Você acerta o jackpot na guilda e ganha 3 poções!")
    }
  } else{
    log("Você não é experiente o suficiente para subir de andar!")
  }
  updateUI();
}

function saida() {
  if(player.floor <= 5) {
    log("Não importe o que tente, não há como fugir...");
  }
  else if(player.floor >= 6) {
    log("===============================VOCÊ VENCEU!===============================");
    resetGame();
  }
}


function resetGame() {
  player.hp = 100;
  player.maxHp = 100;
  player.level = 1;
  player.xp = 0;
  player.potions = 3;
  player.floor = 1;
  enemy = null;
  updateUI();
}

updateUI();
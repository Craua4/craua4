const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const scoreHTML = document.getElementById("score");
const boostsHTML = document.getElementById("boost");
const saida = document.getElementById("saida");

let keys = {};
let playerX = 100;
let playerY = 100;
let playerSpeed = 1;
let bullets = [];
let bulletSpeed = 6 ;
let lastDirection = { x: 0, y: -1 }; // começa atirando para cima
let shootCooldown = 300; // milissegundos
let lastShotTime = 0;

let boostCharges = 3;
let speedBoost = 1.5;
let boostDuration = 1000;
let scoreForRecharge = 1000;
let nextRecharge = scoreForRecharge;

let enemyX = 600;
let enemyY = 600;
let enemySpeed = 0.01;
let score = 0;

document.addEventListener("keydown", e => {
    keys[e.key] = true;
    saida.textContent = "Você pressionou: " + e.key + " (código: " + e.code + ")";

    if (e.key === " " && boostCharges > 0) {
        boostCharges--;
        playerSpeed *= speedBoost;
        setTimeout(() => {
            playerSpeed /= speedBoost;
        }, boostDuration);
    }

    if (e.key === "f" || e.key === "F") {
    shoot();

    if ((e.key === "f" || e.key === "F")) {
    const now = Date.now();

    if (now - lastShotTime > shootCooldown) {
        shoot();
        lastShotTime = now;
    }
}
}
});
document.addEventListener("keyup", e => keys[e.key] = false);

function updatePlayer() {
    let moving = false;

    if (keys["w"] || keys["W"] || keys["ArrowUp"]) {
        playerY -= playerSpeed;
        lastDirection = { x: 0, y: -1 };
        moving = true;
    }
    if (keys["s"] || keys["S"] || keys["ArrowDown"]) {
        playerY += playerSpeed;
        lastDirection = { x: 0, y: 1 };
        moving = true;
    }
    if (keys["a"] || keys["A"] || keys["ArrowLeft"]) {
        playerX -= playerSpeed;
        lastDirection = { x: -1, y: 0 };
        moving = true;
    }
    if (keys["d"] || keys["D"] || keys["ArrowRight"]) {
        playerX += playerSpeed;
        lastDirection = { x: 1, y: 0 };
        moving = true;
    }

    playerX = Math.max(0, Math.min(window.innerWidth - 40, playerX));
    playerY = Math.max(0, Math.min(window.innerHeight - 40, playerY));

    player.style.left = playerX + "px";
    player.style.top  = playerY + "px";
}

function enemyChase() {
    const dx = playerX - enemyX;
    const dy = playerY - enemyY;
    const dist = Math.sqrt(dx*dx + dy*dy);

    if (dist > 1) {
        enemyX += (dx / dist) * enemySpeed * 0.5;
        enemyY += (dy / dist) * enemySpeed * 0.5;
    }

    enemy.style.left = enemyX + "px";
    enemy.style.top = enemyY + "px";

    score++;
    scoreHTML.textContent = "Pontos: " + score;

    if (score >= nextRecharge) {
        boostCharges = Math.min(boostCharges + 1, 3);
        nextRecharge += scoreForRecharge;
    }
    boostsHTML.textContent = "Boosts: " + boostCharges;

    enemySpeed += 0.0005; // cresce mais devagar mas constante

    // A cada 2000 pontos aumenta dificuldade
    if (score % 2000 === 0) {
        enemySpeed += 0.5;
        shootCooldown = Math.max(100, shootCooldown - 20); // atira mais rápido
    }

    if (dist < 40) {
        scoreHTML.textContent = "GAME OVER!";
        alert("Você fez " + score + " pontos!");
        location.reload();
        return;
    }

    updatePlayer();
    updateBullets();
    requestAnimationFrame(enemyChase);
}

function shoot() {
    const bullet = document.createElement("div");
    bullet.classList.add("bullet");
    document.body.appendChild(bullet);

    bullets.push({
        element: bullet,
        x: playerX + 15,
        y: playerY + 15,
        dx: lastDirection.x,
        dy: lastDirection.y
    });
}

function updateBullets() {
    for (let i = bullets.length - 1; i >= 0; i--) {
        let b = bullets[i];

        b.x += b.dx * bulletSpeed;
        b.y += b.dy * bulletSpeed;

        b.element.style.left = b.x + "px";
        b.element.style.top  = b.y + "px";

        const dx = b.x - enemyX;
        const dy = b.y - enemyY;
        const dist = Math.sqrt(dx*dx + dy*dy);

        if (dist < 30) {
            b.element.remove();
            bullets.splice(i, 1);

            enemyX = Math.random() * window.innerWidth;
            enemyY = Math.random() * window.innerHeight;

            score += 200;
            continue;
        }

        if (
            b.x < 0 ||
            b.x > window.innerWidth ||
            b.y < 0 ||
            b.y > window.innerHeight
        ) {
            b.element.remove();
            bullets.splice(i, 1);
        }
    }
}

enemyChase();
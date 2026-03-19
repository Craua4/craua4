import os
import random
import msvcrt  # Windows only

WIDTH = 20
HEIGHT = 10

player_x = WIDTH // 2
player_y = HEIGHT // 2
player_size = 1

# Comida
num_food = 10
foods = set()
while len(foods) < num_food:
    fx = random.randint(0, WIDTH - 1)
    fy = random.randint(0, HEIGHT - 1)
    if (fx, fy) != (player_x, player_y):
        foods.add((fx, fy))

# Inimigos: (x, y, size)
num_enemies = 3
enemies = []
while len(enemies) < num_enemies:
    ex = random.randint(0, WIDTH - 1)
    ey = random.randint(0, HEIGHT - 1)
    if (ex, ey) != (player_x, player_y) and (ex, ey) not in foods:
        enemies.append([ex, ey, random.randint(1, 3)])

def clear():
    os.system('cls' if os.name == 'nt' else 'clear')

def draw():
    clear()
    for y in range(HEIGHT):
        for x in range(WIDTH):
            if (x, y) == (player_x, player_y):
                print(str(player_size), end="")
            elif (x, y) in foods:
                print("*", end="")
            elif any(ex == x and ey == y for ex, ey, _ in enemies):
                print("E", end="")
            else:
                print(".", end="")
        print()
    print("\nUse W A S D para mover. Comer * ou inimigos menores para crescer. Q para sair.")

def move_player(dx, dy):
    global player_x, player_y, player_size
    nx, ny = player_x + dx, player_y + dy
    if 0 <= nx < WIDTH and 0 <= ny < HEIGHT:
        player_x, player_y = nx, ny
        if (nx, ny) in foods:
            foods.remove((nx, ny))
            player_size += 1
        for enemy in enemies[:]:
            if enemy[0] == nx and enemy[1] == ny:
                if player_size > enemy[2]:
                    enemies.remove(enemy)
                    player_size += enemy[2]
                else:
                    print("Você foi devorado por um inimigo maior! Fim de jogo.")
                    exit()

def move_enemies():
    for enemy in enemies:
        dx, dy = random.choice([(0,1), (0,-1), (1,0), (-1,0), (0,0)])
        new_x = enemy[0] + dx
        new_y = enemy[1] + dy
        if 0 <= new_x < WIDTH and 0 <= new_y < HEIGHT:
            enemy[0] = new_x
            enemy[1] = new_y
        # Checar colisão com o jogador
        if (enemy[0], enemy[1]) == (player_x, player_y):
            if player_size > enemy[2]:
                enemies.remove(enemy)
                player_size += enemy[2]
            else:
                print("Você foi devorado por um inimigo maior! Fim de jogo.")
                exit()

# Loop principal
while True:
    draw()
    key = msvcrt.getch().decode('utf-8').lower()
    if key == 'w':
        move_player(0, -1)
    elif key == 's':
        move_player(0, 1)
    elif key == 'a':
        move_player(-1, 0)
    elif key == 'd':
        move_player(1, 0)
    elif key == 'q':
        print("Saindo do jogo...")
        break
    move_enemies()
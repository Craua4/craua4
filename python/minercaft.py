import os

# Constantes
WIDTH = 20
HEIGHT = 10
BLOCK = "#"
AIR = "."
PLAYER = "@"

# Posição inicial do jogador
player_x, player_y = 5, 5

# Inventário
inventory = {
    BLOCK: 0
}

# Mapa inicial (cheio de blocos no chão)
world = [[AIR for _ in range(WIDTH)] for _ in range(HEIGHT)]
for y in range(HEIGHT - 2, HEIGHT):
    for x in range(WIDTH):
        world[y][x] = BLOCK

def clear():
    os.system("cls" if os.name == "nt" else "clear")

def draw_world():
    for y in range(HEIGHT):
        for x in range(WIDTH):
            if x == player_x and y == player_y:
                print(PLAYER, end="")
            else:
                print(world[y][x], end="")
        print()
    print()

def draw_inventory():
    print("Inventário:")
    for item, qty in inventory.items():
        print(f"{item}: {qty}")
    print()

def move(dx, dy):
    global player_x, player_y
    new_x = player_x + dx
    new_y = player_y + dy
    if 0 <= new_x < WIDTH and 0 <= new_y < HEIGHT:
        player_x = new_x
        player_y = new_y

def break_block():
    block = world[player_y][player_x]
    if block == BLOCK:
        world[player_y][player_x] = AIR
        inventory[BLOCK] += 1

def place_block():
    if world[player_y][player_x] == AIR and inventory[BLOCK] > 0:
        world[player_y][player_x] = BLOCK
        inventory[BLOCK] -= 1

# Loop principal
while True:
    clear()
    draw_world()
    draw_inventory()
    print("W/A/S/D = mover | Q = quebrar | E = colocar | X = sair")
    command = input("Comando: ").lower()

    if command == "w":
        move(0, -1)
    elif command == "s":
        move(0, 1)
    elif command == "a":
        move(-1, 0)
    elif command == "d":
        move(1, 0)
    elif command == "q":
        break_block()
    elif command == "e":
        place_block()
    elif command == "x":
        break
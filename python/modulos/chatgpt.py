import random
import time

# Arte do jogador
player_art = r"""
   \O/
    |
   / \
Você (Herói)
"""

# Lista de monstros
monsters = [
    {
        "name": "Goblin",
        "hp": 40,
        "xp": 30,
        "art": r"""
   ,      ,
  /(.-""-.)\
  |\  \/  /|
  \_\_)(_/_/
   (__) (__)
Goblin
"""
    },
    {
        "name": "Esqueleto",
        "hp": 60,
        "xp": 50,
        "art": r"""
   .-.
  (o o)
   |=|
  __|__
 /:::::\ 
 |:::::| 
 `-----'
Esqueleto
"""
    },
    {
        "name": "Dragão",
        "hp": 100,
        "xp": 100,
        "art": r"""
      /^\/^\
    _|__|  O|
\/     /~  \_/ \
 \____|_________\
        \_______/
       /       \
      |         |
     /   o   o   \
    /|    \_/     |\
Dragão
"""
    }
]

# Status do jogador
player_level = 1
player_xp = 0
player_max_hp = 100
player_hp = player_max_hp

# Funções
def show_status(monster, monster_hp):
    print(player_art)
    print(f"Herói - Nível {player_level} | HP: {player_hp}/{player_max_hp} | XP: {player_xp}")
    print("-" * 40)
    print(monster["art"])
    print(f"{monster['name']} - HP: {monster_hp}")
    print("-" * 40)

def player_turn(monster_hp):
    print("\nSua vez!")
    print("1. Ataque Leve (dano baixo, 100% acerto)")
    print("2. Ataque Forte (dano alto, 50% acerto)")
    choice = input("Escolha sua ação (1 ou 2): ")
    if choice == "1":
        damage = random.randint(10, 20) + (player_level - 1) * 2
        print(f"Você acertou um golpe de {damage} de dano!")
        monster_hp -= damage
    elif choice == "2":
        if random.random() < 0.6:
            damage = random.randint(25, 35) + (player_level - 1) * 2
            print(f"Ataque forte acertou! {damage} de dano!")
            monster_hp -= damage
        else:
            print("Você errou o ataque forte!")
    else:
        print("Ação inválida. Você perdeu a vez.")
    return monster_hp

def monster_turn(monster_name):
    global player_hp
    print(f"\nTurno do {monster_name}!")
    time.sleep(1)
    if random.random() < 0.7:
        damage = random.randint(10, 20)
        print(f"{monster_name} te atacou e causou {damage} de dano.")
        player_hp -= damage
    else:
        print(f"{monster_name} errou o ataque!")

def level_up():
    global player_level, player_xp, player_max_hp, player_hp
    xp_to_next = player_level * 100
    if player_xp >= xp_to_next:
        player_xp -= xp_to_next
        player_level += 1
        player_max_hp += 20
        player_hp = player_max_hp
        print(f"\n🌟 Você subiu para o Nível {player_level}!")
        print(f"Seu HP máximo aumentou para {player_max_hp} e HP foi restaurado!\n")
        time.sleep(2)

# Loop principal
print("=== DUNGEON DAS SOMBRAS ===")
print("Você enfrentará uma sequência de monstros...\n")

for monster in monsters:
    monster_hp = monster["hp"]
    print(f"\n⚔️ Um {monster['name']} apareceu!\n")
    time.sleep(1)

    while player_hp > 0 and monster_hp > 0:
        show_status(monster, monster_hp)
        monster_hp = player_turn(monster_hp)
        time.sleep(1)
        if monster_hp <= 0:
            break
        monster_turn(monster["name"])
        time.sleep(1)

    if player_hp <= 0:
        break

    print(f"\n✅ Você derrotou o {monster['name']}!\n")
    xp_gained = monster["xp"]
    player_xp += xp_gained
    print(f"🏅 Ganhou {xp_gained} XP!")
    level_up()
    time.sleep(1)

# Resultado final
print("\n=== FIM DA DUNGEON ===")
if player_hp <= 0:
    print("Você foi derrotado na dungeon... 💀")
else:
    print("Parabéns! Você derrotou todos os monstros da dungeon! 🏆")
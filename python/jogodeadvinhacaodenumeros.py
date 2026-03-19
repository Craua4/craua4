import random

print("Bem vindo ao jogo de advinhação de números")

numero = 0
contador = 0
random_number = random.randint(1,10)

while contador < 3:
    try:
        numero = int(input("Escolha um número de 1 até 10: "))

        if numero == random_number:
            print("Parabéns! você acertou!")
            break
        else:
            contador += 1
            if numero < random_number:
                print("O numero que você digitou é menor do que o escolhido")
            else:
                print("O número que você digitou é maior do que o escolhido")

            if contador == 3:
                print("Errrrrrrrou")
                print(f"O número correto era: {str(random_number)}")
                break
            else:
                print("Número errado, tente de novo...")
    except ValueError:
        print("Por favor, insira um número válido")
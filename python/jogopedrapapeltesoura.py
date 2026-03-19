import random 

def pedra_papel_tesoura():
    print("Bem vindo ao jogo pedra papel e tesoura")
    print("Você jogará contra o computador. Vamos começar! \n")
    
    opcoes = ["pedra", "papel", "tesoura"]
    
    pontos_jogador = 0
    pontos_computador = 0
    rodadas = 5
    escolha_computador = ""
    

    for rodada in range(1, rodadas +1):
        print(f"Rodada {rodada} de {rodadas}")

        while True:
            print ("Escolha uma opção: pedra, papel ou tesoura")
            escolha_jogador = input("Sua escolha: ").lower()

            if escolha_jogador in opcoes:
                break
            else:
                print("escolha invalida! Tente novamente. \n")

        escolha_computador = random.choice(opcoes)
        print(f"O computador escolheu: {escolha_computador}")

        if escolha_jogador == escolha_computador:
            print("Empate! \n")
        elif (escolha_jogador == "pedra" and escolha_computador == "tesoura") or \
                      (escolha_jogador == "papel" and escolha_computador == "pedra") or \
                      (escolha_jogador == "tesoura" and escolha_computador == "papel"):
                      print("Você ganhou esta rodada! \n")
                      pontos_jogador += 1
        else:
                     print("O computador ganhou esta rodada! \n")
                     pontos_computador += 1
    
    print("Fim do jogo!")
    print(f"Placar final: Você {pontos_jogador} x {pontos_computador}")

    if pontos_jogador > pontos_computador:
         print("Parabéns! Você venceu o jogo!")
    elif pontos_jogador < pontos_computador:
         print("O computador venceu o jogo! Mais sorte na proxima vez.")
    else:
         print("O jogo terminou em empate!")

pedra_papel_tesoura()
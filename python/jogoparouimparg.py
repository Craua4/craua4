import random

def par_ou_impar():
    print("Bem-vindo ao jogo Par ou Ímpar!")
    print("Você jogará contra o computador. Vamos começar! \n")
    
    # as coisa aq
    pontos_jogador = 0
    pontos_computador = 0
    rodadas = 5
    
    # isso aq pergunta se ele quer par ou impar xD
    while True:
        escolha_par_impar = input("Você escolhe Par ou Ímpar? ").lower()
        if escolha_par_impar in ["par", "ímpar"]:
            break
        else:
            print("Escolha inválida! Tente novamente. Responda 'par' ou 'ímpar'.")
    
    for rodada in range(1, rodadas + 1):
        print(f"Rodada {rodada} de {rodadas}")

        while True:
            try:
                escolha_jogador = int(input("Escolha um número de 1 a 10: "))
                if 1 <= escolha_jogador <= 10:
                    break
                else:
                    print("Escolha inválida! Digite um número entre 1 e 10.")
            except ValueError:
                print("Por favor, digite um número válido entre 1 e 10.")
            # esse exceptValueError: ta ai pq ele ve que eh um erro e FALA que eh um erro
            # e ai sem ele só vai dar erro mesmo no programa invalid nao sei oq la
            # except ValueError: tbm ta la pra separa de QUALQUER coisa q nao for numero
        escolha_computador = random.randint(1, 10)
        print(f"O computador escolheu: {escolha_computador}")

        soma = escolha_jogador + escolha_computador
        print(f"A soma dos números é: {soma}")

        # isso aq ve se tu acertou no par ou impar especificamente pq sim
        # ! significa diferença e % eh pra dividir
        if (soma % 2 == 0 and escolha_par_impar == "par") or (soma % 2 != 0 and escolha_par_impar == "ímpar"):
            print("Você ganhou esta rodada! \n")
            pontos_jogador += 1
        else:
            print("O computador ganhou esta rodada! \n")
            pontos_computador += 1
    
    # mostra q acabou
    print("Fim do jogo!")
    print(f"Placar final: Você {pontos_jogador} x {pontos_computador}")

    # se tu tiver mais ponto ganhou, senao (else) tu perdeu lol
    if pontos_jogador > pontos_computador:
        print("Parabéns! Você venceu o jogo!")
    elif pontos_jogador < pontos_computador:
        print("O computador venceu o jogo! Mais sorte na próxima vez.")
    else:
        print("O jogo terminou em empate!")

#chama a função
par_ou_impar()
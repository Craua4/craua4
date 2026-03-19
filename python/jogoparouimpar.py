import random
import math

def par_ou_impar():
    print("Bem vindo ao jogo par ou ímpar")
    print("Você jogará contra o computador, vamos começar! \n")
    print("Escolha ímpar ou par")

    opcoes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    par = ["2", "4", "6", "8", "10"]
    impar = ["1", "3", "5", "7", "9"]

    pontos_jogador = 0
    pontos_computador = 0
    escolha_computador = ""


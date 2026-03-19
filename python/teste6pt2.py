def menor(lista):
    menorValor = lista[0]
    for x in lista:
        if(x<menorValor):
            menorValor=x
    return menorValor

def maior(lista):
    maiorValor = lista[0]
    for x in lista:
        if(x>maiorValor):
            maiorValor=x
    return maiorValor

def maiorEMenor(lista):
   print(f"Maior: {maior(lista)}")
   print(f"Menor: {menor(lista)}")

maiorEMenor([4,5,6,2,1,3])
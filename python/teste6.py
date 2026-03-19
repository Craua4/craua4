kk = 1<2<3
def kkk():
    if(kk):
        print("True!")
    else:
      print("False!")

kkk()
kk=1<2 and 2>3
kkk()

d = 100
t = 5

def v(d,t):
   return d/t

v(d,t)
print(f"A velocidade é {v(d,t)}")

def argue0():
    i = 0
    while(i < 1):
        print("x < x")
        u1 = int(input())
        u2 = int(input())
        if(u1 < u2):
           print("nice")
           i+=1
        else:
           print("try again")

def argue1():
    i = 0
    while(i < 1):
        print("x + x = y")
        u1 = int(input())
        u2 = int(input())
        u3 = int(input())
        if(u1 + u2 == u3):
           print("nice")
           i+=1
        else:
           print("try again")

argue0()

argue1()

def batata(crescimento, tempo=1):
   print(tempo/crescimento)

batata(25)

def menor(a,b):
   if a<=b:
      return a
   else:
      return b

a=5
b=1

print(f"O menor valor entre {a} e {b} é {menor(a,b)}")

def r():
    u1 = int(input("Primeiro valor aqui: "))
    u2 = int(input("Segundo valor aqui: "))
    u3 = input("Operação aqui(+,-,*,/): ")
    if(u3 == "+"):
        print(f"{u1 + u2}")
    elif(u3 == "-"):
        print(u1 - u2)
    elif(u3 == "*"):
        print(u1*u2)
    elif(u3 == "/"):
        print(u1/u2)
    
r()
proceed = input()

def prepara_acai(*ingrds, tamanho ="médio"):
   print(F"\n Preparando um Açaí {tamanho} com os seguintes ingredientes: ")
   for ingrediente in ingrds:
      print(f"- {ingrediente}")

prepara_acai("banana","granola")
prepara_acai("morango","kiwi","leite em pó",tamanho="pequeno")
prepara_acai()

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
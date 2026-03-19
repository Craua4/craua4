import random as r

def saudacoes(nome):

    frasez = [f"{nome} nome batata ola", "Ola btata", "BTATONA oi"]
    print(frasez[r.randint(0,2)])

nome = input("Nome deste chabo: ")
print(saudacoes(nome))

def recebeTexto():
    texto = "Cliente: " + input("Cliente: ")
    palavraProibida = ["lala"]
    for i in palavraProibida:
        if i in texto:
            print("MEU DEUS LALA SEU CRIMOSONO")
            return recebeTexto()
        return texto

def buscaResposta(nome, texto):
    with open("BaseDeConhecimento.txt", "+a") as conhecimento:
        conhecimento.seek(0)
        while True:
            viu = conhecimento.readline()
            if viu != "":
                if texto.replace("Cliente: ","") == "tchau":
                    print(f"{nome} ta tchau eu volto as 11 horas seu puto")
                    return "fim"
                elif viu.strip() == texto.strip():
                    proximalinha = conhecimento.readline()
                    if "Chatbot: " in proximalinha:
                        return proximalinha
            else:
                print("q q ce ta falaanod ai man")
                conhecimento.write("\n" + texto)
                resposta_user = input("digitar o que ce eu falaria dps diso: ")
                conhecimento.write("\n" + "Chatbot: "+ resposta_user)
                return "Hum..."

def exibeResposta(resposta, nome):
    print(resposta.replace("Chatbot",nome))
    if resposta == "fim":
        return "fim"
    return "continua"

def main():
    saudacoes(nome)

    while True:
        texto = recebeTexto()
        resposta = buscaResposta(nome,texto)
        resultado = exibeResposta(resposta, nome)
        if resultado == "fim":
            break

main()
class prova():
    def __init__(self):
        self.questoes = []
        self.respostas = []
        pass

    def mostraQuestoes(self):
        print(self.questoes)
    
    def mostraRespostas(self):
        print(self.respostas)

    def armazenaQuestoesRespostas(self, novaQuestao, novaResposta):
        self.questoes.append(novaQuestao)
        self.respostas.append(novaResposta)
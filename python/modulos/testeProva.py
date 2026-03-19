import unittest
from prova import prova

class provaTest(unittest.TestCase):

    def setUp(self):
        self.questao = 'o que se aprende na batete?'
        self.resposta = 'batete'
        self.p = prova()
        self.p.armazenaQuestoesRespostas(self.questao, self.resposta)
    
    def test_armazenaQuestao(self):
        self.assertIn('o que se aprende na batete?', self.p.questoes)
    
    def test_armazenaResposta(self):
        self.assertIn('batete', self.p.respostas)


if __name__ == '__main__':
    unittest.main()
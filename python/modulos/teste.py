import unittest
from teste101 import sobrenomeNaOrdem

class NomeTest(unittest.TestCase):

    def test_sobrenomecompleto(self):
        nomeCompleto = sobrenomeNaOrdem("Joao", "Madureira", "Silva")
        self.assertEqual(nomeCompleto, "Joao Silva Madureira")


if __name__ == '__main__':
    unittest.main()
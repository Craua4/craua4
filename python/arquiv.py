arquivo = open('texto.txt', 'w')
arquivo.write('ola mundo')
arquivo.close()

with open('texto.txt', 'a') as arquivo:
    arquivo.write('\n slk num compensa')

with open('texto.txt', 'r') as arquivo:
    conteudo = arquivo.read()
    print(conteudo)
    conteudo2 = arquivo.read()
    print(conteudo2)
    conteudo3 = arquivo.readlines()
    print(conteudo3)
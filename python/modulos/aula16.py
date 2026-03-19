import requests as r
from bs4 import BeautifulSoup as bs

# try:
#     url = 'https://www.oul.com.br/'

# except Exception as erro:
#     print(erro)
    
# else:
# # fazendo o negocio mt doido
#     resposta = r.get(url)

#     sopa = bs(resposta.content, 'html.parser')

#     print(sopa.prettify())


# -----------------------------------------------------------------

# try:
#     url = 'https://www.uol.com.br/start/esport/'
#     resposta = r.get(url)


# except Exception as erro:
#     print(f'erro: {erro}')
# else:

#     sopa = bs(resposta.content, 'html.parser')

#     keywords = ['free fire', 'valorant', 'lol', 'luta', 'fifa']

#     for paragrafo in sopa.find_all('body'):
#         for palavra in keywords:
#             for trecho in paragrafo.stripped_strings:
#                 if palavra.upper() in trecho.upper():
#                     print(f'noticias: {palavra.upper()}')
#                     print(trecho, '\n')
try:
    url = 'https://pt.wikipedia.org/wiki/Educa%C3%A7%C3%A3o'
    palavras = input("Digite as palavras-chave separadas por vírgula")

    keywords = []
    for palavra in palavras.split(","):
        palavra_limpa = palavra.strip()
        palavra_minuscula = palavra_limpa.lower()
        keywords.append(palavra_minuscula)

    resposta = r.get(url)

except Exception as erro:
    print(f'Erro ao acessar o site:{erro}')

else:
    sopa = bs(resposta.content, 'html.parser')

    print("\n Resultados encontrados:\n")

    for paragrafo in sopa.find_all('body'):
        for trecho in paragrafo.stripped_strings:
            trecho_lower = trecho.lower()
            for palavra in keywords:
                if palavra in trecho_lower:
                    print(f"Palavra-chave: {palavra.upper()}")
                    print(f"Trecho: {trecho}\n")
                    break
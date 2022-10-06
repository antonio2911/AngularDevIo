SELECT * FROM [TABELA DE PRODUTOS]

SELECT * FROM [TABELA DE PRODUTOS] WHERE SABOR = 'Lim�o' and EMBALAGEM = 'Garrafa'

-- MULTIPLICAR POR 10 %
UPDATE [TABELA DE PRODUTOS] SET 
[PRECO DE LISTA] = 1.1 * [PRECO DE LISTA] 
WHERE SABOR = 'Lim�o' AND EMBALAGEM = 'Garrafa'

-- SELE��O COM APELIDO E CONDI��O AND
SELECT [CODIGO DO PRODUTO] AS SKU, 
[NOME DO PRODUTO] AS NOME,
EMBALAGEM AS RECIPIENTE,
TAMANHO AS QUANTIDADE,
SABOR AS AROMA,
[PRECO DE LISTA] AS PRECO FROM [TABELA DE PRODUTOS] WHERE SABOR = 'Lim�o' and EMBALAGEM = 'Garrafa'

SELECT * FROM [TABELA DE PRODUTOS] WHERE [PRECO DE LISTA] > 10

SELECT * FROM [TABELA DE PRODUTOS] WHERE [PRECO DE LISTA] <= 10

-- Ele tranforma o lim�o em um valor da tabela ascii e retorna o que for maior que esse valor 
-- todos valores numericos que na ordem do valor da tabela ascci e menor que a palavra lim�o
-- exemplo suposi��o A = 10 N = 35 A = 10 ordem da string 103510 quem for maior exibe o valor
SELECT * FROM [TABELA DE PRODUTOS] WHERE SABOR > 'Lim�o'

-- <> diferente
SELECT * FROM [TABELA DE PRODUTOS] WHERE SABOR <> 'Manga'

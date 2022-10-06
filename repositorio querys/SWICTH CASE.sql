--CASE TIPO UM SWITCH NO Sql

SELECT * FROM [TABELA DE PRODUTOS]

SELECT [NOME DO PRODUTO],
CASE WHEN [PRECO DE LISTA] >=12 THEN 'PRODUTO CARO'
WHEN [PRECO DE LISTA] >= 7 AND [PRECO DE LISTA] < 12 THEN 'PRODUTO EM CONTA' 
ELSE 'PRODUTO BARATO' END, AVG([PRECO DE LISTA]) AS MEDIA
FROM [TABELA DE PRODUTOS] GROUP BY [NOME DO PRODUTO], CASE WHEN [PRECO DE LISTA] >=12 THEN 'PRODUTO CARO'
WHEN [PRECO DE LISTA] >= 7 AND [PRECO DE LISTA] < 12 THEN 'PRODUTO EM CONTA' 
ELSE 'PRODUTO BARATO' END

select [NOME],
case 
    when year([DATA DE NASCIMENTO]) < 1990 then 'Adulto'
    when year([DATA DE NASCIMENTO]) between 1990 and 1995 then 'Jovem'
    else 'Crian�a' end as [Classifica��o Et�ria]
 from [TABELA DE CLIENTES]
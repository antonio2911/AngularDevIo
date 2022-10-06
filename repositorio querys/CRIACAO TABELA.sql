--Cria��o de tabela
-- [] -> SE O NOME TEM ESPA�O UTILIZA-SE CASO CONTRARIO = TABELA_DE_CLIENTE
CREATE TABLE [TABELA DE CLIENTE]
(
	[CPF] [CHAR] (11),
	[NOME] [VARCHAR] (50),
	[ENDERECO1] [VARCHAR] (150),
	[ENDERECO2] [VARCHAR] (150),
	[BAIRRO] [VARCHAR] (50),
	[CIDADE] [VARCHAR] (50),
	[ESTADO] [CHAR] (2),
	[CEP] [CHAR] (8),
	[DATA DE NASCIMENTO] [DATE],
	[IDADE] [SMALLINT],
	[SEXO] [CHAR] (1),
	[LIMITE DE CREDITO] [MONEY],
	[VOLUME DE COMPRA] [FLOAT],
	[PRIMEIRA COMPRA] [BIT]
)

/*
Nome da tabela deve ser TABELA DE VENDEDORES.
Vendedor tem como chave o n�mero interno da matr�cula (Nome do campo MATRICULA) que deve ser um texto de 5 posi��es.

O nome do vendedor (Nome do campo NOME) deve ser um texto de 100 posi��es.

% de comiss�o. Este campo (Nome do campo PERCENTUAL COMISS�O) representa quantos % de comiss�o o vendedor ganha sobre cada venda.
*/

CREATE TABLE [TABELA DE VENDEDORES]
(
[MATRICULA] [CHAR] (5),
[NOME] [VARCHAR] (100),
[PERCENTUAL COMISSAO] [FLOAT]
);
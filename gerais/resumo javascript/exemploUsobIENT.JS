const pessoa = {
    saudacao: "Ola tudo bem amigo",
    nome: "Antonio Junio Pardim",
    idade: 27,
    peso: 76,
    altura: 1.76,
    sexo: 'M',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar() // funcionou
const teste = pessoa.falar // não funcionou
//teste
//teste()
const teste2 = pessoa.falar() // funcionou
//teste2
const teste3 = pessoa.falar.bind(pessoa)
teste3




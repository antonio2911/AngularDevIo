
let Pessoa = () => {
    this.idade = 0
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this),1000)
    
    function somar() {
        console.log(this.idade, "teste dentro da funcao")
    }
    somar()
}
//Pessoa()
// dica de ouro para resolver o problema do this

const UsoDoThis = () =>{
    this.numeros = 0;
    const self = this
    setInterval(function(){
       self.numeros++
console.log(self.numeros)

    },1000)
}
UsoDoThis()
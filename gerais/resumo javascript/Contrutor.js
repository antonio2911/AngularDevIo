function Carro(velocidadeMaxima = 200, delta = 5){

   let velocidadeAtual = 0

    //method public
    this.acelerar = () =>{
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    //method public

    this.getVelocidadeAtual = () =>{
        return velocidadeAtual
    }
}

const uno = new Carro()
uno.acelerar()
console.log(uno.getVelocidadeAtual())
const lamborghini = new Carro(300,20)
lamborghini.acelerar()
lamborghini.acelerar()
lamborghini.acelerar()
console.log(lamborghini.getVelocidadeAtual())

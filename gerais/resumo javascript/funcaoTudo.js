const fun = function(){};
function fun2(){};
const array = [function (a,b){return a + b},fun,fun2]
console.log(array[0](2,5))
console.log(array[1])
let soma = (a,b) => {
    return a * b
}
let multiplicacao = (a,b) => a * b; // não escreve nada tem o return embutido
let elevadoADois = x => Math.pow(x,2)
console.log(soma(5,5))
console.log(multiplicacao(2,10.5))
console.log(elevadoADois(5))
let IMC = (Altura,Peso,Sexo) =>{
    if(Sexo == "M"){
        resultado = Altura * (Peso * Peso)
    }else if(Sexo == "F"){
        resultado = Altura * Peso
    }else{
     resultado = 0
    }
    return console.log(resultado)
}
IMC(1.76,76,"M")


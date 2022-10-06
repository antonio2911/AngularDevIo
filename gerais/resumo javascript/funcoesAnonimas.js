const somar = (x,y) =>{
    return x + y
}

// chamando função dentro de função
const areaDoCirculo = (diametro,a,b, operacao = somar)=>{
raio = diametro/2
area = Math.PI * (raio * raio)
console.log(operacao(a,b))
console.log(`A area do circulo e= ${area} e seu raio e = ${raio}`)
}
areaDoCirculo(35,60,60)
areaDoCirculo(25,3,4,somar) // ou
areaDoCirculo(45,5,4,function(x,y){ return x - y})
//outra forma de passar uma funçao anomina ou substituir uma funçao
const soma = (a,b)=>{
    return a + b
}
const operacoes = (a,b, TemQuePasarUmaVariavel = soma)=>{
    console.log("Operações")
    console.log(TemQuePasarUmaVariavel(a,b))
}
operacoes(5,5)
operacoes(5,5,(x,y)=>{ return x * y})

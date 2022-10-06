const notas = [10,7.5,6.2,9.3,5.0,6,9,6.9]
console.log(notas.length)
let notasBaixas = []
//for(i = 0;i< notas.length;i++){} ou
for(let i in notas){
if(notas[i] < 7){
    notasBaixas.push(notas[i])
}
}
console.log(notasBaixas)
let notasAltas = []
notasAltas = notas.filter((a)=>{
return a > 7
})
console.log(notasAltas)

const fabricantes = ["Mercedes","Fiat","Jeep","Lamborghini","volkswagen","chevrolet","ford"]
console.log(fabricantes.length)
let imprimir=(no,ind) =>{
console.log(`${ind}. Fabricante: ${no}.`)
}
fabricantes.forEach(imprimir)
fabricantes.forEach(a => console.log(a))


interface Animal {
    nome: string
    tipo: 'Terreste' | 'Aquatico' | 'Anfibio'
    NumerosDePatas(numero: number):void
}

const elefante: Animal = {
nome: "Elefante",
tipo: "Terreste",
NumerosDePatas: (numero) =>{
` O numero de patas e ${numero}`
}


}

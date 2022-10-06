class Default {
    texto: string
    numero: number;
    qualquer: any;
    boleano: boolean;
    array: Array<any>;
    arraynumber: Array<number>
    arraytipo3: any[];

    constructor(){
this.array = [{
    teste: "teste"
}]
    }
    metodo(){
        this.texto = `Esse e um alert simples ${this.numero}`

        return alert(this.texto)
    }
arrayTumber: [string,number][] = [["Brasil", 10],
["Alemanha", 7],["http:localhost.com.br", 8080]];

funcao (){
    this.arrayTumber.forEach(element =>{
        console.log(element[0])
    })
    
}



}
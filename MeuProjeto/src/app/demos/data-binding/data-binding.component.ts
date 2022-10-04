import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: [
  ]
})
export class DataBindingComponent{
public contador:number = 0
public texto:string = ""
public nome:any

public clickEvento(){
this.contador++
}
public zeraContador(){
  this.contador = 0
}

public disabledZeraContador(){
  if(this.contador < 10)
    return true
  return false
}

public evento(evento:any){
this.texto = evento.target.value
}
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculos',
  templateUrl: './calculos.component.html',
  styles: [
  ]
})
export class CalculosComponent {
public valor:any;
public por:any
public outroValor:any
public resultado:any
public calcularRegraDeTres(){
var calc = (this.outroValor * this.por) / this.valor
this.resultado = calc
}
}

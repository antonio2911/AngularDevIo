import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculos',
  templateUrl: './calculos.component.html',
  styles: [
  ]
})
export class CalculosComponent {
  constructor(){}
  public valor:number; // ou ignora com uma variavel no tsconfig.json ou inserir um ! apos o nome da variavel
  public por!:number;
  public outroValor:number;
  public resultado:string = "";
  public calcularRegraDeTres(){
    var calc = (this.outroValor * this.por) / this.valor
    this.resultado = calc.toFixed(2)
  }
}

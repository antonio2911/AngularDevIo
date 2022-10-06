import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { Produto } from "./produto";
import { Observable } from "rxjs";

//o que define um servico e o decorator Injectable
@Injectable()

export class ProdutoServices{
    constructor(private http:HttpClient){}
    public url:string = "http://localhost:3000/produtos"
    
    public obterProdutos():Observable<Produto[]> {
        return this.http.get<Produto[]>(this.url)
    } 
}
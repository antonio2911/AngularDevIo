import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoServices } from '../produtos.service';

@Component({
  selector: 'app-list-produtos',
  templateUrl: './list-produtos.component.html'
})
export class ListProdutosComponent implements OnInit {

  constructor(private produtoServico:ProdutoServices) { }

  public produtos: Produto[]

  ngOnInit(): void {
    this.produtoServico.obterProdutos().subscribe(
      {
        next: (produto) => this.produtos = produto,
        error: (e) => console.error(e),
        complete: () => console.info('complete')     
      }
    )
  }

}

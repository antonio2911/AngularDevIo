import { Routes } from "@angular/router";
import { CalculosComponent } from "./demos/calculos/calculos.component";
import { DataBindingComponent } from "./demos/data-binding/data-binding.component";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { HomeComponent } from "./navegacao/home/home.component";
import { ListProdutosComponent } from "./produtos/list-produtos/list-produtos.component";

export const rootRoutesConfig: Routes = [
    //pesquisar sobre o pathMatch
    //redirectTo: sempre o mandar a url vazia de parametros por padrão vai direcionar
    // para a rota HomeComponent
    {path: ' ', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'contato', component: ContatoComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'features', component: DataBindingComponent},
    {path: 'calculos', component: CalculosComponent},
    {path: 'produtos', component: ListProdutosComponent}

]
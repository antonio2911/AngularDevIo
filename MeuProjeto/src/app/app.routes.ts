import { Routes } from "@angular/router";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { HomeComponent } from "./navegacao/home/home.component";

export const rootRoutesConfig: Routes = [
    //pesquisar sobre o pathMatch
    //redirectTo: sempre o mandar a url vazia de parametros por padrão vai direcionar
    // para a rota HomeComponent
    {path: ' ', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'contato', component: ContatoComponent},
    {path: 'sobre', component: SobreComponent}
]
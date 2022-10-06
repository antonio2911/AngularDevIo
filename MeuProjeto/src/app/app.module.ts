import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { rootRoutesConfig } from './app.routes';
import { RouterModule } from '@angular/router';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { CalculosComponent } from './demos/calculos/calculos.component';
import { ProdutoServices } from './produtos/produtos.service';
import { ListProdutosComponent } from './produtos/list-produtos/list-produtos.component';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    CalculosComponent,
    ListProdutosComponent
  ],
  imports: [
    BrowserModule,
    //forRoot => informar que e o arquivo de rotas principal da aplicação
    [RouterModule.forRoot(rootRoutesConfig, {useHash: false})],
    FormsModule,
    HttpClientModule
  ],
  providers: [ // declara serviços
    //o que e carregado como padrão de inicialização nos parametros da url "para teste muda o conteudo"
    {provide: APP_BASE_HREF, useValue: '/'},
    ProdutoServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

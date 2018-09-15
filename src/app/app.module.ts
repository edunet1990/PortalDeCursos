import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';


import {appRoutes } from './rotas/app.routes'; //deve vir primeiro
import { AppComponent }  from './app.component';
import {MenuComponent} from './menu/menu.component'

//usando as rotas
import {LogoComponent} from './logo/logo.component';
import {CadastroComponent} from './cadastro/cadastro.component';
import {ListaComponent} from './lista/lista.component';
import {NotFoundComponent} from './erro/not-found.component';

@NgModule({
  imports:      [ BrowserModule,RouterModule.forRoot(appRoutes) ], // modulos usados na aplcação
  declarations: [ AppComponent,MenuComponent,LogoComponent,CadastroComponent,ListaComponent,NotFoundComponent ], // os componentes usados na apliacção
   bootstrap:    [ AppComponent ] // indica qual o component inicial da aplicação e posso ter diversos componentes e o ponto de partida é o app component
})
export class AppModule { }

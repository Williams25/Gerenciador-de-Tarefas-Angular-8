import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// IMPORTANDO MODULO DE ROTAS
import { AppRoutingModule } from './app-routing.module';

import { TarefasModule } from './tarefas/index'
@NgModule({
  declarations: [
    AppComponent,
  ],
  // IMPORTANDO MODULOS
  imports: [
    BrowserModule,
    AppRoutingModule,
    TarefasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

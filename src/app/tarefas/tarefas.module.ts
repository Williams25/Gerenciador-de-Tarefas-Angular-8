import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { TarefaService } from './shared';
import { ListarTarefaComponent } from './listar-tarefa/listar-tarefa.component'

@NgModule({
  declarations: [ListarTarefaComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers:[
    TarefaService
  ]
})
export class TarefasModule { }

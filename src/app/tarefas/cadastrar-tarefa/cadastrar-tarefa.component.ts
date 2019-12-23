import { Component, OnInit, ViewChild } from '@angular/core';
import { TarefaService, Tarefa } from '../shared';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

@ViewChild('formTarefa', {static: true}) formTarefa: NgForm // RECUPERANDO VALORES DO FORM
tarefa: Tarefa

  constructor(
      private tarefaService: TarefaService,
      private router: Router) { }

  ngOnInit() {
    this.tarefa = new Tarefa()
  }

  cadastrar(): void {
    if (this.formTarefa.form.valid) { // RETORNA TRUE OU FALSE CASO FOR FALSE ELE NEM ENTRA NO IF
      this.tarefaService.cadastar(this.tarefa) // CADASTRANDO TAREFA
      this.router.navigate(['/tarefas']) // NAVEGANDO ENTRE TELAS
    }
  }

}

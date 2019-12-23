import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tarefa, TarefaService } from '../shared';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm // PEGANDO REFERENCIA DO FORM
  tarefa: Tarefa // CRIAR INSTANCIA TAREFA

  constructor(
    // IMPORTANDO MODULOS
    private tarefaService: TarefaService,
    private route: ActivatedRoute, // CARREGA TAREFA
    private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'] // RECUPERANDO O ID
    this.tarefa = this.tarefaService.buscarId(id) // CARREGA TAREFA PELO PARAMETRO ID
  }

  atualizar(): void {
    if (this.formTarefa.form.valid) { // RETORNA TRUE OU FALSE CASO FOR FALSE ELE NEM ENTRA NO IF
      this.tarefaService.atualizar(this.tarefa) // ATUALIZA TAREFA NA LISTA
      this.router.navigate(['/tarefas']) // RETORNA PARA TELA DE TAREFAS
    }
  }
}

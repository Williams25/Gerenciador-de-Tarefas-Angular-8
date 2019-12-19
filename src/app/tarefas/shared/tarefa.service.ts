import { Injectable } from '@angular/core';
import { Tarefa } from './';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }
  /***
   * METODO LISTAR TODOS RETORNA UM ARRAY DE TAREFAS
   */
  listarTodos(): Tarefa[] {
    const tarefas = localStorage['tarefas']
    return tarefas ? JSON.parse(tarefas) : [] // OPERAÇÃO TERNARIA 
  }

  /***
   * METODO CADASTRAR TAREFA
   */
  cadastar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos() // OBTER TODAS TAREFAS
    tarefa.id = new Date().getTime() // CRIA UM NOVO ID
    tarefas.push(tarefa) // ADICIONAR TAREFA NA LISTA
    localStorage['tarefas'] = JSON.stringify(tarefas) // CONVERTE JSON PARA STRING E GUARDA OS DADOS NO LOCALSTOREGE
  }

  /***
   * METODO BUSCA POR ID
   */
  buscarId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos() // OBTER TODAS AS TAREFAS CADASTRADAS
    return tarefas.find(tarefa => tarefa.id === id) // VERIFICA SE O ID DIGITADO É IGUAL AO DA LISTA
  }

  /***
   * METODO ATUALIZAR
   */
  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos() // RECUPERA A LISTA DE TAREFAS
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id) { // VERIFICA SE O ID É O MESMO
        objs[index] = tarefa // SE O ID FOR O MESMO O OBJ É ATUALIZADO COM UM NOVO VALOR
      }
    })
    localStorage['tarefas'] = JSON.stringify(tarefas) // CONVERTE JSON PARA STRING E GUARDA OS DADOS NO LOCALSTOREGE  
  }

  /***
   * METODO REMOVER
   */
  remover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos() // RECUPERA A LISTA DE TAREFAS
    tarefas = tarefas.filter(tarefa => tarefa.id !== id) // LISTA TODAS TAREFAS QUE O ID FOR DIFERENTE QUE O DESEJADO PARA REMOVER
    localStorage['tarefas'] = JSON.stringify(tarefas) // CONVERTE JSON PARA STRING E GUARDA OS DADOS NO LOCALSTOREGE
  }

  /***
   * ALTERAR STATUS
   */
  alterarStatus(id: number): void {
    const tarefas: Tarefa[] = this.listarTodos() // RECUPERA A LISTA DE TAREFAS
    tarefas.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida // ATUALIZA O CONCLUIDO PARA TRUE OU FALSE
      }
    })
    localStorage['tarefas'] = JSON.stringify(tarefas) // CONVERTE JSON PARA STRING E GUARDA OS DADOS NO LOCALSTOREGE
  }
}

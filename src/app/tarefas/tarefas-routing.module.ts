import { Routes } from '@angular/router'

import { ListarTarefaComponent } from "./listar-tarefa";
import { CadastrarTarefaComponent } from './cadastrar-tarefa'
import { EditarTarefaComponent } from './editar-tarefa'

export const TarefaRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
    },
    {
        path: 'tarefas/cadastrar',
        component: CadastrarTarefaComponent
    },
    {
        path: 'tarefas/editar/:id', //PASSANDO PARAMETRO ID 
        component: EditarTarefaComponent
    }
]
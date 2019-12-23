import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {

  @Input() tarefaConcluida: boolean // FORNECE A INFORMAÇÃO SE O CHECKBOX ESTA PREENCHIDO OU NÃO

  constructor(private el: ElementRef = null) { }

  ngOnInit() {
    if (this.tarefaConcluida) return this.el.nativeElement.style.fontStyle = 'italic'
  }
}

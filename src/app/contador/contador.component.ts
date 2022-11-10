import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  template: `
  <h1>{{title}}</h1>
  <button (click)="operacion(1)">+1</button>
  <span>{{numero}}</span>
  <button (click)="operacion(-1)"> -1</button>
  `,
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent {
  title: string = 'Contador de numeros';
  numero: number = 0;

  operacion(valor: number) {
    this.numero += valor;
  }
}

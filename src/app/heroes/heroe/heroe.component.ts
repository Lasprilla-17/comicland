import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent {

  nombre: string = 'Hulk';
  edad: number = 23;

  obtenerNombre(): string {
    return `${this.nombre} ${this.edad}`
  }
  get nombreCapitalizado(): string {
    return this.nombre.toLocaleUpperCase();
  }

  cambiarNombre(): void {
    this.nombre = 'Pantera Negra'
  }

  cambiarEdad(edad: number): void {
    this.edad = edad
  }
}

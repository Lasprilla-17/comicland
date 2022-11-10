import { Component, OnInit } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  personajes: Personaje[] = [
    {
      nombre: 'Trucks',
      poder: 18000
    },
    {
      nombre: 'Goku',
      poder: 28000
    }
  ];
  data: Personaje = {
    nombre: '',
    poder: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

  agregar() {
    if (this.data.nombre.trim().length === 0) { return; }
    this.personajes.push(this.data);
    this.data = {
      nombre: '',
      poder: 0
    }
  }
  borrarPersonaje(id: number) {
    this.personajes.splice(id, 1);
  }

}

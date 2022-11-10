import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Ironman', 'Thor', 'Spiderman'];
  heroeBorrado: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
  }
}

import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre    : string;
  favoritos : Favorito[];
}

interface Favorito {
  id    : number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  persona: Persona = {
    nombre: 'Marcos',
    favoritos: [
      { id: 1, nombre: 'Metal Gear'},
      { id: 2, nombre: 'Death Stranding'}
    ]
  }

  nuevoJuego: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  guardar(): void {
    console.log('xx')
  }

  eliminar(i: number) : void {
    this.persona.favoritos.splice(i, 1);
  }

  agregar() : void {
    const nuevoFav: Favorito = { id: this.persona.favoritos.length+1, nombre: this.nuevoJuego };
    this.persona.favoritos.push({...nuevoFav});
    this.nuevoJuego = '';
  }

}

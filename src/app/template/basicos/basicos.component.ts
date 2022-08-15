import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miForm!: NgForm  //Hacer referencia a un objeto local del .html

  constructor() { }

  ngOnInit(): void {
  }

  productoInvalido(): boolean {
    return this.miForm?.controls.producto?.invalid && this.miForm?.controls.producto?.touched;
  }

  precioInvalido(): boolean {
    return this.miForm?.controls.precio?.value < 0 && this.miForm?.controls.precio?.touched;
  }

  guardar() {
    console.log(this.miForm);
    //Limpiar formulario
    this.miForm.resetForm();
  }

}

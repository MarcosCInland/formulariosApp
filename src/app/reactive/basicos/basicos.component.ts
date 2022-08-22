import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  /*miForm: FormGroup = new FormGroup({
    'nombre'      : new FormControl('RTX 4080ti'),
    'precio'      : new FormControl(1500),
    'existencias' : new FormControl(5),
  })*/

  miForm: FormGroup = this.fb.group({
    nombre: ['RTX 4080ti', [Validators.required, Validators.minLength(3)] ],  //value, validators Sincronos, validators Asincronos
    precio: [1500, [Validators.required, Validators.min(0)] ],
    existencias: [5, [Validators.required, Validators.min(0)]],
  })
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    //form.reset para establecer valores, en caso de que alguno no sea proveido
  }

  campoValido(campo: string) {
    return this.miForm.controls[campo].errors && this.miForm.controls[campo].touched;
  }

  guardar() {
    if (this.miForm.invalid) {
      this.miForm.markAllAsTouched();
      return;
    }
    this.miForm.reset();
  }

}

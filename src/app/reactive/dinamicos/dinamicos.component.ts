import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['test 1'],
      ['test 2']
    ], Validators.required)
  })

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  get FormArr() {
    return this.miForm.get('favoritos') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  campoValido(campo: string) {
    return this.miForm.controls[campo].errors && this.miForm.controls[campo].touched;
  }

  agregar(): void {
    if (this.nuevoFavorito.invalid) {
      return;
    }
    this.FormArr.push(new FormControl( this.nuevoFavorito.value, Validators.required ) );
    this.nuevoFavorito.reset();
  }

  guardar(): void {
    if (this.miForm.invalid) {
      this.miForm.markAllAsTouched();
      return;
    }
    console.log(this.miForm.value);
    //this.miForm.reset();
  }

  borrar(index: number): void {
    this.FormArr.removeAt(index);

  }

}

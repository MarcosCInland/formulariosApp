import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  campoValido(campo: string) {
    return this.miForm.controls[campo].errors && this.miForm.controls[campo].touched;
  }

  guardar(): void {
    if (this.miForm.invalid) {
      this.miForm.markAllAsTouched();
      return;
    }
    console.log(this.miForm.value);
    //this.miForm.reset();
  }

}

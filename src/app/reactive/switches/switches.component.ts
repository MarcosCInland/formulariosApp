import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miForm: FormGroup = this.fb.group({
    genero: ['', Validators.required],
    notificaciones: [, Validators.required],
    condiciones: [, Validators.requiredTrue]
  })

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miForm.reset({
      ...this.persona,
      condiciones: false
    }); //en vez de asignar, y en caso no tengan todas las propiedades

    this.miForm.valueChanges.subscribe(
      ({condiciones, ...rest}) => {
        //delete form.condiciones;
        this.persona = rest;
      }
    )

  }

  guardar(): void {
    const formValue = {...this.miForm.value};
    delete formValue.condiciones;
    this.persona = formValue;
  }

}

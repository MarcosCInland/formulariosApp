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
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue]
  })

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miForm.reset(this.persona); //en vez de asignar, y en caso no tengan todas las propiedades
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';
import { ValidatorService } from 'src/app/shared/validators/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidatorService]],
    username: ['', [Validators.required, this.validatorService.test]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  }, {
    Validators: [this.validatorService.camposIguales('password', 'password2')]
  })

  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('email')?.errors;
    if (errors?.required) {
      return 'Email Obligatorio';
    } else if (errors?.pattern) {
      return 'Formato de correo no valido';
    } else if (errors?.emailTomado) {
      return 'El correo ya existe';
    }
    return '';
  }

  constructor(private fb: FormBuilder, private validatorService: ValidatorService, private emailValidatorService: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Marcos Calderon',
      email: 'test1@test.com',
      username: 'marcos_c10',
      password: '123456',
      password2: '123456'
    })
  }

  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }



  submit() {
    this.miFormulario.markAllAsTouched();
  }

}

import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-fromulario3-page',
  imports: [ReactiveFormsModule],
  templateUrl: './fromulario3-page.html',
  styleUrl: './fromulario3-page.scss',
})
export class Fromulario3Page 
{
  formularioContacto:FormGroup;
  private fb=inject(FormBuilder)
  resultado=signal<string>('')
  constructor()
  {
    this.formularioContacto=this.fb.group(
      {
        nombre:['',[Validators.required,Validators.minLength(4)]],
        email:['',[Validators.required,Validators.email]],
        mensaje:['',[Validators.required,Validators.maxLength(20)]]
      })
  }
  
  submit()
  {
    this.resultado.set
    (
      this.formularioContacto.valid ? 'todos los datos validos':'Datos invalidos en el papu formulario'
    )
  }
}

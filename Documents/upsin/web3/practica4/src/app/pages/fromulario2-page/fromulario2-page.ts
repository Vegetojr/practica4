import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-fromulario2-page',
  imports: [ReactiveFormsModule],
  templateUrl: './fromulario2-page.html',
  styleUrl: './fromulario2-page.scss',
})
export class Fromulario2Page 
{
  datos=signal<string>('')
  formularioCOntacto=new FormGroup(
    {
      nombre:new FormControl('',[Validators.required,Validators.minLength(4)]),
      Email:new FormControl('',[Validators.email,Validators.required]),
      mensaje:new FormControl('',[Validators.required,Validators.maxLength(10)]),
      sexo:new FormControl(''),
      pasatiempos: new FormGroup(
        {
          correr:new FormControl(false),
          leer:new FormControl(false),
          bairlar:new FormControl(false),
        }),
      pais:new FormControl(''),
    })
    submit()
    {
      if(this.formularioCOntacto.invalid)
        {
          this.datos.set('Existen datos invalidos en el formulario')
          this.formularioCOntacto.markAsDirty();
          return
        }
      console.log(this.formularioCOntacto.value.pasatiempos)
      let pasatiemposSeleccionados :string=''
      const p=this.formularioCOntacto.value.pasatiempos

      if(p?.leer) pasatiemposSeleccionados +='Leer,'
      if(p?.correr) pasatiemposSeleccionados +='Correr,'
      if(p?.bairlar) pasatiemposSeleccionados +='Bailar,'

      pasatiemposSeleccionados=pasatiemposSeleccionados.replace(/,$/,'')
      this.datos.set(
      `
        Nombre=${this.formularioCOntacto.value.nombre}
        Email=${this.formularioCOntacto.value.Email}
        Mensaje=${this.formularioCOntacto.value.mensaje}
        Sexo=${this.formularioCOntacto.value.sexo}
        PasaTiempos: ${pasatiemposSeleccionados||'Ninguno'}
        Pais=${this.formularioCOntacto.value.pais}
      `
      )
    }
}

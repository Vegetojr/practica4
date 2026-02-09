import { Component, EventEmitter, inject, Output, output,input ,effect} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface alumno
{
  matricula:number,
  nombre:string,
  corte1:number,
  corte2:number,
  corte3:number,
  cor1:boolean,
  cor2:boolean,
  cor3:boolean
}


@Component({
  selector: 'app-cal',
  imports: [ReactiveFormsModule],
  templateUrl: './cal.html',
  styleUrl: './cal.scss',
})
export class Cal 
{
  formularioAlumno:FormGroup
  alumnoAEditar = input<alumno | null>(null);

  private fb=inject(FormBuilder)
  @Output() nuevoAlumno= new EventEmitter<alumno>()

  constructor()
  {
    this.formularioAlumno=this.fb.group
    (
      {
        matricula:['',Validators.required],
        nombre:['',Validators.required],
        corte1: [0, [Validators.min(0), Validators.max(10)]],
        corte2: [0, [Validators.min(0), Validators.max(10)]],
        corte3: [0, [Validators.min(0), Validators.max(10)]],
      }
    )
    effect(() => {
      const alumno = this.alumnoAEditar();
      if (alumno) {
        // patchValue pone los valores en los campos que coincidan con el nombre
        this.formularioAlumno.patchValue(alumno);
      } else {
        this.resetForm();
      }
    });
  }

  resetForm()
  {
    this.formularioAlumno.reset()
  }
  submitForm()
  {
    if(this.formularioAlumno.invalid)
      {
        return
      }

    const datos=this.formularioAlumno.value
    const newAlumn:alumno=
    {
      nombre:datos.nombre,
      matricula:datos.matricula,
      corte1:datos.corte1,
      corte2:datos.corte2,
      corte3:datos.corte3,
      cor1:datos.corte1==true,
      cor2:datos.corte2==true,
      cor3:datos.corte3==true
    }
    this.nuevoAlumno.emit({...newAlumn})
  }
}

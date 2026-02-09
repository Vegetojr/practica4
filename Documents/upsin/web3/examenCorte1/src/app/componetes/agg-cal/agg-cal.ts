import { Component, input, output } from '@angular/core';
interface alumno
{
  matricula:number,
  nombre:string,
  corte1:number,
  corte2:number,
  corte3:number,
  cor1:boolean
  cor2:boolean
  cor3:boolean
}
@Component({
  selector: 'app-agg-cal',
  imports: [],
  templateUrl: './agg-cal.html',
  styleUrl: './agg-cal.scss',
})
export class AggCal 
{
  alumnos=input<alumno[]>([])
  alumnosCambiados=output<alumno[]>()

  funcion()
  {
    const nuevosAlumnos= this.alumnos().map(alumno=>({
      ...alumno,
      cor1: alumno.corte1>7,
      cor2: alumno.corte2>7,
      cor3: alumno.corte3>7
    }))
  }
}

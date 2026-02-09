import { Component, signal } from '@angular/core';
import { Cal } from "../../componetes/cal/cal";
import { AggCal } from "../../componetes/agg-cal/agg-cal";

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
  selector: 'app-calificaciones',
  imports: [Cal, AggCal],
  templateUrl: './calificaciones.html',
  styleUrl: './calificaciones.scss',
})
export class Calificaciones 
{

  listaAlumnos=signal<alumno[]>([])
  indiceSelect= signal<number | null>(null)

  formSubmit(nuevoAlumno:alumno)
  {
    const indice = this.indiceSelect();

    if (indice !== null) {

      this.listaAlumnos.update(lista => {
        const nuevaLista = [...lista];
        nuevaLista[indice] = nuevoAlumno; // Reemplaza en la posición exacta
        return nuevaLista;
      });
      // Limpiamos la selección
      this.indiceSelect.set(null);
    } else {
      // MODO CREACIÓN: Agregamos uno nuevo
      this.listaAlumnos.update(lista => [...lista, nuevoAlumno]);
    }

  }

  formActualizar(actualizar:alumno[])
  {
    this.listaAlumnos.set(actualizar)
  }

  formBorrar(indexBorrar:number)
  {
    this.listaAlumnos.update(lista => lista.filter((_, index) => index !== indexBorrar));
  }

  formSeleccionar(indexSeleccionado:number)
  {

  }
}

import { Component, signal, ViewChild, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dado } from "./dado/dado";
import { Cronometro } from "./cronometro/cronometro";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Dado, Cronometro],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App 
{
  protected readonly title = signal('practica3');
  
  mensaje= signal<string>('')
  @ViewChild('cronometro') cronometro!:Cronometro

  actualizarTen(tiempo:number)
  {
    this.mensaje.set(tiempo + (' multiplo de 10  :D.'))
  }

  restart()
  {
    this.cronometro.reiniciar();
  }
}

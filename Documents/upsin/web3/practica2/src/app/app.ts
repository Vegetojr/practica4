import { Component, computed, signal } from '@angular/core';
import {CurrencyPipe,UpperCasePipe} from '@angular/common'
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CurrencyPipe,UpperCasePipe ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App 
{
  protected readonly title = signal('practica2');
  nombre:string ='lol'
  
  //Variables
  nivelDePro=signal(67);
  email=signal<string>('papu@chadmail.com.agartha')
  sueldos=signal<number[]>([1700,1600,1900,2000])
  edad=signal<number>(15)
  articulos=signal([{codigo:1,descripcion:'Papu',Precio:777},{codigo:2,descripcion:'Chad',Precio:69420},{codigo:3,descripcion:'Soyjack',Precio:67}]);
  Num=1
  contador = signal<number>(1);
  nombreBoton=signal<string>('')

  sumSalComputed = computed(() =>
  {
    console.log('hola');
    return this.sueldos().reduce((total,sueldo)=>total+sueldo,0)
  });

  sumSalary()
  {
    let suma=0
    for (let index = 0; index < this.sueldos().length; index++) 
    {
      suma=suma+this.sueldos()[index]
    }
  console.log(suma)
  return suma
  }

  test()
  {
    console.log('papu?')
  }

  genNum():number
  {
    return Math.floor(Math.random()*3)+1;
  }

  Incrementar()
  {
    //this.contador.set(3);
    this.contador.update(n => n + 1)
  }
  
  Decrementar()
  {
    this.contador.update(n => n - 1)
  }

  fijarNombre1()
  {
    this.nombreBoton.set('Ete setch')
  }
  
    fijarNombre2()
  {
    this.nombreBoton.set('El muchacho de los momos tristes')
  }


}
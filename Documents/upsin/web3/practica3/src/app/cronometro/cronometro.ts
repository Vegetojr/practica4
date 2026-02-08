import { Component, input, OnInit, output, signal } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  imports: [],
  templateUrl: './cronometro.html',
  styleUrl: './cronometro.scss',
})
export class Cronometro implements OnInit
{
  segundo=signal<number>(0);
  inicio=input<number>(0);
  multTen=output<number>();
  notMultTen=output<number>();
  //Inputs se basan en variables y los outputs se basan en metodos o eventos
  ngOnInit(): void 
  {
    this.segundo.set(this.inicio())
    setInterval(() => {
      this.segundo.update(time =>time+1)
      const valor=this.segundo()
      if(valor%10==0)
        {
          this.multTen.emit(valor)
        }
    }, 1000);
  }

  reiniciar()
  {
    this.segundo.set(this.inicio())
  }

}

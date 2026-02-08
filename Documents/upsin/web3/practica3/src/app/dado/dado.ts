import { Component, input, Input, signal } from '@angular/core';

@Component({
  selector: 'app-dado',
  imports: [],
  templateUrl: './dado.html',
  styleUrl: './dado.scss',
})
export class Dado 
{
  number=signal<number>(Math.floor(Math.random()*6)+1);

  //@Input() color=signal<string>('black')

  //Los inputs con signal se hacen con minuscula 
  color=input<string>('black')
  colorTexto=input<string>('purple')
}

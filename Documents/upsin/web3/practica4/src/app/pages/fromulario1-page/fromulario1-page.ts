import { TitleCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-fromulario1-page',
  imports: [FormsModule,TitleCasePipe],
  templateUrl: './fromulario1-page.html',
  styleUrl: './fromulario1-page.scss',
})

export class Fromulario1Page 
{
  nombre=signal<string>('');
  apellido=signal<string>('');
}

import { Component, signal } from '@angular/core';
import { HelloWorldComponent } from './helloworld/helloworld.component';
import { Minhapagina} from './minhapagina/minhapagina';
import { CalculadoraComponent } from './calculadora/calculadora';

@Component({
  selector: 'app-root',
  imports: 
  [
    HelloWorldComponent, 
    Minhapagina,
    CalculadoraComponent
  ], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('conceitos-basicos');
}

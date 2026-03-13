import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [ FormsModule, CommonModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.scss',
})
export class CalculadoraComponent {
  num1: number = 0;
  num2: number = 0
  resultado: number = 0;

  somar() {
    this.resultado = this.num1 + this.num2;
  }


}

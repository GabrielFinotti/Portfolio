import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-time',
  templateUrl: './data-time.component.html',
  styleUrls: ['./data-time.component.css'],
})
export class DataTimeComponent implements OnInit {
  public data!: Date;
  protected rotate!: boolean;
  protected reverse!: boolean;

  constructor() {
    this.data = new Date();
    this.rotate = false;
    this.reverse = false;
  }
  // Atualização da data dinâmicamente
  ngOnInit(): void {
    setInterval(() => {
      this.data = new Date();
    }, 1000);
  }
  // Função para executar a animação do card
  rotateAnimation() {
    // Condição passada para a verificação e troca da animação de saida e entrada do componente
    if (this.rotate == false) {
      this.reverse = false;
      this.rotate = true;
    } else {
      this.rotate = false;
      this.reverse = true;
    }
  }
}

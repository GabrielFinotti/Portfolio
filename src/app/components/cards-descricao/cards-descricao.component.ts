import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-descricao',
  templateUrl: './cards-descricao.component.html',
  styleUrls: ['./cards-descricao.component.css']
})
export class CardsDescricaoComponent {
 cardId!: number;

  constructor() {
    this.cardId;
  }
}

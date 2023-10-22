import { Component } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  public cards!: any[];
  public cardId!: number;

  constructor(private cardsELement: CardsService) {
    this.cards = this.cardsELement.getCards();
  }

  getId(event: HTMLDivElement) {
    this.cardId = parseInt(event.id);
  }
}

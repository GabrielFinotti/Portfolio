import { Component } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  public cards!: any[];

  constructor(private cardsELement: CardsService) {
    this.cards = this.cardsELement.getCards();
  }
}

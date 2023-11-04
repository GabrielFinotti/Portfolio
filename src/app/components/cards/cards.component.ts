import { Component, EventEmitter, Output } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  @Output() public cardId = new EventEmitter();
  public cards!: any[];

  constructor(private cardsELement: CardsService) {
    this.cards = this.cardsELement.getCards();
  }

  getId(event: HTMLDivElement) {
    let id = parseInt(event.id);
    this.cardId.emit(id);
  }
}

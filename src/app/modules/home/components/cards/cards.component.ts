import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CardsService } from 'src/app/modules/home/services/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  @Output() public cardId = new EventEmitter();
  public cards!: any[];

  constructor(private cardsELement: CardsService) {
    this.cards = this.cardsELement.getCards();
  }

  ngOnInit(): void {}

  getId(event: HTMLDivElement) {
    let id = parseInt(event.id);
    this.cardId.emit(id);
  }
}

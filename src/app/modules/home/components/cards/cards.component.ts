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
  protected animation!: string;

  constructor(private cardsELement: CardsService) {
    this.cards = this.cardsELement.getCards();
  }

  ngOnInit(): void {
    for (let i = 0; i < this.cards.length; i++) {
      let divId: number = this.cards[i].id;

      if (divId % 2) {
        console.log(`São ímpares ${divId}`);
      } else {
        console.log(`São pares ${divId}`);
      }
    }
  }

  getId(event: HTMLDivElement) {
    let id = parseInt(event.id);
    this.cardId.emit(id);
  }
}

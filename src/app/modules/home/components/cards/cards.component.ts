import { NgClass } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { CardsService } from 'src/app/modules/home/services/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  // Está emitindo um novo evento que vai ser recebido pelo componente pai!
  @Output() public cardId = new EventEmitter();
  public cards!: any[];
  protected id!: number;

  constructor(private cardsService: CardsService) {
    // Está recebendo os valores do Array dos cards via serviço!
    this.cards = this.cardsService.getCards();
  }
  // Está recebendo o id do elemento especificado e emitindo seu valor pelo evento cardId criado para enviar seu id pro elemento pai!
  getId(event: HTMLDivElement) {
    this.id = parseInt(event.id);
    this.cardId.emit(this.id);
  }

  removeAnimation(event: HTMLDivElement) {
    this.id = parseInt(event.id);
    if (this.id % 2 == 0) {
      event.classList.remove('balanco-reverse');
    } else {
      event.classList.remove('balanco');
    }
  }

  addAnimation(event: HTMLDivElement) {
    this.id = parseInt(event.id);
    if (this.id % 2 == 0) {
      event.classList.add('balanco-reverse');
    } else {
      event.classList.add('balanco');
    }
  }
}

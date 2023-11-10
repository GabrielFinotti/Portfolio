import {
  AfterViewInit,
  Component,
  EventEmitter,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CardsService } from 'src/app/modules/home/services/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements AfterViewInit {
  // Está emitindo um novo evento que vai ser recebido pelo componente pai!
  @Output() public cardId = new EventEmitter();
  // Acessando as divs pela variável local de referência!
  @ViewChildren('cardId') protected card!: QueryList<any>;

  public cards!: any[];
  protected id!: number;

  constructor(private cardsService: CardsService) {
    // Está recebendo os valores do Array dos cards via serviço!
    this.cards = this.cardsService.getCards();
  }
  // Recupera as div após ser rendeizado, acessando seus valores pelo @ViewChildren e assim setando o intervalo de tempo para chamada da classe de animação!
  ngAfterViewInit(): void {
    let cont: number = 100;
    this.card.forEach((i) => {
      setTimeout(() => {
        i.nativeElement.classList.add('balanco');
      }, cont);
      cont += 350;
    });
  }
  // Está recebendo o id do elemento especificado e emitindo seu valor pelo evento cardId criado para enviar seu id pro elemento pai!
  getId(event: HTMLDivElement) {
    this.id = parseInt(event.id);
    this.cardId.emit(this.id);
  }
}

import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CardsService } from '../../services/cards.service';
@Component({
  selector: 'app-cards-descricao',
  templateUrl: './cards-descricao.component.html',
  styleUrls: ['./cards-descricao.component.css'],
})
export class CardsDescricaoComponent implements OnChanges {
  // Está recebendo um valor externo do componente pai cujo o valor é o id do cards.component!
  @Input() public id!: number;

  // Vai receber a descrição do card clicado via serviço!
  protected desc!: string;

  constructor(private cardsService: CardsService) {}

  /*
    Toda vez que tiver uma mudança de valor no id, o ngOnChanges será ativado e vai enviar esse novo valor para a chamada da função do serviço,
    que o mesmo retorna a descrição relativa ao seu id para a variável this.desc que vai renderizar seu valor no componente <p>!
  */
  ngOnChanges(): void {
    this.desc = this.cardsService.getDescricao(this.id);
  }
}

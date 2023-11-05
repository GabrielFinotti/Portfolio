import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-cards-descricao',
  templateUrl: './cards-descricao.component.html',
  styleUrls: ['./cards-descricao.component.css'],
})
export class CardsDescricaoComponent {
  @Input() public id!: number;

  constructor() {
    this.id = this.id;
  }
}

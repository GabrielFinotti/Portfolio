import { Injectable } from '@angular/core';
import { Cards } from 'src/app/model/interface/cards';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private cards!: Array<Cards>;

  constructor() {
    this.cards = [
      {
        id: 1,
        src: '../../assets/imgs/html-5.png',
        alt: 'html',
        nome: 'HTML',
      },
      {
        id: 2,
        src: '../../assets/imgs/css.png',
        alt: 'css',
        nome: 'CSS',
      },
      {
        id: 3,
        src: '../../assets/imgs/js.png',
        alt: 'js',
        nome: 'JS',
      },
      {
        id: 4,
        src: '../../assets/imgs/typescript.png',
        alt: 'ts',
        nome: 'TS',
      },
      {
        id: 5,
        src: '../../assets/imgs/bootstrap.png',
        alt: 'bootstrap',
        nome: 'Bootstrap',
      },
      {
        id: 6,
        src: '../../assets/imgs/angular.png',
        alt: 'angular',
        nome: 'Angular',
      },
    ];
  }

  getCards() {
    return this.cards;
  }
}

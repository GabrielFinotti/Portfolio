import { Injectable } from '@angular/core';
import { Credits } from 'src/app/model/interface/credits';

@Injectable({
  providedIn: 'root',
})
export class CreditsService {
  private credits!: Array<Credits>;

  constructor() {
    this.credits = [
      {
        title: 'Html ícone',
        href: 'https://www.flaticon.com/br/icones-gratis/html-5',
        desc: 'Html 5 ícones criados por Freepik - Flaticon',
      },
      {
        title: 'Css ícone',
        href: 'https://www.flaticon.com/br/icones-gratis/css',
        desc: 'Css ícones criados por Freepik - Flaticon',
      },
      {
        title: 'Js ícone',
        href: 'https://www.flaticon.com/br/icones-gratis/javascript',
        desc: 'Javascript ícones criados por Freepik - Flaticon',
      },
      {
        title: 'Bootstrap ícone',
        href: 'https://www.flaticon.com/br/icones-gratis/bootstrap',
        desc: 'Bootstrap ícones criados por Freepik - Flaticon',
      },
    ];
  }

  getCredits() {
    return this.credits;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CreditsService {
  private credits!: any[];

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

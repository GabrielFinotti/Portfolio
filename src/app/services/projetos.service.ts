import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjetosService {
  protected projetos!: Array<{nome: string, src: string, href: string}>;

  constructor() {
    this.projetos = [
      {
        src: '',
        nome: '',
        href: '',
      },
      {
        src: '',
        nome: '',
        href: '',
      },
      {
        src: '',
        nome: '',
        href: '',
      },
      {
        src: '',
        nome: '',
        href: '',
      },
      {
        src: '',
        nome: '',
        href: '',
      },
      {
        src: '',
        nome: '',
        href: '',
      },
    ];
  }

  getProjeto() {
    return this.projetos;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjetosService {
  protected projetos!: any[];

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

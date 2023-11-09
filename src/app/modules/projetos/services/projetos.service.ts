import { Injectable } from '@angular/core';
import { Projetos } from 'src/app/model/interface/projetos';

@Injectable({
  providedIn: 'root',
})
export class ProjetosService {
  protected projetos!: Array<Projetos>;

  constructor() {
    this.projetos = [
      {
        src: '',
        nome: '',
        href: '',
        id: 1,
      },
      {
        src: '',
        nome: '',
        href: '',
        id: 2,
      },
      {
        src: '',
        nome: '',
        href: '',
        id: 3,
      },
      {
        src: '',
        nome: '',
        href: '',
        id: 4,
      },
      {
        src: '',
        nome: '',
        href: '',
        id: 5,
      },
      {
        src: '',
        nome: '',
        href: '',
        id: 6,
      },
    ];
  }

  getProjeto() {
    return this.projetos;
  }
}

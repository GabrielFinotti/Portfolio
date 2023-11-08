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

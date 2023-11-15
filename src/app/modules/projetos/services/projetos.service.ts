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
        src: '../../../../assets/imgProjects/PetLife.png',
        nome: 'PetLife',
        alt: 'PetLife',
        href: 'https://gabrielfinotti.github.io/PetLife/',
        id: 1,
      },
      {
        src: '',
        nome: '',
        alt: '',
        href: '',
        id: 2,
      },
      {
        src: '',
        nome: '',
        alt: '',
        href: '',
        id: 3,
      },
      {
        src: '',
        nome: '',
        alt: '',
        href: '',
        id: 4,
      },
      {
        src: '',
        nome: '',
        alt: '',
        href: '',
        id: 5,
      },
      {
        src: '',
        nome: '',
        alt: '',
        href: '',
        id: 6,
      },
    ];
  }

  getProjeto() {
    return this.projetos;
  }
}

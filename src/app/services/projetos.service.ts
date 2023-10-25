import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjetosService {
  protected projetos!: any[];

  constructor() {
    this.projetos = [
      {
        src: '../../assets/imgs/Not-Found.png',
        nome: 'Nome Projeto',
        href: '',
      },
      {
        src: '../../assets/imgs/Not-Found.png',
        nome: 'Nome Projeto',
        href: '',
      },
      {
        src: '../../assets/imgs/Not-Found.png',
        nome: 'Nome Projeto',
        href: '',
      },
      {
        src: '../../assets/imgs/Not-Found.png',
        nome: 'Nome Projeto',
        href: '',
      },
      {
        src: '../../assets/imgs/Not-Found.png',
        nome: 'Nome Projeto',
        href: '',
      },
      {
        src: '../../assets/imgs/Not-Found.png',
        nome: 'Nome Projeto',
        href: '',
      },
    ];
  }

  getProjeto() {
    return this.projetos;
  }
}

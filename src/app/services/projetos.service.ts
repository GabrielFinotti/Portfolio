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
        nome: 'test',
      },
      {
        src: '../../assets/imgs/Not-Found.png',
        nome: 'test',
      },
      {
        src: '../../assets/imgs/Not-Found.png',
        nome: 'test',
      },
      {
        src: '../../assets/imgs/Not-Found.png',
        nome: 'test',
      },
      {
        src: '../../assets/imgs/Not-Found.png',
        nome: 'test',
      },
      {
        src: '../../assets/imgs/Not-Found.png',
        nome: 'test',
      },
    ];
  }

  getProjeto() {
    return this.projetos;
  }
}

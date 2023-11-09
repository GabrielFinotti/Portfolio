import { Injectable } from '@angular/core';
import { Cards } from 'src/app/model/interface/cards';

@Injectable({
  providedIn: 'root',
})
export class CardPerfilService {
  private cardPerfil!: Array<Cards>;

  constructor() {
    this.cardPerfil = [
      {
        src: '../../../../assets/imgs/Foto tumb.png',
        id: 1,
        desc: `Amante de tecnologia, desde criança sempre me interessei pela área da
        computação, era um curioso e tentava compeender como um computador
        funcionava. A partir dos meus 12 anos comecei a me aventurar na área
        da progamação, consumindo conteúdos no YouTube e pesquisa na Web. Hoje
        estudo e atuo no Frontend, aplicando meus conhecimentos em projetos
        pessoais e profissionais!`,
        alt: 'img Perfil',
        nome: '',
      },
    ];
  }

  getCardPerfil() {
    return this.cardPerfil;
  }
}

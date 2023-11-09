import { Injectable } from '@angular/core';
import { Cards } from 'src/app/model/interface/cards';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private cards!: Array<Cards>;

  constructor() {
    this.cards = [
      {
        id: 1,
        src: '../../../../assets/imgs/html-5.png',
        alt: 'html',
        nome: 'HTML',
        desc: `Foi meu ponto de partida para ingressar no universo da progamação, trabalhei
        em projetos interdiciplinares, projetos independentes em equipe e em
        desenvolvimento de um site para uma empresa de Portugal juntamente com
        outros amigos da área, tendo assim 7 meses de experiência!`,
      },
      {
        id: 2,
        src: '../../../../assets/imgs/css.png',
        alt: 'css',
        nome: 'CSS',
        desc: `Depois de aprender html, ingressei nos estudos em css e juntamente com html,
        utilizei nos desenvolvimentos dos sites e projetos no período dos estudos e
        dos projetos que trabalhei e desenvolvi, também tendo 7 meses de
        experiência!`,
      },
      {
        id: 3,
        src: '../../../../assets/imgs/js.png',
        alt: 'js',
        nome: 'JS',
        desc: `Para fechar com a base e atuar profissionalmente e precisamente na área de
        desenvolvimento web, ingressei nos estudos em Javascript, ainda estando em
        processo de aprendizagem, contudo ja atuando na pratica com meus
        conhecimentos adquiridos até o momento, tendo assim 3 meses de experiência
        com essa linguagem!`,
      },
      {
        id: 4,
        src: '../../../../assets/imgs/typescript.png',
        alt: 'ts',
        nome: 'TS',
        desc: `Meu primeiro contato foi por consequência da necessidade de utilizar em
        conjunto com angular, meu aprendizado foi rápido, algumas peculiariedades
        específicas da linguagem, mas nada que dificultasse. Tendo assim, 4 meses de
        experiência!`,
      },
      {
        id: 5,
        src: '../../../../assets/imgs/bootstrap.png',
        alt: 'bootstrap',
        nome: 'Bootstrap',
        desc: `Depois de compreender e aprender a utilizar uma boa parte das
        funcionalidades disponíveis no css, busquei aprender frameworks para melhor
        aproveitamento do trabalho, redução de tempo e otimização de código. Assim
        iniciei com uma das principais bibliotecas de estilo, o bootstrap, tendo no
        momento 5 meses de experiência!`,
      },
      {
        id: 6,
        src: '../../../../assets/imgs/angular.png',
        alt: 'angular',
        nome: 'Angular',
        desc: `Inicialmente comecei a estudar angular por necessidade, pois no meu primeiro
        projeto profissional foi utilizado a stack Angular e Spring Boot. Foi bem
        desafiador no início, além que foi por ele que tive meu primeiro contato com
        Typescript, contudo com o tempo, estudando e botando em prática o que fui
        aprendendo, fui me adaptando e gostando do Framework, e assim seguir
        aprimorando e melhorando minhas habilidades que adquiri com essa ferramenta,
        atualmente tendo 4 meses de experiência!`,
      },
      {
        id: 7,
        src: '../../../../assets/imgs/Sass.png',
        alt: 'sass',
        nome: 'Sass',
        desc: '',
      },
    ];
  }

  /*
    Está retornando o valor de cada índece do Array cujo os mesmo são objetos que detém outros valores.
    Posteriormente serão lidos e renderizados no componente responsável pelos cards!
  */
  getCards() {
    return this.cards;
  }
  /*
    Está função está retornando a descrição do objeto especificado, nela primeiramente pecorre o array buscando verificar qual objeto detem o mesmo id do valor recebido pela função.
    Se verificado e confirmado, é verificado se a descrição desse mesmo objeto se encontra nula ou vazia, se sim, retorna uma mensagem de aviso, se não retorna sua descrição.
    Se não encontrado nenhum Objeto que detém um id especificado pelo valor recebido da função, retorna uma string vazia!
  */
  getDescricao(id: number) {
    for (let i = 0; i < this.cards.length; i++) {
      if (id == this.cards[i].id) {
        if (this.cards[i].desc == '' || this.cards[i].desc == null) {
          return 'Esse card não tem uma descrição!';
        } else {
          return this.cards[i].desc;
        }
      }
    }
    return '';
  }
}

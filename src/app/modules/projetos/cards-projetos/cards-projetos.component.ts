import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Projetos } from 'src/app/model/interface/projetos';
import { ProjetosService } from 'src/app/modules/projetos/services/projetos.service';

@Component({
  selector: 'app-cards-projetos',
  templateUrl: './cards-projetos.component.html',
  styleUrls: ['./cards-projetos.component.css'],
})
export class CardsProjetosComponent implements AfterViewInit {
  // Acessando as divs pela variável local de referência!
  @ViewChildren('divCards') protected divCards!: QueryList<ElementRef>;

  public projeto!: Array<Projetos>;

  constructor(private linkProjetos: ProjetosService) {
    this.projeto = this.linkProjetos.getProjeto();
  }
  // Recupera as div após ser rendeizado, acessando seus valores pelo @ViewChildren e assim setando o intervalo de tempo para chamada da classe de animação!
  ngAfterViewInit(): void {
    let cont: number = 200;
    this.divCards.forEach((i) => {
      setInterval(() => {
        i.nativeElement.classList.add('showProjects');
      }, cont);
      cont += 200;
    });
  }
}

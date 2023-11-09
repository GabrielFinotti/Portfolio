import { Component } from '@angular/core';
import { Projetos } from 'src/app/model/interface/projetos';
import { ProjetosService } from 'src/app/modules/projetos/services/projetos.service';

@Component({
  selector: 'app-cards-projetos',
  templateUrl: './cards-projetos.component.html',
  styleUrls: ['./cards-projetos.component.css'],
})
export class CardsProjetosComponent {
  public projeto!: Array<Projetos>;

  constructor(private linkProjetos: ProjetosService) {
    this.projeto = this.linkProjetos.getProjeto();
  }
}

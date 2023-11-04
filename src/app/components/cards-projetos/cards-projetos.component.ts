import { Component, OnInit } from '@angular/core';
import { ProjetosService } from 'src/app/services/projetos.service';

@Component({
  selector: 'app-cards-projetos',
  templateUrl: './cards-projetos.component.html',
  styleUrls: ['./cards-projetos.component.css'],
})
export class CardsProjetosComponent implements OnInit {
  public projeto!: any[];

  constructor(private linkProjetos: ProjetosService) {
    this.projeto = this.linkProjetos.getProjeto();
  }

  ngOnInit(): void {}
}

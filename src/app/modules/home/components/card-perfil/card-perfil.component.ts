import { Component } from '@angular/core';
import { CardPerfilService } from '../../services/card-perfil.service';
import { Cards } from 'src/app/model/interface/cards';

@Component({
  selector: 'app-card-perfil',
  templateUrl: './card-perfil.component.html',
  styleUrls: ['./card-perfil.component.css'],
})
export class CardPerfilComponent {
  protected cardPerfil!: Array<Cards>;

  constructor(private cardPerfilService: CardPerfilService) {
    this.cardPerfil = this.cardPerfilService.getCardPerfil();
  }
}

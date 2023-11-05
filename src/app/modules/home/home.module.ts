import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { HomeComponent } from './pages/home.component';
import { CardPerfilComponent } from './components/card-perfil/card-perfil.component';
import { CardsComponent } from './components/cards/cards.component';
import { CardsDescricaoComponent } from './components/cards-descricao/cards-descricao.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    CardPerfilComponent,
    CardsComponent,
    CardsDescricaoComponent,
  ],
  exports: [
    HomeComponent,
    CardPerfilComponent,
    CardsComponent,
    CardsDescricaoComponent,
  ],
  imports: [CommonModule],
})
export class HomeModule {}

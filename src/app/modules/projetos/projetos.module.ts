import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { CardsProjetosComponent } from './cards-projetos/cards-projetos.component';

@NgModule({
  declarations: [
    ProjetosComponent,
    CardsProjetosComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProjetosComponent,
    CardsProjetosComponent,
  ]
})
export class ProjetosModule { }

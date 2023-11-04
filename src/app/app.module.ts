import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardsComponent } from './components/cards/cards.component';
import { CardPerfilComponent } from './components/card-perfil/card-perfil.component';
import { CardsDescricaoComponent } from './components/cards-descricao/cards-descricao.component';
import { CardsProjetosComponent } from './components/cards-projetos/cards-projetos.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjetosComponent,
    NavbarComponent,
    NotFoundComponent,
    FooterComponent,
    CardsComponent,
    CardPerfilComponent,
    CardsDescricaoComponent,
    CardsProjetosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

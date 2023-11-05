import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './modules/home/home.module';
import { ProjetosModule } from './modules/projetos/projetos.module';
import { SharedModule } from './shared/shared.module';
import { NotFoundModule } from './modules/not-found/not-found.module';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ProjetosModule,
    SharedModule,
    NotFoundModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

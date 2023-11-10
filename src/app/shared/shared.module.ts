import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

// Componets
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DataTimeComponent } from './components/data-time/data-time.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    DataTimeComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    DataTimeComponent
  ]
})
export class SharedModule { }

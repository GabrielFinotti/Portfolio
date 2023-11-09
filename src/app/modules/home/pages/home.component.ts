import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public id!: number;
  protected test!: Array<number>;

  constructor() {
    this.test = [1, 4, 5, 6];
    this.test.forEach((i) => {
      console.log(i)
    })
  }
  // Está pegando o valor enviado pelo elemento filho cards e anexando a variável this.id para posteriormente enviala para seu componete filho cards-descricao!
  public getIdCards(id: number) {
    this.id = id;
  }
}

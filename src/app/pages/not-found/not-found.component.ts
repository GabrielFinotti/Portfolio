import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TimeoutConfig } from 'rxjs';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent implements OnInit {
  public contador: number = 0;
  public show: boolean = false;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.show = !this.show;

      const interval: any = setInterval(() => {
        this.contador++;

        if (this.contador == 5) {
          clearInterval(interval);
        }
      }, 1000);
    }, 2000);
  }
}

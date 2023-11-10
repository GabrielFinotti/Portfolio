import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-time',
  templateUrl: './data-time.component.html',
  styleUrls: ['./data-time.component.css'],
})
export class DataTimeComponent implements OnInit {
  public data!: Date;

  constructor() {
    this.data = new Date();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.data = new Date();
    }, 1000);
  }
}

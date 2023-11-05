import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent implements OnInit {
  public contador: number = 5;
  public show: boolean = false;

  constructor(private route: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.show = !this.show;

      const interval: any = setInterval(() => {
        this.contador--;

        if (this.contador == 0) {
          clearInterval(interval);

          this.route.navigateByUrl('/home');
        }
      }, 1000);
    }, 2000);
  }
}

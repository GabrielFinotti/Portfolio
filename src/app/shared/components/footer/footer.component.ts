import { Component } from '@angular/core';
import { CreditsService } from 'src/app/shared/services/credits.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  public linksFooter!: any[];

  constructor(private credits: CreditsService) {
    this.linksFooter = this.credits.getCredits();
  }
}

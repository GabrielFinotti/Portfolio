import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { NotFoundComponent } from 'src/app/modules/not-found/pages/not-found/not-found.component';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule],
  exports: [NotFoundComponent],
})
export class NotFoundModule {}

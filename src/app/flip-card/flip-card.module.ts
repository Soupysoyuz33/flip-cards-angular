import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipCardComponent } from './flip-card.component';
import { FlipCardFrontComponent} from './flip-card-front';
import { FlipCardBackComponent } from './flip-card-back';



@NgModule({
  declarations: [FlipCardComponent, FlipCardBackComponent, FlipCardFrontComponent],
  imports: [
    CommonModule
  ],
  exports: [FlipCardComponent, FlipCardBackComponent, FlipCardFrontComponent]
})
export class FlipCardModule { }

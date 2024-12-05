import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { CardButtonCancelComponent } from '../card-button-cancel/card-button-cancel.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardRoxoButtonComponent } from '../card-roxo-button/card-roxo-button.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';
import { CardComponent } from '../card/card.component';

@NgModule({
  declarations: [
    CardComponent,
    CardButtonComponent,
    CardRoxoComponent,
    CardRoxoButtonComponent,
    CardButtonCancelComponent,
  ],
  imports: [CommonModule, MatSliderModule],
  exports: [CardComponent, CardRoxoComponent],
})
export class CardsModule {}

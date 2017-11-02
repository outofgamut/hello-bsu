import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PizzaOrderComponent } from './pizza-order/pizza-order.component';
import { StoreModule } from '@ngrx/store';
import { pizzaReducer } from './pizza.reducer';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('pizza', pizzaReducer),
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule
  ],
  exports: [PizzaOrderComponent],
  declarations: [PizzaOrderComponent]
})
export class PizzaModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PizzaOrderComponent } from './pizza-order/pizza-order.component';
import { StoreModule } from '@ngrx/store';
import { pizzaReducer } from './pizza.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('pizza', pizzaReducer)
  ],
  exports: [PizzaOrderComponent],
  declarations: [PizzaOrderComponent]
})
export class PizzaModule { }

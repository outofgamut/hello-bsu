import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule, MatIconModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';

import { PizzaModule } from './pizza/pizza.module';
import { reducers } from './reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    PizzaModule,
    MatToolbarModule,
    MatIconModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatStepperModule,
    MatToolbarModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttendeesComponent } from './attendees/attendees.component';
import { HomeComponent } from './home/home.component';
import { PizzaModule } from './pizza/pizza.module';
import { reducers } from './reducers';
import { TalkComponent } from './talk/talk.component';

@NgModule({
  declarations: [AppComponent, TalkComponent, HomeComponent, AttendeesComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }),
    PizzaModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatStepperModule,
    MatListModule,
    MatExpansionModule,
    FlexLayoutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

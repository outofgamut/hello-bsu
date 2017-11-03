import { RouterModule, Routes } from '@angular/router';
import { PizzaOrderComponent } from './pizza/pizza-order/pizza-order.component';
import { TalkComponent } from './talk/talk.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'talk', component: TalkComponent },
  { path: 'pizza', component: PizzaOrderComponent },
  { path: '**', component: HomeComponent } // always last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

import { Component, OnInit } from '@angular/core';

import { UUID } from 'angular2-uuid';
import { Store } from '@ngrx/store';
import * as TodoActions from './actions/todo.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
}

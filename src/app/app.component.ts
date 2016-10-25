import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

import { IAppState } from './app.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  count$: Observable<number>;

  constructor(private store: NgRedux<IAppState>) {
    this.count$ = store.select('count');
  }

  plus() {
    this.store.dispatch({ type: 'INCREMENT' });
  }
}

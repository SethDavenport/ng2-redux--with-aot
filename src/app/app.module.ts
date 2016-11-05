import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgReduxModule, NgRedux, DevToolsExtension } from 'ng2-redux';

import { AppComponent } from './app.component';
import { IAppState } from './app.interfaces';

export function reducer(state: IAppState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
  }

  return state;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgReduxModule.forRoot(),
    BrowserModule,
  ],
  providers: [DevToolsExtension],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    ngRedux: NgRedux<IAppState>,
    devTools: DevToolsExtension) {
    ngRedux.configureStore(
      reducer,
      { count: 0 },
      [],
      devTools.isEnabled() ? [ devTools.enhancer() ] : []);
  }
}

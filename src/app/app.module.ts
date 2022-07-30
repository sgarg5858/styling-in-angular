import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgDeepInActionComponent } from './ng-deep-in-action/ng-deep-in-action.component';
import { TestComponent } from './ng-deep-in-action/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    NgDeepInActionComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

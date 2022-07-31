import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgDeepInActionComponent } from './ng-deep-in-action/ng-deep-in-action.component';
import { TestComponent } from './ng-deep-in-action/test/test.component';
import { ButtonComponent } from './ng-deep-in-action/button/button.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { ValueProcessingComponent } from './value-processing/value-processing.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { GridComponent } from './grid/grid.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    NgDeepInActionComponent,
    TestComponent,
    ButtonComponent,
    CustomButtonComponent,
    ValueProcessingComponent,
    FlexboxComponent,
    GridComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

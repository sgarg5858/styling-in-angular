import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgDeepInActionComponent } from './ng-deep-in-action/ng-deep-in-action.component';

const routes: Routes = [
  {path:'ng-deep',component:NgDeepInActionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

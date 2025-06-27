import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LpHomeComponent } from './components/lp-home/lp-home.component';


const routes: Routes = [
  { path: "", component: LpHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

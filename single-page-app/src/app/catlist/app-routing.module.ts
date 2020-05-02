import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatlistComponent } from './catlist.component';


const routes: Routes = [
  {
    path: '',
    component: CatlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

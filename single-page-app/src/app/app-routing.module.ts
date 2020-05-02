import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


/* Dynamically import the pages */
const routes: Routes = [
  { path: '', loadChildren: () => import('./catlist/catlist.module').then(m => m.CatlistModule) },
  { path: 'description', loadChildren: () => import('./description/description.module').then(m => m.DescriptionModule) },
  { path: 'category', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

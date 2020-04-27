import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CatListComponent } from './cat_list.component';
import { DescriptionComponent } from './description.component';
import { CategoryComponent } from './category.component';


const routes: Routes = [
  { path: '', component: CatListComponent },
  { path: 'description', component: DescriptionComponent },
  { path: 'category', component: CategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

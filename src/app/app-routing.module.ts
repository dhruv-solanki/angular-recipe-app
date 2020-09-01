import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeCardComponent } from './pages/recipe-card/recipe-card.component';
import { RecipeDetailComponent } from './pages/recipe-detail/recipe-detail.component'

const routes: Routes = [
  { path: '', component: RecipeCardComponent },
  { path: ':id', component: RecipeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

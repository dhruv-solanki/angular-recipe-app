import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../shared/recipe.service';
import { CreateRecipeService } from '../../shared/create-recipe.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {
  mealRecipe: Recipe;
  recipeData: Object;
  
  constructor(private recipeService: RecipeService, private createRecipeService: CreateRecipeService) { }

  ngOnInit(): void {
    this.recipeService.getRecipeRandom().subscribe(
      data => this.recipeData = data
    );

    setTimeout(() => {
      this.createRecipeCard();
    }, 1000);
  }

  createRecipeCard() {
    this.createRecipeService.getRecipeData(this.recipeData);
    this.mealRecipe = this.createRecipeService.createRecipe();

    console.log(this.mealRecipe);
  }

}

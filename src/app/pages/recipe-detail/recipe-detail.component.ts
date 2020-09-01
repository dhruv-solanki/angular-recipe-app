import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../shared/recipe.service';
import { CreateRecipeService } from '../../shared/create-recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  fullRecipe: Recipe;
  recipeData: Object;
  public id: string;

  constructor(private recipeService: RecipeService, private createRecipeService: CreateRecipeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.recipeService.getRecipeByID(this.id).subscribe(
      data => this.recipeData = data
    );

    setTimeout(() => {
      this.createFullRecipe();
    }, 1000);
  }

  createFullRecipe() {
    this.createRecipeService.getRecipeData(this.recipeData);
    this.fullRecipe = this.createRecipeService.createRecipe();

    console.log(this.fullRecipe);
  }

}

import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class CreateRecipeService {
  mealRecipe: Recipe;

  recipe: any;

  id: number;
  name: string;
  category: string;
  country: string;
  image: string;
  youtubeLink: string;
  blogLink: string;

  ingredients: string[] = [];
  measures: string[] = [];
  instructions: string[] = [];

  trimedInstructions: string;
  splitInstructions: string[];

  constructor() { }

  getRecipeData(recipeData: any) {
    this.recipe = recipeData['meals'][0];

    this.id = this.recipe['idMeal'];
    this.name = this.recipe['strMeal'];
    this.category = this.recipe['strCategory'];
    this.country = this.recipe['strArea'];
    this.image = this.recipe['strMealThumb'];

    this.youtubeLink = this.recipe['strYoutube'];
    this.blogLink = this.recipe['strSource'];

    if(this.ingredients.length == 0 && this.measures.length == 0) {
      for(let i=0; i<20; i++) {
        if(this.recipe['strIngredient'+i.toString()] != '' && this.recipe['strIngredient'+i.toString()] != null)  {
          this.ingredients.push(this.recipe['strIngredient'+i.toString()]);
        }
  
        if(this.recipe['strMeasure'+i.toString()] != '' && this.recipe['strMeasure'+i.toString()] != null)  {
          this.measures.push(this.recipe['strMeasure'+i.toString()]);
        }
      }
    }

    this.trimedInstructions = this.recipe['strInstructions'].trim();
    this.splitInstructions = this.trimedInstructions.split('.');

    if(this.instructions.length == 0) {
      for(let i=0; i<this.splitInstructions.length; i++) {
        if(this.splitInstructions[i] != "") {
          this.instructions.push(this.splitInstructions[i]);
        }
      }
    }
  }

  createRecipe(): Recipe {
    this.mealRecipe = new Recipe(this.id, this.name, this.category, this.country, this.image);
    this.mealRecipe.setLinks(this.youtubeLink, this.blogLink);
    this.mealRecipe.setRecipeDetails(this.ingredients, this.measures, this.instructions);

    return this.mealRecipe;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public id: string;

  constructor(private http: HttpClient) { }

  randomRecipeurl: string = `https://www.themealdb.com/api/json/v1/1/random.php`;
  recipeByIDurl: string = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`;

  getRecipeRandom() {
    return this.http.get(this.randomRecipeurl);
  }

  getRecipeByID(id: string) {
    this.id = id;
    return this.http.get(this.recipeByIDurl+this.id);
  }
  
}

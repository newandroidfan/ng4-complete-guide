import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelect(recipeSelect:Recipe) {
    console.log(`recipesComponent: ${JSON.stringify(recipeSelect, undefined, 2)}`);
  }
}

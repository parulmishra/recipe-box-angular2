import { Component } from '@angular/core';

export class Recipe
{
  title: string;
  ingredients: string;
  directions: string;
}

const RECIPES: Recipe[] = [
  {title: 'Chocolate Chip Cookies', ingredients: 'flour, sugar,chocolate chips', directions: 'mix and bake'},
  {title: 'Almond Cookies', ingredients: 'flour, sugar,almonds', directions: 'mix and bake'},
  {title: 'Cake', ingredients: 'flour, sugar,almonds', directions: 'mix and bake'}
];


@Component({
  // moduleId: module.id,
  selector: 'app-root',
  // templateUrl: 'app.component.html',
  // styleUrls: ['app.component.css']
  template: `
  <div class="container">
  <h1> Recipe Box </h1>
  <h3> {{currentRecipe}}</h3>
  <ul>
    <li *ngFor="let recipe of recipes" (click)="onSelect(recipe)" [class.selected]="recipe === selectedRecipe">
    <span class="badge">{{recipe.title}}</span>
    </li>
  </ul>
  <div *ngIf="selectedRecipe">
    <h2>{{selectedRecipe.ingredients}} details</h2>
    <div><label>Directions: </label>{{selectedRecipe.directions}}</div>
    <div>
      <label>ingredients</label>
      <input [(ngModel)]="selectedRecipe.ingredients" placeholder="ingredients"/>
    </div>
  </div>
  `
})

export class AppComponent
{
  title = 'Recipe Box';
  currentRecipe: string = 'Sweets';
  recipes = RECIPES;
  selectedRecipe: Recipe;
  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }
}

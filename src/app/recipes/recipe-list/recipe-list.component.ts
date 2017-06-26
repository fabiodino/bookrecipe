import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	@Output() recipeWasSelected = new EventEmitter<Recipe>(); // Emite para recipe.component.html.

  recipes: Recipe[] = [
		new Recipe('Uma receita teste', 'Simples teste', 'http://blog.huntington.com.br/wp-content/uploads/sites/3/2014/02/emagrec-comida-caseira.jpg'),
		new Recipe('Outra receita teste', 'Outro simples teste', 'http://blog.huntington.com.br/wp-content/uploads/sites/3/2014/02/emagrec-comida-caseira.jpg')
	];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}

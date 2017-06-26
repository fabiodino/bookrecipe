import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
	@Input() recipe: Recipe; // Pega o dado 'recipe' de fora (faz bind com recipe-list).
	@Output() recipeSelected = new EventEmitter<void>(); // Emite para recipe-list.

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
			this.recipeSelected.emit();
	}

}

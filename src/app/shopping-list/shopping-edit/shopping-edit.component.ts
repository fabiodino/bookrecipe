import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
	@ViewChild('nameInput') nameInputRef: ElementRef;
	@ViewChild('amountInput') amountInputRef: ElementRef;
	/*ingredientAdded = new EventEmitter<{name: string, amount: number}>(); // O objeto não é um valor, apenas type definition.*/
	@Output() ingredientAdded = new EventEmitter<Ingredient>(); // Melhor usar a model.
 
  constructor() { }

  ngOnInit() {
  }

  onAddItem() { // Envia para shopping-list.
  	const ingName = this.nameInputRef.nativeElement.value;
  	const ingAmount = this.amountInputRef.nativeElement.value;
  	const newIngredient = new Ingredient(ingName, ingAmount);
  	this.ingredientAdded.emit(newIngredient);
  }

}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent {
	@Output() featureSelected = new EventEmitter<string>(); // Emite para app.component.html.

	onSelect(feature: string) { // Recebe string 'recipe'.
		this.featureSelected.emit(feature);
	}
	
}

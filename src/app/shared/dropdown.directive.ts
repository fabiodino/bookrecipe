import { Directive, HostListener, HostBinding } from '@angular/core';


@Directive({
	selector: '[appDropdown]'
	//selector: 'p[appDropdown]' // Aplica só na tag 'p'.
	//selector: 'button[appDropdown]' // Aplica no button.
})
export class DropdownDirective {
	@HostBinding('class.open') isOpen = false; // Associa variável ao atributo HTML.

	@HostListener('click') toggleOpen() { // Escuta evento do HTML.
		this.isOpen = !this.isOpen;
	}

	constructor() {}

}
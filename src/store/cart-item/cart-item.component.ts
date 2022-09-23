import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartItem} from "../cart.service";

@Component({
	selector: 'lhh-cart-item',
	templateUrl: './cart-item.component.html',
	styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
	@Input() cartItem!: CartItem
	@Input() itemIndex!: number
	@Output() removeItem: EventEmitter<number> = new EventEmitter()

	constructor() { }

	ngOnInit(): void {
	}

}

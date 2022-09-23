import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../interfaces"
import {CartItem} from "../cart.service";
@Component({
	selector: 'lhh-product',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

	@Input()product!: Product

	@Output()addToCart: EventEmitter<CartItem> = new EventEmitter()

	quantity: number = 1;

	constructor() { }

	ngOnInit(): void {
	}

	cart() {
		this.addToCart.emit({product: this.product, quantity: this.quantity})
		this.quantity = 1
	}

	decrement() {
		if (this.quantity > 1)
			this.quantity--
	}

	increment() {
		this.quantity++
	}

}

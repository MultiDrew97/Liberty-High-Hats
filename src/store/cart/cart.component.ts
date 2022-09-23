import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CartService} from "../cart.service";
import {Router} from "@angular/router";

@Component({
	selector: 'lhh-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

	@Output()closeCart: EventEmitter<void> = new EventEmitter()

	constructor(readonly cart: CartService, readonly router: Router) { }

	ngOnInit(): void {

	}

	goToCheckout() {
		this.router.navigate(["store", "checkout"], {state: {cart: this.cart.Cart, total: this.cart.CartTotal}})
			.then(success => {
				if (!success)
					return

				this.closeCart.emit()
			})
			.catch(err => {
			console.error(err)
		})
	}

	clearCart() {
		this.cart.emptyCart()
	}

}

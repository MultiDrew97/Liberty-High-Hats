import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CartItem, CartService} from "../cart.service";

@Component({
	selector: 'lhh-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {

	items: CartItem[] = []
	cartTotal: number = 0

	constructor(readonly router: Router, readonly cart: CartService) {	}


	ngOnInit(): void {
		this.items = history.state.cart
		this.cartTotal = history.state.total
	}

	ngOnDestroy() {
		this.cart.save()
	}
}

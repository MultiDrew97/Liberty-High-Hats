import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../interfaces";

export interface CartItem {
	product: Product;
	quantity: number;
}

const SEPARATOR: string = "!"

@Injectable({
	providedIn: 'root'
})
export class CartService implements OnDestroy {
	private __cartID: string
	private __cart: CartItem[]

	constructor() {
		this.__cartID = "tempID"
		this.__cart = []
		this.load()
	}

	ngOnDestroy() {
		// TODO: Figure out how to properly save the cart to prevent data loss
		this.save()
	}

	addItem(product: CartItem) {
		if (this.__cart.filter(item => item.product.id === product.product.id).length > 0) {
			this.__cart[this.__cart.findIndex(item => item.product.id === product.product.id)].quantity += product.quantity
			return
		}

		this.__cart.push(product)
	}

	removeByItem(product: Product) {
		let index = (this.__cart.map(item => item.product)).indexOf(product)
		this.removeByIndex(index)
	}

	removeByIndex(index: number) {
		this.__cart.splice(index, 1)
	}

	updateQuantity(itemID: string, quantity: number) {
		let item = this.__cart.find(item => item.product.id === itemID)

		if (item)
			item.quantity = quantity
	}

	emptyCart() {
		this.__cart = []
		localStorage.removeItem('cart')
	}

	load() {
		console.debug("Loading")
		let cart = localStorage.getItem('cart')

		if (!cart)
			return

		this.__cart = cart.split(SEPARATOR).map(value => {
			return JSON.parse(value)
		})
	}

	save() {
		localStorage.setItem('cart', this.Stringify)
	}

	get Stringify(): string {
		return this.Cart.map(item => {
			return JSON.stringify(item)
		}).join(SEPARATOR)
	}

	get isEmpty(): boolean {
		return this.__cart.length === 0
	}

	set CartID(value: string) {
		this.__cartID = value
	}

	get Cart() {
		return this.__cart
	}

	get TotalItems() {
		let numOfItems: number = 0

		for (let item of this.__cart) {
			numOfItems += item.quantity
		}

		return numOfItems
	}

	get CartTotal(): number {
		let cartTotal: number = 0

		for (let item of this.__cart) {
			cartTotal += (item.quantity * item.product.price)
		}

		return cartTotal
	}
}

import { Component, OnInit } from '@angular/core';
import {Product, ProductTag, ProductType, StrainType} from "../interfaces";
import {ProductNode} from "./store-tree/store-tree.component";
import {CartItem, CartService} from "./cart.service";
import {LhhGridDataSource} from "./grid-list/grid-list.component";
import {Router} from "@angular/router";

const PRODUCTS_DATA: Product[] = [
	{
		id: "test1",
		name: "Item 1",
		price: 0.5,
		imgLocation: "favicon.ico",
		tags: [ProductType.EDIBLE, StrainType.INDICA]
	},
	{
		id: "test2",
		name: "Item 2",
		price: 0.75,
		imgLocation: "favicon.ico",
		tags: [ProductType.FLOWER, StrainType.SATIVA]
	},
	{
		id: "test3",
		name: "Item 3",
		price: 1,
		imgLocation: "favicon.ico",
		tags: [ProductType.DISPOSABLE, StrainType.HYBRID]
	},
	{
		id: "test4",
		name: "Item 4",
		price: 1.5,
		imgLocation: "favicon.ico",
		tags: [ProductType.DISPOSABLE, StrainType.HYBRID]
	},
	{
		id: "test5",
		name: "Item 5",
		price: 1.75,
		imgLocation: "favicon.ico",
		tags: [ProductType.FLOWER, StrainType.SATIVA]
	},
	{
		id: "test6",
		name: "Item 6",
		price: 199.99,
		imgLocation: "favicon.ico",
		tags: [ProductType.EDIBLE, StrainType.INDICA]
	}
]

@Component({
	selector: 'lhh-store',
	templateUrl: './store.component.html',
	styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
	readonly gutterSize = 15;
	filter: string = ""

	dataSource: LhhGridDataSource = new LhhGridDataSource(PRODUCTS_DATA)

	constructor(readonly router: Router, readonly cart: CartService) {

	}

	ngOnInit(): void {
		//this.cart.load()
	}

	/*filterProducts(tags: ProductTag[]) {
		if (tags.length === 0) {
			this.dataSource.filteredData = this.dataSource.data
			return
		}

		this.dataSource.filteredData = this.dataSource.data.filter(product => {
			for (let tag of tags) {
				if (product.tags.includes(tag))
					return true
			}

			return false;
		})
	}*/



	private productFilter(refNode: ProductNode) {
		let tags: ProductTag[] = refNode.tag ? [refNode.tag] : []
		if (refNode.children)
			tags.push(...(refNode.children.map((node, index, arr) => {
				return node.tag
			})))

		console.log(tags)

		return (product: Product, index: number, arr: Product[]): boolean => {
			//return ((): boolean => {
				for (let childTag of tags) {
					if (childTag && product.tags.includes(childTag))
						return true
				}

				return false
			//})()
		}
	}

	addToCart(cartItem: CartItem) {
		this.cart.addItem(cartItem)
	}

	test() {
		console.debug("Test Called!!")
	}
}

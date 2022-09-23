import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Navigation, NavigationExtras, Router} from "@angular/router";
import {CartService} from "../store/cart.service";
import {NavLink} from "./outers.module";

@Component({
	selector: 'lhh-header',
	templateUrl: './header.component.html',
	styleUrls: ['./outers.component.css', './header.component.css']
})
export class HeaderComponent implements OnInit {
	readonly logoLocation: string = "favicon.ico"
	readonly navExtras: NavigationExtras = {

	}

	@Input()openCart!: boolean
	@Output()openCartChange: EventEmitter<boolean> = new EventEmitter()
	@Input()openMenu!: boolean
	@Output()openMenuChange: EventEmitter<boolean> = new EventEmitter()

	constructor(readonly router: Router, readonly cart: CartService,
				@Inject("navLinks")readonly navLinks: NavLink[]) {
	}

	ngOnInit(): void {

	}

	openCartSide() {
		this.openCart = !this.openCart
		this.openCartChange.emit(this.openCart)
	}

	openMenuSide() {
		this.openMenu = !this.openMenu
		this.openMenuChange.emit(this.openMenu)
	}

}

@Component({
	selector: 'lhh-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./outers.component.css', './footer.component.css']
})
export class FooterComponent implements OnInit {
	constructor(readonly router: Router, @Inject("footerLinks")readonly navLinks: NavLink[]) { }

	ngOnInit(): void {
	}

}

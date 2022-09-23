import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent, HeaderComponent} from './outers.component';
import {RouterLink, RouterLinkActive, RouterLinkWithHref} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import { MenuComponent } from './menu/menu.component';

export interface NavLink {
	href: string;
	text: string;
	icon?: string
}

const navLinks: NavLink[] = [{
	href: "about",
	text: "About Us"
}, {
	href: "store",
	text: "Store Front"
}]

const footerLinks: NavLink[] = [{
	href: "about",
	text: "About us"
}, {
	href: "#",
	text: "Careers"
}]

@NgModule({
	declarations: [
		HeaderComponent,
		FooterComponent,
  		MenuComponent
	],
	imports: [
		CommonModule,
		RouterLinkWithHref,
		RouterLinkActive,
		MatButtonModule,
		MatIconModule,
		MatBadgeModule,
		MatToolbarModule,
		MatSidenavModule,
		RouterLink
	],
	providers: [
		{
			provide: "navLinks",
			useValue: navLinks
		},
		{
			provide: "footerLinks",
			useValue: footerLinks
		}
	],
	exports: [
		HeaderComponent,
		FooterComponent,
		MenuComponent
	]
})
export class OutersModule {
}

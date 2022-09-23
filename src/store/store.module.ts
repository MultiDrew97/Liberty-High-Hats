import {NgModule, OnDestroy} from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import {MatCardModule} from "@angular/material/card";
import { ProductCardComponent } from './item-card/product-card.component';
import {MatTableModule} from "@angular/material/table";
import {MatTreeModule} from "@angular/material/tree";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSortModule} from "@angular/material/sort";
import { StoreTreeComponent } from './store-tree/store-tree.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatGridListModule} from "@angular/material/grid-list";
import {CdkScrollableModule} from "@angular/cdk/scrolling";
import {CartService} from "./cart.service";
import {MatSliderModule} from "@angular/material/slider";
import {MatPaginatorModule} from "@angular/material/paginator";
import {FormsModule} from "@angular/forms";
import { GridDirective } from './grid.directive';
import { GridListComponent } from './grid-list/grid-list.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CartComponent } from './cart/cart.component';
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";
import {MatBadgeModule} from "@angular/material/badge";
import { CartItemComponent } from './cart-item/cart-item.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {MatListModule} from "@angular/material/list";

@NgModule({
	declarations: [
		StoreComponent,
		ProductCardComponent,
		StoreTreeComponent,
		GridDirective,
		GridListComponent,
		CartComponent,
		CartItemComponent,
		CheckoutComponent
	],
	imports: [
		CommonModule,
		BrowserAnimationsModule,
		MatCardModule,
		MatTableModule,
		MatTreeModule,
		MatButtonModule,
		MatIconModule,
		MatSortModule,
		MatCheckboxModule,
		MatGridListModule,
		CdkScrollableModule,
		MatSliderModule,
		MatPaginatorModule,
		FormsModule,
		RouterLinkWithHref,
		MatBadgeModule,
		RouterOutlet,
		MatListModule
	],
	exports: [
		CartComponent
	],
	providers: [
		CartService
	]
})
export class StoreModule {}

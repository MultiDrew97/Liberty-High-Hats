import { NgModule } from '@angular/core';

import {ExtraOptions, RouterModule, Routes, UrlTree} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import Logger from "@herbivore/logger";
import {LoginComponent} from "./login/login.component";
import {AboutComponent} from "./about/about.component";
import {StoreComponent} from "./store/store.component";
import {CheckoutComponent} from "./store/checkout/checkout.component";

const logs: Logger = new Logger("LHH", true)
const ROUTES: Routes = [
	{
		// Default route for an empty path
		path: '',
		component: HomeComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'store',
		component: StoreComponent,
		/*children: [
			{
				path: 'checkout',
				component: CheckoutComponent
			}
		]*/
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'store/checkout',
		component: CheckoutComponent
	}
]

const OPTIONS: ExtraOptions = {
	onSameUrlNavigation: "reload",
	errorHandler: (error) => {
		logs.error(error.message, error)
		return error
	},
	paramsInheritanceStrategy: "emptyOnly",
	useHash: false,
	malformedUriErrorHandler: (error, urlSerializer, url): UrlTree => {
		logs.debug("Error", error)
		logs.debug("Sanitizer", urlSerializer)
		logs.debug("URL", url)
		logs.debug("Serializer", urlSerializer.parse(url))
		return urlSerializer.parse(url)
	},
	anchorScrolling: "enabled",
	canceledNavigationResolution: "replace",
	relativeLinkResolution: "corrected"
}

@NgModule({
	imports: [RouterModule.forRoot(ROUTES, OPTIONS)],
	exports: [RouterModule]
})
export class RoutingModule { }

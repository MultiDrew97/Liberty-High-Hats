import {NgModule, Sanitizer, SecurityContext} from '@angular/core';
import {MainModule} from "./main/main.module";
import {MainComponent} from "./main/main.component";
import {BrowserModule, DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {LoginModule} from "./login/login.module";
import {HomeModule} from "./home/home.module";
import {OutersModule} from "./outers/outers.module";
import {RoutingModule} from "./routing.module";
import Logger from "@herbivore/logger";
import {AboutModule} from "./about/about.module";
import {StoreModule} from "./store/store.module";
import {MatIconRegistry} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";

let logs: Logger | undefined = undefined

@NgModule({
	declarations: [],
	imports: [
		BrowserModule,
		MainModule,
		LoginModule,
		HomeModule,
		OutersModule,
		RoutingModule,
		AboutModule,
		StoreModule,
		HttpClientModule
	],
	providers: [
		{
			provide: "logs",
			useFactory: (): Logger => {
				if (!logs)
					logs = new Logger("LHH", true)

				return logs
			}
		}
	],
	bootstrap: [MainComponent]
})
export class LibertyHighHatsModule {
	constructor(private iconReg: MatIconRegistry, private sanitizer: DomSanitizer) {

		/*
		 * General Site Icons Registration
		 */
		iconReg.addSvgIcon("cart", this.sanitizeResources("assets/icons/cart.svg"))
		iconReg.addSvgIcon("close", this.sanitizeResources("assets/icons/close.svg"))
		iconReg.addSvgIcon("menu", this.sanitizeResources("assets/icons/menu.svg"))
		iconReg.addSvgIcon("top", this.sanitizeResources("assets/icons/top.svg"))

		/*
		 * Socials Icons Registration
		 */
		iconReg.addSvgIcon("facebook", this.sanitizeResources("assets/icons/facebook.svg"))
		iconReg.addSvgIcon("youtube", this.sanitizeResources("assets/icons/youtube.svg"))
		iconReg.addSvgIcon("twitter", this.sanitizeResources("assets/icons/twitter.svg"))
		iconReg.addSvgIcon("instagram", this.sanitizeResources("assets/icons/instagram.svg"))
	}

	private sanitizeResources(value: string): SafeResourceUrl {
		return this.sanitizer.bypassSecurityTrustResourceUrl(value)
	}
}

import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import {RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {OutersModule} from "../outers/outers.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {StoreModule} from "../store/store.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
	declarations: [
		MainComponent
	],
	imports: [
		CommonModule,
		RouterOutlet,
		OutersModule,
		MatSidenavModule,
		StoreModule,
		MatIconModule,
		MatButtonModule
	],
	providers: []
})
export class MainModule { }

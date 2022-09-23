import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
	declarations: [
		AboutComponent
	],
	imports: [
		CommonModule,
		MatButtonModule,
		MatIconModule
	]
})
export class AboutModule { }

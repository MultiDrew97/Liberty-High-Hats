import {Component, Inject, OnInit} from '@angular/core';
import Logger from "@herbivore/logger";

@Component({
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	title: string = "Liberty High Hats"

	constructor(@Inject("logs")private logs: Logger) { }

	ngOnInit(): void {
	}

}

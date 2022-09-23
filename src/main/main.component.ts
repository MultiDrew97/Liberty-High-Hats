import {Component, EventEmitter, HostListener, Inject, Input, OnDestroy, Output,} from '@angular/core';
import Logger from "@herbivore/logger";

@Component({
	selector: 'lhh-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnDestroy {
	title = 'Liberty High Hats';
	@Input()topIn: boolean = this.atTop()
	@Output('top')topOut: EventEmitter<boolean> = new EventEmitter()

	openCart: boolean = false
	openMenu: boolean = false

	constructor(@Inject('logs')private logs: Logger) {

	}

	toTop() {
		window.scrollTo({top: 0, behavior: 'smooth'})
	}

	ngOnDestroy() {
		this.logs.log("Main Destroyed")
	}

	@HostListener("window:scroll")
	atTop(): boolean {
		return window.scrollY === 0
	}
}

import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import Logger from "@herbivore/logger";

const sampleText: string = "\n" +
	"\n" +
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut massa et ex consectetur ultrices. Curabitur eleifend ac elit vel ultricies. Ut nec blandit sem. Nullam vitae lorem auctor, scelerisque velit et, viverra metus. Ut ut consequat augue. Curabitur in odio ultricies, finibus nunc vitae, ultricies enim. In nec nisi velit. Phasellus mollis felis ac auctor malesuada. Integer lacinia dolor id mauris placerat auctor. Etiam sed sodales massa, nec ultrices tellus.\n" +
	"\n" +
	"Maecenas ut magna nibh. Praesent diam metus, consequat in lorem hendrerit, porttitor dapibus nisi. Sed et libero ac lacus ornare dictum. Donec tincidunt ornare nibh, luctus convallis felis gravida ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque tincidunt vulputate leo, non auctor diam. Nulla non dignissim urna, et aliquet libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin egestas orci sapien, sit amet malesuada quam faucibus non. In tortor tortor, rutrum ut tincidunt quis, elementum in eros. Etiam consequat sem ultrices nibh pharetra sollicitudin. Nunc eu vestibulum diam. Quisque rhoncus ultricies orci, et finibus leo posuere et.\n" +
	"\n" +
	"Pellentesque quis magna eget tellus ultrices aliquet non ut enim. Vestibulum auctor dapibus tellus nec ullamcorper. Donec sodales ligula arcu, vel sagittis lorem ultrices a. Nunc molestie, odio ac faucibus cursus, lorem mauris varius lacus, et faucibus massa nunc vel purus. Phasellus scelerisque massa eget nisl accumsan, sed efficitur mauris aliquet. Integer fringilla, leo nec efficitur maximus, sapien ipsum eleifend ipsum, ut dignissim quam augue at neque. Pellentesque habitant morbi tristique senectus. "


interface About {
	name: string;
	text: string;
	facebook?: string | URL;
	twitter?: string | URL;
	instagram?: string | URL;
	youtube?: string | URL;
	imgLocation?: string
}

@Component({
	selector: 'lhh-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

	readonly abouts: About[] = [
		{
			name: "Test 1",
			text: sampleText,
			imgLocation: "favicon.ico",
			facebook: "https://facebook.com"
		},
		{
			name: "Test 2",
			text: sampleText,
			imgLocation: "favicon.ico",
			twitter: "https://twitter.com"
		},
		{
			name: "Test 3",
			text: sampleText,
			imgLocation: "favicon.ico",
			youtube: "https://youtube.com"
		},
		{
			name: "Test 4",
			text: sampleText,
			imgLocation: "favicon.ico",
			youtube: "https://youtube.com",
			instagram: "https://instagram.com"
		}
	]

	private timer?: number

	constructor(readonly router: Router,
				@Inject("logs")private logs: Logger) { }

	ngOnInit(): void {
	}

	ngOnDestroy(): void {
		if (this.timer)
			clearInterval(this.timer)

		this.logs.log("About Destroyed")
	}
}

import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {NavLink} from "../outers.module";
import {Router} from "@angular/router";

@Component({
  selector: 'lhh-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['../outers.component.css','./menu.component.css']
})
export class MenuComponent implements OnInit {

	@Output()
	closeMenu: EventEmitter<void> = new EventEmitter()

  constructor(readonly router: Router, @Inject("navLinks")readonly navLinks: NavLink[]) { }

  ngOnInit(): void {
  }

  navigate(href: string) {
	  this.router.navigate([href])
	  this.closeMenu.emit()
  }
}

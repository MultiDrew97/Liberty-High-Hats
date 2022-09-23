import {Directive, ElementRef, Host, HostListener, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Product, ProductTag} from "../interfaces";
import {MatTreeFlatDataSource, MatTreeNestedDataSource} from "@angular/material/tree";
import {LhhGridDataSource} from "./grid-list/grid-list.component";


@Directive({
	selector: '[lhhGridList]'
})
export class GridDirective implements OnInit {
	@Input() dataSource!: LhhGridDataSource
	@Input() filter: string = ""

	constructor(private eleRef: ElementRef) {}

	ngOnInit() {

	}

	filterByTags(tags: ProductTag[]) {
		this.dataSource.filterPredicate = (data): boolean => {
			if (tags.length === 0) {
				return true
			}

			for (let tag of tags) {
				if (data.tags.includes(tag))
					return true
			}

			return false;
		}

		this.dataSource.filter = "1"
	}

	filterByString(value: string) {
		this.dataSource.filterPredicate = (data: Product): boolean =>  {
			return data.name.includes(value) || data.tags.filter(tag => {
				return tag.includes(value)
			}).length > 0;
		}

		this.dataSource.filter = value
	}
}

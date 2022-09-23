import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Product, ProductTag} from "../../interfaces";
import {CartItem} from "../cart.service";
import {MatPaginator, PageEvent} from "@angular/material/paginator";

export class LhhGridDataSource extends MatTableDataSource<Product> {
	/*private _data: Product[] = [];
	private _filter: string = "";

	get data() {return this._data}
	set data(value: Product[]) {this._data = value}

	get filter() {return this._filter}
	set filter(value: string) {this._filter = value}

	get filteredData(): Product[] { return this.data }

	constructor(initialData?: Product[]) {
		if (initialData)
			this._data = initialData

		let temp = new MatTableDataSource()
	}*/

	override filterPredicate = (data: Product, filter: string): boolean =>  {
		filter = filter.toLowerCase()
		return data.name.toLowerCase().includes(filter) || data.tags.filter(tag => {
			return tag.toLowerCase().includes(filter)
		}).length > 0;
	}

	filterByTags(tags: ProductTag[]) {
		if (tags.length === 0) {
			this.filteredData = this.data
			return
		}

		this.filteredData = this.data.filter(product => {
			for (let tag of tags) {
				if (product.tags.includes(tag))
					return true
			}

			return false;
		})
	}

	filterByString(filter: string) {
		this.filterPredicate = (data: Product): boolean =>  {
			return data.name.includes(filter) || data.tags.filter(tag => {
				return tag.includes(filter)
			}).length > 0;
		}

		this.filter = filter
	}
}

@Component({
	selector: 'lhh-grid-list',
	templateUrl: './grid-list.component.html',
	styleUrls: ['./grid-list.component.css']
})
export class GridListComponent implements OnInit, AfterViewInit {
	// Bind the datasource to the component
	@Input()
	dataSource!: LhhGridDataSource

	// Get the desired gutter size from the parent. Defaults to 25
	@Input()
	gutterSize: number = 25

	// When an item is added to the cart
	@Output()
	addToCart: EventEmitter<CartItem> = new EventEmitter()

	@ViewChild('paginator')
	paginator!: MatPaginator

	/*@Input()
	filter: string = ""
	@Output()
	filterChange: EventEmitter<string> = new EventEmitter()*/

	// For the paginator when I figure that out
	sizeOptions: number[] = [5, 25, 50, 100]

	constructor() { }

	ngOnInit(): void {

	}

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator
		this.handlePage({
			pageIndex: this.paginator.pageIndex,
			pageSize: this.paginator.pageSize,
			previousPageIndex: undefined,
			length: this.paginator.length
		})
		/*this.dataSource.filteredData =
			this.dataSource.data.slice(this.paginator.pageIndex * this.paginator.pageSize, (this.paginator.pageIndex + 1) * this.paginator.pageSize )*/
	}

	handlePage(event: PageEvent) {
		this.dataSource.filteredData = this.dataSource.data.slice(event.pageIndex * event.pageSize, (event.pageIndex + 1) * event.pageSize )
	}
}

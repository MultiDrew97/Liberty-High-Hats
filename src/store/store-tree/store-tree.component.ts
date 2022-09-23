import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatTreeFlattener, MatTreeNestedDataSource} from "@angular/material/tree";
import {NestedTreeControl} from "@angular/cdk/tree";
import {ProductTag, ProductType, StrainType} from "../../interfaces";

export interface ProductNode {
	tag?: ProductTag;
	name: string;
	children?: ProductNodeLeaf[];
	checked: boolean
}

export interface ProductNodeLeaf extends ProductNode{
	tag: ProductTag
}

interface FlatProductNode {
	expandable: boolean;
	name: string;
	level: number;
	checked: boolean;
}

const TREE_DATA: ProductNode[] = [
	{
		name: "Type",
		children: [
			{
				name: "Flower",
				checked: false,
				tag: ProductType.FLOWER
			},
			{
				name: "Edible",
				checked: false,
				tag: ProductType.EDIBLE
			},
			{
				name: "Disposable",
				checked: false,
				tag: ProductType.DISPOSABLE
			}
		],
		checked: false
	},
	{
		name:"Strain",
		children: [
			{
				name: "Sativa",
				checked: false,
				tag: StrainType.SATIVA
			},
			{
				name: "Indica",
				checked: false,
				tag: StrainType.INDICA
			},
			{
				name: "Hybrid",
				checked: false,
				tag: StrainType.HYBRID
			}
		],
		checked: false
	}
]

@Component({
	selector: 'lhh-store-tree',
	templateUrl: './store-tree.component.html',
	styleUrls: ['./store-tree.component.css']
})
export class StoreTreeComponent implements OnInit {
	@Output()filterUpdated: EventEmitter<ProductTag[]> = new EventEmitter()

	private _transformer = (node: ProductNode, level: number): FlatProductNode => {
		return {
			expandable: !!node.children && node.children.length > 0,
			level: level,
			name: node.name,
			checked: false
		}
	}

	/*readonly treeControl = new FlatTreeControl<FlatProductNode>(
		node => node.level,
		node => node.expandable
	)*/
	readonly treeControl = new NestedTreeControl<ProductNode>(node => node.children)

	readonly treeFlattener = new MatTreeFlattener(
		this._transformer,
		node => node.level,
		node => node.expandable,
		node => node.children)

	readonly treeSource = new MatTreeNestedDataSource<ProductNode>()
	//readonly treeSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener)

	constructor() {
		this.treeSource.data = TREE_DATA
	}

	ngOnInit(): void {

	}

	hasChild(_: number, node: ProductNode) {
		return !!node.children && node.children.length > 0
		// return node.expandable
	}

	onFilterChange(event: any,node: ProductNode) {
		node.checked = event.checked
		let children: ProductNode[] = <ProductNode[]>this.treeControl.getChildren(node) ?? []

		/*if (this.treeControl.isExpandable(node))
			children = <FlatProductNode[]>*/

		for (let child of children) {
			child.checked = event.checked
		}

		console.debug("Filter was changed...", node, children)
		let tags: ProductTag[] = []

		for (let data of this.treeSource.data) {
			tags.push(...this.retrieveTags(data))
		}

		this.filterUpdated.emit(tags)
	}

	expandChildren(node: FlatProductNode) {
		this.treeControl.isExpanded(node) ? this.treeControl.collapse(node) : this.treeControl.expand(node)
	}

	private retrieveTags(node: ProductNode): ProductTag[] {
		let tags: ProductTag[] = []

		if (node.checked && !!node.tag)
			tags.push(node.tag)

		if (!node.children)
			return tags

		for (let child of node.children) {
			tags.push(...this.retrieveTags(child))
		}

		return tags
	}
}

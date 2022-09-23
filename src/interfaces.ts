/**
 * A type for discerning different product types
 */
// MAYBE: Make this an enum instead? Find a way to keep name value but make easier to store
export enum ProductType {
	EDIBLE = "e",
	FLOWER = "f",
	DISPOSABLE = "d"
}

export interface Product  {
	id: string;
	name: string;
	price: number;
	imgLocation?: string;
	tags: ProductTag[];
}

/**
 * An enum to discern between different flower types
 */
export enum StrainType {
	SATIVA = "s",
	INDICA = "i",
	HYBRID = "h"
}

export type ProductTag = ProductType | StrainType

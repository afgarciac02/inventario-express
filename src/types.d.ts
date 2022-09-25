export type role = 'admin' | 'boss' | 'seller' | 'winemaker'

export interface person {
    id?: number,
	name: string,
	phone: number,
	mail: string,
	sex: string,
	rol: role,
	address: string 
}

export interface intentory_person {
    id_person: number,
	id_inventory: number,
}

export interface inventory {
    id?: number,
	name: string
}

export interface inventory_product {
    id_inventory: number,
	id_product: number,
}

export interface product {
    id?: number,
	name: string,
	brand: string,
	quantity: string,
	price: number
}


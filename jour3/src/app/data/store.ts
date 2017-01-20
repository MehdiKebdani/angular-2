import {
	Product,
	IProduct
} from './product'
import {
	Bankable
} from './bankable'
import {
	Injectable
} from '@angular/core'

@Injectable()
export class Store {
	public readonly products: IProduct[] = []
	public readonly name: string = 'Amazing Store'

	constructor() 
	{
		this.products = [new Product("Tomate", 2), new Product("Orange", 4), new Product("Viande", 15),
						new Product("Salade", 3), new Product("Fromage", 5), new Product("Fraise", 9),
						new Product("Pain 222", 2), new Product("Sauce 222", 1), new Product("Biere", 6), ]
	}

	addProducts(products: IProduct[] = []) {
		//this.products = this.products.concat(products)
		for (var elem of products) {
			this.products.push(elem)
		}
	}

	returnProduct(id:number): IProduct
	{
		return this.products.find(x => x.id == id);
	}
	productExists(id:number): boolean
	{
		return this.returnProduct(id) != null;
	}

	getProduct(id: number, client: Bankable): IProduct {
		for (let i = 0; i != this.products.length; ++i) {
			if (this.products[i].id == id) {
				let item = this.products[i]
				if (client.canPay(item.price)) {
					client.spendMoney(item.price)
					this.products.splice(i, 1)
					return item
				} else {
					console.log('Client has no money')
					return null
				}
			}
		}
		console.log('Produit indisponible')
		return null
	}

	getProductByName(name: string, client: Bankable): IProduct {
		for (let i = 0; i != this.products.length; ++i) {
			if (this.products[i].name == name) {
				let item = this.products[i]
				if (client.canPay(item.price)) {
					client.spendMoney(item.price)
					this.products.splice(i, 1)
					return item
				} else {
					console.log('Client has no money')
					return null
				}
			}
		}
		console.log('Produit indisponible')
		return null
	}
}
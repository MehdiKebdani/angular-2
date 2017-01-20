import { Product, IProduct } from './product'
import { Bankable } from './bankable'
import { Injectable } from '@angular/core'
import { Http } from '@angular/http';

@Injectable()
export class Store
{
	readonly url: string = 'http://127.0.1:1338/item'
	public products: IProduct[] = []

	constructor(private client: Http) 
	{
		/*let productsTemp:IProduct[] = [new Product("Tomate", 2), new Product("Orange", 4), new Product("Viande", 15),
						new Product("Salade", 3), new Product("Fromage", 5), new Product("Fraise", 9),
						new Product("Pain", 2), new Product("Sauce", 1), new Product("Biere", 6), ]

		for (var product of productsTemp)
		{
			this.addProduct(product);
		}*/
	}

	addProduct(data, onSuccess = null, onError = null)
	{
		this.client.post(this.url, data).subscribe(result => {
			console.log(result)
			this.products.push(result.json())
			if (onSuccess)
				onSuccess(result)
		},
		error =>{
			if (onError)
				onError(error)
			console.log('error', error)
		})
	}

	getProducts(onSuccess = null, onError = null)
	{
		return this.client.get(this.url).subscribe(result => {
			console.log("HTTP GET");
			console.log(result)
			this.products = result.json();
			if (onSuccess)
				onSuccess(result)
		},
		error =>{
			if (onError)
				onError(error)
			console.log('error', error)
		})
	}

	returnProduct(id:number, onSuccess = null, onError = null): IProduct
	{
		return this.products.find(x => x.id == id);
	}
	productExists(id:number): boolean
	{
		return this.returnProduct(id) != null;
	}
}
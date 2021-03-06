import { Component, OnInit } from '@angular/core';
import { IProduct, Product } from '../data/product';
import { Store } from '../data/store';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent implements OnInit {

	productsTemp: IProduct[] = [];

	get NbSelected()
	{
		return this.productsTemp.length;
	}

	constructor(private store:Store)
	{
		
	}
	ngOnInit() { }
	
	elemClick(product:IProduct)
	{
		if(!this.productsTemp.find(x => x.id == product.id))
		{
			this.productsTemp.push(product);
		}
		else
		{
			this.productsTemp.splice(this.productsTemp.findIndex(x => x.id == product.id), 1);
		}
	}

	getProductClass(product:IProduct)
	{
		return this.productsTemp.find(x => x.id == product.id) ? "danger" : "";
	}

	reset()
	{
		/*this.store.products = [new Product("Tomate", 2), new Product("Orange", 4), new Product("Viande", 15),
						new Product("Salade", 3), new Product("Fromage", 5), new Product("Fraise", 9),
						new Product("Pain", 2), new Product("Sauce", 1), new Product("Biere", 6), ]*/
	}

	clear()
	{
		this.productsTemp.splice(0);
	}

	remove()
	{
		for (var i = 0; i < this.productsTemp.length; i++)
		{
			this.store.products.splice(this.store.products.findIndex(x => x.id == this.productsTemp[i].id), 1);
		}
		this.clear();
	}

	isDisabled()
	{
		return this.NbSelected == 0;
	}
}
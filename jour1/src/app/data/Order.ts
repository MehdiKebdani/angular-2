import { IOrder } from './IOrder'
import { IProduct } from './IProduct'

export class Order implements IOrder
{
	constructor(public name:string, public products:IProduct[]) {}

	getPrice(): number
	{
		var cpt: number = 0;

		for (var i = 0; i < this.products.length; i++)
		{
			cpt += this.products[i].price;
		}

		return cpt;
	}

	onServed(isReady: boolean) { }
}
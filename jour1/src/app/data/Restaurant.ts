import { Bankable } from './Bankable'
import { Store } from './Store'
import { IOrder } from './IOrder'

export class Restaurant extends Bankable
{
	constructor(public store:Store)
	{
		super(42, 1);
	}

	 get Total(): number
	 {
	 	return this._total;;
	 }

	passOrder(order: IOrder) : boolean
	{
		var totalPrice = order.getPrice();
		console.log("Total de la commande :" + totalPrice + "€");

		if(this.canPay(totalPrice))
		{
			for (var i = 0; i < order.products.length; i++)
			{
				this.store.getProduct(order.products[i].id, this);
			}

			return order.onServed(true);
		}

		console.log("Solde insuffisant !!!");
		return order.onServed(false);
	}
}


// Le restaurant vérifie si les produits de la commande sont disponibles. S'ils ne le sont pas, une commande doit être passée au store.
// Si la commande peut etre servie le prix de la commande est rajoutée au solde et la méthode onServed est appelée avec true en paramètre.
// Si la commande ne peut pas être servie onServed est appelée avec false en paramètre.
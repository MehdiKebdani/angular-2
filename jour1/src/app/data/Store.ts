import { IProduct } from './IProduct'
import { Bankable } from './Bankable'

export class Store
{
	constructor(public products:IProduct[]) 
	{

	}

	// Permet de rajouter les nouveaux produits au stock
	addProducts(newProducts: IProduct[])
	{
		this.products = newProducts;
	}


	// Retourne le produit correspondant a l'id passé en paramètre, le client est alors debité via spendMoney et le stock est mis à jour.
	// Si le produit n'existe pas, null doit être retourné
	// Si le solde du client n'est pas suffisant, null doit être retourné
	getProduct(id: string, client: Bankable): IProduct
	{
		var product = this.products.find(x => x.id == id);

		if(product == null)
			return null;

		if(!client.canPay(product.price))
			return null;

		// Débit
		client.spendMoney(product.price);
		console.log("-" + product.price + "€");

		//this.products.splice(this.products.findIndex(x => x.id == id));
	}
}
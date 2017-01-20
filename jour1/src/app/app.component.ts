import { Component } from '@angular/core';
import { Restaurant } from './data/Restaurant';
import { IProduct } from './data/IProduct';
import { Product } from './data/Product';
import { Store } from './data/Store';
import { IOrder } from './data/IOrder';
import { Order } from './data/Order';




let products:IProduct[] =
[
	new Product("1", "Tomate", 1),
	new Product("1", "Salade", 5),
	new Product("2", "Oignon", 7),
	new Product("3", "Viande", 12),
	new Product("4", "Orange", 3),
	new Product("5", "Banane", 2)
];

let store:Store = new Store(products);

let restaurant:Restaurant = new Restaurant(store);
console.log("Total : " + restaurant.Total + "€");


let order:IOrder = new Order("Commande 1", [new Product("3", "Viande", 12), new Product("3", "Viande", 12)]);
restaurant.passOrder(order);

restaurant.addMoney(50);
restaurant.passOrder(order);
console.log("Total : " + restaurant.Total + "€");



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}

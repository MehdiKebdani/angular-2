import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

import { IProduct, Product } from '../data/product';
import { Store } from '../data/store';


@Component({
  selector: 'app-input-product',
  templateUrl: './input-product.component.html',
  styleUrls: ['./input-product.component.css']
})
export class InputProductComponent implements OnInit
{
	constructor(private store:Store)
	{

	}
	ngOnInit() { }

	onClick(name: string, price:string, type:string)
	{
		this.store.addProducts([new Product(name, Number(price), type)]);
	}
}
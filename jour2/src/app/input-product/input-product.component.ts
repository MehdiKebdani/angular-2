import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

import { IProduct, Product } from '../data/product';


@Component({
  selector: 'app-input-product',
  templateUrl: './input-product.component.html',
  styleUrls: ['./input-product.component.css']
})
export class InputProductComponent implements OnInit
{
	@Output() onSubmit = new EventEmitter();

	constructor() { }
	ngOnInit() { }

	onClick(name: string, price:string, type:string)
	{
		let product:IProduct = new Product(name, Number(price), type);

		this.onSubmit.emit(product);
	}
}
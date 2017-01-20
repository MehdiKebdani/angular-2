import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router'

import { IProduct, Product } from '../data/product';
import { Store } from '../data/store';

@Component({
  selector: 'app-input-product',
  templateUrl: './input-product.component.html',
  styleUrls: ['../app.component.css']
})

export class InputProductComponent implements OnInit
{
	constructor(private store:Store, private router: Router)
	{

	}
	ngOnInit() { }

	onClick(name: string, price:string, type:string)
	{
		this.store.addProducts([new Product(name, Number(price), type)]);

  		this.router.navigate(['/']);
  	}
 }
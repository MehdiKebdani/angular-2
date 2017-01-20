import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { IProduct, Product } from '../data/product';
import { Store } from '../data/store';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['../app.component.css']
})

export class StoreComponent implements OnInit
{
	constructor(private store:Store, private router: Router)
	{
		
	}
	ngOnInit() {
	console.log('init store componenent'); }
	
	elemClick(product:IProduct)
	{		
  		this.router.navigate(['/details/', product.id]);
	}
}
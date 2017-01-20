import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { IProduct, Product } from '../data/product';
import { Store } from '../data/store';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['../app.component.css']
})

export class DetailsComponent implements OnInit
{
	product:IProduct;
	private sub: any;

	constructor(private store:Store, private route: ActivatedRoute) { }

	ngOnInit()
	{
		this.sub = this.route.params.subscribe(params => {
			this.product = this.store.returnProduct(params['id']);
		})
	}

	ngOnDestroy()
	{
		this.sub.unsubscribe();
	}
}
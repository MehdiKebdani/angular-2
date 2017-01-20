import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { IProduct, Product } from './data/product';
import { Store } from './data/store';

@Injectable()
export class ProductCheckerService implements CanActivate
{
	constructor(private router: Router, private store:Store) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean
	{
		if (route.params['id'] && this.store.productExists(Number(route.params['id'])))
			return true;

		console.log("Produit inexistant !!!");
		this.router.navigateByUrl('');
  		//this.router.navigate(['/']);
		return false;
	} 
}
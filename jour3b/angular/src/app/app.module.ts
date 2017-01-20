import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { Injectable } from '@angular/core';
import { FormComponent } from './form/form.component';
import { InputProductComponent } from './input-product/input-product.component';
import { StoreComponent } from './store/store.component';
import { EurosPipe } from './euros.pipe';

import { Store } from './data/store';
import { Restaurant } from './data/restaurant';
import { DetailsComponent } from './details/details.component';
import { ProductCheckerService } from './product-checker.service';

@Injectable()
export class Test{
	constructor(){
		console.log('Test constructed')
	}
}
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    InputProductComponent,
    StoreComponent,
    EurosPipe,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([{
      path: '', component: StoreComponent
    },{
      path: 'new', component: InputProductComponent
    },{
      path: 'details/:id', component: DetailsComponent, canActivate: [ProductCheckerService]
    }
    ])
  ],
  providers: [Test, Store, Restaurant,ProductCheckerService],
  bootstrap: [AppComponent]
})

export class AppModule {
	constructor(test: Test){
	}
}

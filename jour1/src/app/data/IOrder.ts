import { IProduct } from './IProduct'

export interface IOrder
{
	name: string
	products: IProduct[]

	getPrice(): number

	onServed(isReady: boolean)
}
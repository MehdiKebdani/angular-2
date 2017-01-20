export abstract class Bankable 
{
	//constructeur de la classe
	constructor(private _id: number, protected _total: number = 0)
	{

	}

	//vérifie le solde actuel, si la valeur est inférieure retourne true sinon false
	public canPay(value: number): boolean
	{
		return value <= this._total;
	}

	//ajoute la valeur de amount au solde actuel
	addMoney(amount: number)
	{
		this._total += amount;
		console.log("Ajout de " + amount + "€ / Nouveau total : " + this.Total + "€");
	}

	//enleve la quantité amount du sold actuel
	spendMoney(amount: number)
	{
		this._total -= amount;
	}

	//retourne l'id
	public get Id(): number
	{
		return this._id;
	}

	//Ne permet pas le changement d'id
	public set Id(newNumber: number) { }

	abstract get Total(): number
}
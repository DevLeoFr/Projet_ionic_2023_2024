export class Fruit{
    id!:string;
    nom!:string;
    description!:string;
    prix_achat!:number;
    prix_vente!:number;
    cathegory!:string;
    stock!:number;
    image!:string;

constructor(id:string,nom:string,description:string,prix_achat:number,prix_vente:number,cathegory:string,stock:number,image:string){
  this.id=id;
  this.nom=nom;
    this.description=description;
    this.prix_achat=prix_achat;
    this.prix_vente=prix_vente;
    this.cathegory=cathegory;
    this.stock=stock;
    this.image=image;
}

}



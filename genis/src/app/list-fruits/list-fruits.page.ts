import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-list-fruits',
  templateUrl: './list-fruits.page.html',
  styleUrls: ['./list-fruits.page.scss'],
})
export class ListFruitsPage implements OnInit {
  couleur: string = "";
  categorie: string ="";
  fruits : any;
  fruit : any;
  favoris : Fruit[] = [];
  categories : any;

  constructor(private route : ActivatedRoute, private router: Router, private renderer : Renderer2, private menuCtrl: MenuController, public ActionCtrl: ActionSheetController) { }

  async openActions(fruit: any) {
    const ActionSheet = await this.ActionCtrl.create({
      header: 'Actions',
      buttons: [
        {
          text: 'Ajouter aux Favoris',
          icon: 'heart',
          handler: () => {
            let fav = localStorage.getItem("favoris");
            if(fav != null){
              this.favoris = JSON.parse(fav);
              if (!this.favoris.find(item => item.id == fruit.id)) {
                this.favoris.push(fruit);
                console.log(this.favoris);
                localStorage.removeItem("favoris");
                localStorage.setItem("favoris", JSON.stringify(this.favoris));
              }
            }
          }
        }, {
          text: 'Acheter',
          icon: 'cart',
          handler: () => {
            localStorage.setItem("selected", JSON.stringify(fruit));
            this.router.navigate(['accueil/checkout']);
          }
        }, {
          text: 'Pas intéressé',
          role: 'destructive',
          icon: 'close',
          handler: () => {
          }
        }, {
          text: 'Annuler',
          icon: 'undo',
          handler: () => {
          }
        }
      ]
    });
  
    await ActionSheet.present();
    const {role} = await ActionSheet.onDidDismiss();
  }
  
  ngOnInit() {
    let categ = localStorage.getItem("categories");
    if(categ != null){
      this.categories = JSON.parse(categ);
    }
    let color = this.route.snapshot.paramMap.get('color');
    let categorie = this.route.snapshot.paramMap.get('categorie');
    if(color != null && categorie!= null){
      this.couleur = color;
      this.categorie = categorie;
      let colorValue = "var(--ion-color-"+ this.couleur + ")";
      document.documentElement.style.setProperty('--categorie', colorValue);
    }
    let fruits = localStorage.getItem("fruits");
    if(fruits != null){
      this.fruits = JSON.parse(fruits);
    }
  }
  openmenu(id : string){
    this.menuCtrl.enable(true, id);
    this.menuCtrl.open(id);
  }
}
interface Fruit{
  id: number,
  nom: string, 
  description : string, 
  categorie: string,
  prixAchat: number,
  prixVente: number,
  image: string
}
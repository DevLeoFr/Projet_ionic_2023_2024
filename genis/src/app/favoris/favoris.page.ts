import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.page.html',
  styleUrls: ['./favoris.page.scss'],
})
export class FavorisPage implements OnInit {
favory: Fruit [] = [];
  constructor() { }

  ngOnInit() {
    let fav = localStorage.getItem("favoris");
    if(fav != null){
      this.favory = JSON.parse(fav);
    }
  }

  refreshData() {
    let fav = localStorage.getItem("favoris");
    if (fav != null) {
      this.favory = JSON.parse(fav);
    }
  }

  ionViewDidEnter() {
    this.refreshData();
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
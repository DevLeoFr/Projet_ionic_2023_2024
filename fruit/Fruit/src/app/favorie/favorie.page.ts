import { Component, OnInit } from '@angular/core';
import { Fruit } from '../accueil/fruit';

@Component({
  selector: 'app-favorie',
  templateUrl: './favorie.page.html',
  styleUrls: ['./favorie.page.scss'],
})
export class FavoriePage implements OnInit {
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
    // interface Fruit{
    //   id: number,
    //   nom: string,
    //   description : string,
    //   categorie: string,
    //   prixAchat: number,
    //   prixVente: number,
    //   image: string
    // }

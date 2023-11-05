import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  fruit: any;
   qnte : number = 1; total : number = 0;
  //  fruit: any

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    let et = localStorage.getItem("frui");
    if(et != null){
      this.fruit = JSON.parse(et);
    }

    // let fruit = localStorage.getItem("selected");
    // if(fruit != null){
    //   this.fruit = JSON.parse(fruit);
    //   this.total = this.qnte * this.fruit.prixAchat;
    // }
  }
  add_qnt(){
    if(this.qnte < this.fruit.stock){
      this.qnte += 1;
      this.total = this.qnte * this.fruit.prix_achat;
      this.refreshPage();
    }
  }

  reduice_qnt(){
    if(this.qnte > 1){
      this.qnte -= 1;
      this.total = this.qnte * this.fruit.prix_achat;
      this.refreshPage();
    }
  }
refreshPage() {
  this.navCtrl.navigateRoot('home/details');
}
}

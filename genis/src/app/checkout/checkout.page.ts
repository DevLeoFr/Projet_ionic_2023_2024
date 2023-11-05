import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
fruit : any; qnte : number = 1; total : number = 0;
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    let fruit = localStorage.getItem("selected");
    if(fruit != null){
      this.fruit = JSON.parse(fruit);
      this.total = this.qnte * this.fruit.prixAchat;
    }
  }
  add_qnt(){
    if(this.qnte < this.fruit.stock){
      this.qnte += 1;
      this.total = this.qnte * this.fruit.prixAchat;
      this.refreshPage();
    }
  }

  reduice_qnt(){
    if(this.qnte > 1){
      this.qnte -= 1;
      this.total = this.qnte * this.fruit.prixAchat;
      this.refreshPage();
    }
  }
refreshPage() {
  this.navCtrl.navigateRoot('accueil/checkout');
}

}

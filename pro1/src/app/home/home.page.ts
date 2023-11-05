import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  color!:string; 
  listClients: any;
  take!: number;
  capacity = 10;

  constructor(private menuCtrl: MenuController) {}

  openmenu(chemin:string){
    this.menuCtrl.enable(true, chemin);
    this.menuCtrl.open(chemin);
  }


  ngOnInit() {
    
  }


}

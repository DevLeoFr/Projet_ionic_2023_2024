import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'accueil',
        loadChildren: () => import('../accueil/accueil.module').then( m => m.AccueilPageModule)
      },
      {
        path: '',
        redirectTo: 'accueil',
        pathMatch: 'full'
      },
      {
        path: 'favoris',
        loadChildren: () => import('../favoris/favoris.module').then( m => m.FavorisPageModule)
      },
      {
        path: 'accueil/checkout',
        loadChildren: () => import('../checkout/checkout.module').then( m => m.CheckoutPageModule)
      },
      {
        path: 'a-propos',
        loadChildren: () => import('../a-propos/a-propos.module').then( m => m.AProposPageModule)
      },
      {
        path: 'accueil/list/:color/:categorie',
        loadChildren: () => import('../list-fruits/list-fruits.module').then( m => m.ListFruitsPageModule)
      },
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

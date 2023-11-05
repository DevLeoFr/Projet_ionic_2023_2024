import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      { path: 'accueil', loadChildren: () => import('../accueil/accueil.module').then(m => m.AccueilPageModule) },
      { path: 'accueil/accueil', loadChildren: () => import('../accueil/accueil.module').then(m => m.AccueilPageModule) },
      // { path: 'checout', loadChildren: () => import('../checout/checout.module').then(m => m.ChecoutPageModule) },

      { path: 'accueil/apropos', loadChildren: () => import('../apropos/apropos.module').then(m => m.AproposPageModule) },
      { path: 'apropos', loadChildren: () => import('../apropos/apropos.module').then(m => m.AproposPageModule) },
      { path: 'accueil/category/:id/:color', loadChildren: () => import('../category/category.module').then(m => m.CategoryPageModule) },
      { path: 'accueil/category/:id/:color/cathegory/:id/:color', loadChildren: () => import('../category/category.module').then(m => m.CategoryPageModule) },



      { path: 'favorie', loadChildren: () => import('../favorie/favorie.module').then(m => m.FavoriePageModule) },

      { path: 'accueil/category/:id/:color/details', loadChildren: () => import('../details/details.module').then(m => m.DetailsPageModule) },
      // { path: 'accueil/preference', loadChildren: () => import('../preference/preference.module').then(m => m.PreferencePageModule) },
      // { path: 'accueil/profile', loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule) },
      { path: 'details', loadChildren: () => import('../details/details.module').then(m => m.DetailsPageModule) },

      { path: '', redirectTo: 'home/accueil', pathMatch: 'full' }
    ],
  },
  {
    path: '',
    redirectTo: '/home/accueil',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

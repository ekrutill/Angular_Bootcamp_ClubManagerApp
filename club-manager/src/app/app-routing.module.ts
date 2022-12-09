import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },

  //lazy-loading:
  {
    path: 'players',
    loadChildren: () =>
      import('./components/players/players.module').then(
        (m) => m.PlayersModule
      ),
  },
  {
    path: 'wage',
    loadChildren: () =>
      import('./components/wages/wages.module').then((m) => m.WagesModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, 
      // { preloadingStrategy: PreloadAllModules }
      ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}



// {path: 'players', component: PlayersComponent},
// {path: 'details/:id', component: PlayerDetailsComponent},
// {path: 'add/:id', component: AddPlayerComponent},
// {path: 'wage', component: WagesComponent},

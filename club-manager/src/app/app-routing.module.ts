import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },

  // this lazy-loaded paths only works from the 'home' root:
  {
    path: 'home',
    loadChildren: () =>
      import('./players/players.module').then(
        (m) => m.PlayersModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./wages/wages.module').then((m) => m.WagesModule),
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, 
      // { preloadingStrategy: PreloadAllModules } - just an option but the resolver hasn't been created.
      ),
  ],
  exports: [RouterModule],
  providers:[],
})
export class AppRoutingModule {}


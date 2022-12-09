import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PlayersModule } from './components/players/players.module';
import { WagesModule } from './components/wages/wages.module';
import { CoreModule } from './core.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomePageComponent } from './components/home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomePageComponent,  
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PlayersModule,
    WagesModule,
    CoreModule
  ],
  
  // the player.service moved to the core.module

  // providers: [
  //   PlayerService
  // ],

  bootstrap: [AppComponent]
})
export class AppModule { }

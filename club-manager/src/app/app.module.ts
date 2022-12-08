import { PlayersModule } from './components/players/players.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './components/players/players.component';
import { WagesComponent } from './components/wages/wages.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddPlayerComponent } from './components/players/add-player/add-player.component';
import { PlayerDetailsComponent } from './components/players/player-details/player-details.component';
import { WageInfoComponent } from './components/wages/wage-info/wage-info.component';
import { WageTeamsComponent } from './components/wages/wage-teams/wage-teams.component';
import { PlayerListComponent } from './components/players/player-list/player-list.component';
import { WagesModule } from './components/wages/wages.module';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    WagesComponent,
    MenuComponent,
    HomePageComponent,
    AddPlayerComponent,
    PlayerDetailsComponent,
    WageInfoComponent,
    WageTeamsComponent,
    PlayerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PlayersModule,
    WagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

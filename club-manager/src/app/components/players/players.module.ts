import { PlayerRoutingModule } from './player-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PlayersComponent } from './players.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { AddPlayerComponent } from './add-player/add-player.component';


@NgModule({
  declarations: [
    PlayersComponent,
    PlayerListComponent,
    PlayerDetailsComponent,
    AddPlayerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PlayerRoutingModule,
    
// the routes moved to the player-routing.module as the children of PlayerComponent:

// RouterModule.forChild([ //forChild vs forRoot
// {path: 'players', component: PlayersComponent},
// {path: 'details/:id', component: PlayerDetailsComponent},
// {path: 'add/:id', component: AddPlayerComponent},
// ])

  ],
  exports: [
    PlayersComponent,
    PlayerListComponent,
    PlayerDetailsComponent,
    AddPlayerComponent,
    ReactiveFormsModule
  ]
})
export class PlayersModule { }

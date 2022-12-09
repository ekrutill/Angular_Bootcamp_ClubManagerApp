import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PlayersComponent } from './players.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PlayersComponent,
    PlayerListComponent,
    PlayerDetailsComponent,
    AddPlayerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
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

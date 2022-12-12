import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { PlayersComponent } from './players.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { AddPlayerComponent } from './add-player/add-player.component';

const playerRoutes: Routes = [
    { path: 'players',  component: PlayersComponent, },
    { path: 'details/:id', component: PlayerDetailsComponent},
    { path: 'add/:id', component: AddPlayerComponent},
];

@NgModule({
    imports: [RouterModule.forChild(playerRoutes)],
    exports: [RouterModule]
})
export class PlayerRoutingModule{}


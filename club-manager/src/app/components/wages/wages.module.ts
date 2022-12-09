import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WagesComponent } from './wages.component';
import { WageInfoComponent } from './wage-info/wage-info.component';
import { WageTeamsComponent } from './wage-teams/wage-teams.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayersModule } from '../players/players.module';



@NgModule({
  declarations: [
    WagesComponent,
    WageInfoComponent,
    WageTeamsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PlayersModule
  ],
  exports: [
    WagesComponent,
    WageInfoComponent,
    WageTeamsComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class WagesModule { }

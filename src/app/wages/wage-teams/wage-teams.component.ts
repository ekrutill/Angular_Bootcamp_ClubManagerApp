import { Component } from '@angular/core';
import { PlayerService } from '../../players/player.service';

@Component({
  selector: 'app-wage-teams',
  templateUrl: './wage-teams.component.html',
  styleUrls: ['./wage-teams.component.scss']
})
export class WageTeamsComponent {

  separateByTeams: boolean = true;
  playerTeams: any[];
  wages?: number[];
 
  constructor(private playerService: PlayerService) {
    this.playerTeams = this.playerService.separatePlayersByTeam();
  }

  getWage(team: any) {
    this.wages = this.playerService.separatePlayersByWage(team);
    return this.wages;
  }


}

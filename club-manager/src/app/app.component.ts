import { Player } from './models/player-interface';
import { Component, OnInit } from '@angular/core';
import { PlayerService } from './services/player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'club-manager';

  mockPlayers: Player[];
  players!: Player[];

  constructor(public playerService: PlayerService){
    this.mockPlayers = this.playerService.mockPlayers;
  }

  // mockPlayers are visible if the local storage is empty:

  ngOnInit(): void {
    this.players = this.playerService.getPlayersFromLS("players");
    if(this.players.length == 0){
      this.mockPlayers.forEach(player => this.players.push(player));

      this.playerService.savePlayersToLS("players", this.players)
    }
  }


}

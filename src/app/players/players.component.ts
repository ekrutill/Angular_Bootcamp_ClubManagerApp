import { Player } from './player-interface';
import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  players!: Player[];
  mockPlayers!: Player[];

  constructor(private playerService: PlayerService){
    this.mockPlayers = this.playerService.mockPlayers;
  }
  
  onMockProcess() {
    if (this.players.length == 0) {
      this.mockPlayers.forEach(player => this.players.push(player))
    }
    else {
      this.playerService.savePlayersToLS("players", this.players);
    }
  }

  ngOnInit(): void {
    this.players = this.playerService.getPlayersFromLS("players");
    this.onMockProcess();
  }
  

}

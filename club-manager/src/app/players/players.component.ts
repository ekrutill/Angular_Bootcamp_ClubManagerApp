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

  constructor(private playerService: PlayerService){
    this.players = this.playerService.getPlayersFromLS("players")
  }

  ngOnInit(): void {
    
  }
  

}
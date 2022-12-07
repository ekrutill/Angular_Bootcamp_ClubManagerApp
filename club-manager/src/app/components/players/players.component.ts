import { Player } from './../../models/player-interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

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

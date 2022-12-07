import { Player } from './../../../models/player-interface';
import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent {

  @Input() playerList!: Player[];
  @Input() separateByTeams?: boolean;

  constructor(public playerService: PlayerService, private router: Router, private route: ActivatedRoute) {
   }


  deletePlayer(player: Player){
    this.playerService.deletePlayer(player);
  }

}

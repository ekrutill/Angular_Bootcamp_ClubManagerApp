import { Player } from '../player-interface';
import { Component, Input } from '@angular/core';
import { PlayerService } from '../player.service';
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

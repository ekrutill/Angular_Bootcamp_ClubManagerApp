import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../player-interface';
import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})
export class PlayerDetailsComponent implements OnInit {

  players!: Player;
  currentId!: number

 
  constructor(private playerService: PlayerService, private router: Router, private activatedRoute: ActivatedRoute, ) { 
    this.currentId = activatedRoute.snapshot.params['id'];

    
  }

  ngOnInit(): void {
    this.players = this.playerService.getPlayersFromLSByID(this.currentId);
  }

  deletePlayer(player: Player){
    this.playerService.deletePlayer(player);
    this.router.navigate(['players']);

  }


}

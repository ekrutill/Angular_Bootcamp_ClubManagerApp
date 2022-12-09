
import { PlayerService } from '../../components/players/player.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  players = this.playerService.players;
  
  constructor(public playerService: PlayerService) { }

  ngOnInit(): void {
  }

}

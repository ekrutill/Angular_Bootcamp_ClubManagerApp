import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-wage-info',
  templateUrl: './wage-info.component.html',
  styleUrls: ['./wage-info.component.scss']
})
export class WageInfoComponent implements OnInit {

  currentMoney: number = 0;
  monthlyIncome: number =0;
  sumOfWage!: number; 

  constructor(private playerService: PlayerService,) { 
    this.sumOfWage = this.playerService.wageTotal() - this.playerService.wageTotal()*2;
    
  }

  ngOnInit(): void {
  }
 


}

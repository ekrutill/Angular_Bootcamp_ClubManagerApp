import { Component } from '@angular/core';
import { PlayerService } from '../../players/player.service';

@Component({
  selector: 'app-wage-info',
  templateUrl: './wage-info.component.html',
  styleUrls: ['./wage-info.component.scss']
})
export class WageInfoComponent {

  currentMoney: number = 0;
  monthlyIncome: number = 0;
  sumOfWage!: number; 

  constructor(private playerService: PlayerService,) { 
    this.sumOfWage = this.playerService.wageTotal() - this.playerService.wageTotal()*2;

  }

  get getExpectedMoney(): number {
    let result = (this.sumOfWage - this.currentMoney) + this.monthlyIncome
    return result
  }
  
  get getMoneyStability(): number{
    let result = (this.sumOfWage - this.currentMoney) + this.monthlyIncome
    return result % 12 + 1
  }



}

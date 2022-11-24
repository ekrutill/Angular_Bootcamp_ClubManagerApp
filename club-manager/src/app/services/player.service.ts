import { Injectable } from '@angular/core';
import { Player } from '../models/player-interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  players: Player[] = this.getPlayersFromLS("players");

  //functions wich connected to localStorage purposes:

  setItemToLS(){
    localStorage.setItem('players', JSON.stringify(this.players))
  }

  public getPlayersFromLS(key: string){
    this.players = JSON.parse(localStorage.getItem(key) || '[]');
    return this.players;
  }


  public getPlayersFromLSByID(id: number){
    let index = this.players.findIndex(x=>x.id == id);
    return this.players[index];
  }

  public savePlayerToLS(player: Player){
    let index = this.players.findIndex(x=>x.id == player.id);
    this.players.splice(index,1, player);
    // this.players[index] = player;
    this.setItemToLS();
   }

  public savePlayersToLS(key: any, players: Player[]){
    localStorage.setItem(key, JSON.stringify(players));
   }

  public addingNewPlayer(player: Player){
    player.id = this.players.length + 1;
    this.players.push(player);
    this.setItemToLS();
  }

  public deletePlayer(player:Player){
    let index = this.players.findIndex(x=>x.id == player.id);
    this.players.splice(index, 1);
    this.setItemToLS();
  }


  //calculators:

  public wageTotal(): number{
    let total = this.players.reduce((a, b)  =>{
      return a + b.wage;
    }, 0);
    return total
  }

  public highestWage(){
    let playerName = this.players.reduce((a,b) => (a.wage > b.wage) ? a : b);
    return playerName.wage;
  }

  public highestPayedPlayersName() {
    let playerName = this.players.reduce((a,b) => (a.wage > b.wage) ? a : b);
    return playerName.name;
    }
  
  
  separatePlayersByTeams(){
      const groupBy = (input:any, key:any) => {

        return input.reduce((acc: { [x: string]: any[]; }, currentValue: { [x: string]: any; }) => {
          let groupKey = currentValue[key];
          if (!acc[groupKey]) {
            acc[groupKey] = [];
          }
          acc[groupKey].push(currentValue);
          return acc;
        }, {});
      };
    }
}

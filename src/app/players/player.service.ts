import { Injectable } from '@angular/core';
import { Player } from './player-interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  players: Player[] = this.getPlayersFromLS("players");
  mockPlayers: Player[]

  constructor(){
    this.mockPlayers = [
      {id:1,
      name:'Phil Collins',
      shirtNumber:44,
      team: 'Badminton',
      age: 26,
      wage: 300,
      endOfContract: new Date('2023-05-05')},
      {id:2,
        name:'Kat Edison',
        shirtNumber:38,
        team: 'Football',
        age: 25,
        wage: 310,
        endOfContract: new Date('2023-05-03')},
        {id:3,
          name:'Lucy Chan',
          shirtNumber:36,
          team: 'Badminton',
          age: 22,
          wage: 320,
          endOfContract: new Date('2023-05-04')},
      ]
    
  }

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
    // adding 1 player to the maximum id of the object:
    const ids = this.players.map(obj =>obj.id);
    const maxID = Math.max(...ids);
    player.id = maxID + 1;

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
  

  public separatePlayersByTeam(){
    // another possible solution:

      // const groupBy = (input:any, key:any) => {

      //   return input.reduce((acc: { [x: string]: any[]; }, currentValue: { [x: string]: any; }) => {
      //     let groupKey = currentValue[key];
      //     if (!acc[groupKey]) {
      //       acc[groupKey] = [];
      //     }
      //     acc[groupKey].push(currentValue);
      //     return acc;
      //   }, {});
      // };
      // return groupBy;

      return this.players.reduce((separatedGroups, player) => {
      
        const key = player.team as keyof Player;

        separatedGroups[key] = separatedGroups[key] || [];
        separatedGroups[key].push(player);
            return separatedGroups;
        }, 
        Object.create(null));

    }

  public separatePlayersByWage(players: any) {
      return players.reduce((a: any, b: { wage: any; }) => a + b.wage, 0);
    }
}

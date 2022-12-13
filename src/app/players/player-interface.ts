export class Player {
    static [key:string]: any;
    public id:number;
    public name: string;
    public shirtNumber: number;
    public team: string;
    public age: number;
    public wage: number;
    public endOfContract: Date ;

    constructor(){
        this.id = 0;
        this.name = '';
        this.shirtNumber = 0;
        this.team = '';
        this.age = 0;
        this.wage = 0;
        this.endOfContract = new Date();
    }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  squares:any[] = Array(9);
  isNext : boolean ;
  winner : string | null ;
  get player() {
    return this.isNext ? 'X':'O'
  }

  playNext(i:number):void{
   
    if(!this.squares[i] && !this.winner){
      this.squares.splice(i,1,this.player)
      console.log(this.squares)
      this.isNext = !this.isNext
    }

    this.winner  = this.winGame(this.squares)
    let empty = this.squares.filter(val => val === null).length ;
    
    if(this.winner){
      this.winner = this.winner + " wins"
    }
    if(empty == 0 && !this.winner){
      this.winner = "Tie"
    }
  }


  winGame = (squares:any[]):string|null => {
    const winComb = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winComb.length; i++) {
      const [a, b, c] = winComb[i];
      if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  };

  replay():void{
    this.ngOnInit()
  }

  ngOnInit(): void {
      this.squares.fill(null)
      this.isNext = true;
      this.winner = null
  }
}

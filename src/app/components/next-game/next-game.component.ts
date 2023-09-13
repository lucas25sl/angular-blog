import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-next-game',
  templateUrl: './next-game.component.html',
  styleUrls: ['./next-game.component.css']
})
export class NextGameComponent implements OnInit {

  @Input()
  photoHome:string=""
  @Input()
  photoAway:string=""
  @Input()
  teamHome:string=""
  @Input()
  teamAway:string=""
  @Input()
  gameCup:string=""
  @Input()
  gameDate:string=""


  constructor() { }

  ngOnInit(): void {
  }

}

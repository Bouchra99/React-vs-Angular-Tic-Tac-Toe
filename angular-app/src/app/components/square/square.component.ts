import { Component, Input , Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent  {
  @Input() value:string;
  @Output() handleClick:EventEmitter<any> = new EventEmitter();

  onClick():void{
    this.handleClick.emit()
  }
}

import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-data-passing',
  templateUrl: './data-passing.component.html',
  styleUrls: ['./data-passing.component.css']
})
export class DataPassingComponent implements OnInit {

  @Input() passingdata;
  @Output() parentFunctionInChild :EventEmitter<any>=new EventEmitter()

  constructor() { }

  ngOnInit() {
    this.sendData();
  }

  sendData(){
    let obj={name:'Dhoni',type:'WK'}
    this.parentFunctionInChild.emit(obj);
  }

}
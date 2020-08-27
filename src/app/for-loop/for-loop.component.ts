import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css']
})
export class ForLoopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  names=['renju','manju','kunju'];

  players=[{
    name:'dhoni',
    type:'wk'
  },{
    name:'zaheer khan',
    type:'bowler'
  },]

}
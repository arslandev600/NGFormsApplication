import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnChanges {

  constructor() { }
  count:number = 0;
  color ='blue';

  ngOnChanges(changes: SimpleChanges): void {
    this.count++
    console.log('called No:'+this.count);
  }

  ngDoCheck(){
    console.log('Do Check No:'+this.count);
    
  }
  ngOnInit(): void {
  }

  saved(){
    alert('yOu cliked on saved');
  }
  strValu = 'hello';
  changeValue(){
  this.strValu = 'hello world';
  }
}

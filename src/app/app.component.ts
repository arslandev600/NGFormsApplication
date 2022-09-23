import { AfterViewInit, Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { NavComponent } from './Dashboard/navbar/nav.component';
import { CommonService } from './_services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {
  title = 'my-app';
  @ViewChildren(NavComponent) child:any;

 
  /**
   *
   */
  userName:string ='';
  constructor(private service:CommonService) {
    this.service.userName.subscribe(x =>{
      this.userName = x;
    })
  }
  ChangeUserName(){
    this.service.changUserName(this.userName);
  }

  childValue:any;
  ngAfterViewInit(): void {
    this.childValue =  this.child;
  }

  subject$ = new ReplaySubject();
  ngOnInit(): void {

    this.subject$.next("1");
    this.subject$.next("2");
 
    this.subject$.subscribe(
      val => console.log("Sub1 " + val),
      err => console.error("Sub1 " + err),
      () => console.log("Sub1 Complete")
    );


    this.subject$.next("3");
    this.subject$.next("4");
    

    this.subject$.subscribe(
      val => console.log("Sub2 " + val),
      err => console.error("Sub2 " + err),
      () => console.log("Sub2 Complete")
    );

  }


}

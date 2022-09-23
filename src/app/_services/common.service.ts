import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  _userName : BehaviorSubject<string> = new BehaviorSubject<string>('unknown');
  readonly userName  : Observable<string> = this._userName.asObservable();
  constructor() { }

  //Update username 
  changUserName(value:string){
    this._userName.next(value);
  }
}

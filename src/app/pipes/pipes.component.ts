
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TitlePipe } from './_custom/custom.pipe';

@Component({
    selector: 'app-pipes',
    templateUrl: 'pipes.component.html'
})

export class PipesComponent implements OnInit {
    constructor(private pipe:TitlePipe) { }

    data :Person = {
        firstname: 'usman',
        lastname: 'haider',
        amount:500,
        dateofbirth :'2-2-2021'
    };
     obsValue :any;
    ngOnInit() {
        //Using pipes in component
        this.data.lastname = this.pipe.transform(this.data.lastname,'M');


        this. obsValue = new Observable((observer) => {
                console.log("Observable starts")
                setTimeout(() => { observer.next("90000") }, 1000);
              })
            
     }
}

export interface Person{
    firstname: string,
    lastname: string,
    dateofbirth:string,
    amount:number,
    
}
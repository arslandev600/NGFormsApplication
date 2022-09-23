import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { CommonService } from "src/app/_services/common.service";

@Component({
    selector:'app-nav',
    templateUrl:'./nav.component.html',
    styleUrls :['./nav.component.css']
})
export class NavComponent implements OnInit{
@Input() value1:string = '';
@Input() value2:string = '';

name = 'hello';

/**
 *
 */
constructor(private service: CommonService) {

    
}
userName = '';
ngOnInit(): void {
    this.service.userName.subscribe(x => {
        this.userName  = x;
    })
}
}
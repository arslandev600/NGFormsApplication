import { Component, Input, OnInit } from "@angular/core";
import { CommonService } from "src/app/_services/common.service";

@Component({
    selector: 'app-footer',
    template: '<h1 style="background-color:black;color:white">User Name is  {{userName}}</h1>'
})
export class FooterComponent implements OnInit {

    /**
     *
     */

    constructor(private service:CommonService) {

    }
    userName = '';
    ngOnInit(): void {
        this.service.userName.subscribe(x => {
            this.userName  = x;
        })
    }

}
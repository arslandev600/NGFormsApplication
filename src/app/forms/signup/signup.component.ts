import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  ngOnInit(): void {
  }

  lastname = '';
  value:any;
  submitForm(form: NgForm){
    this.value = form.value;
  }
  selectedImage:any;
  constructor(private element: ElementRef) {}

  changeListner(event:any) {
      var reader = new FileReader();
      var image = this.element.nativeElement.querySelector('.image');

      reader.onload = function(e) {
          var src = e.target?.result;
          image.src = src;
      };

      reader.readAsDataURL(event.target.files[0]);
  }

  countryList:country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];
}

export class country {
  id:string;
  name:string;
 
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}
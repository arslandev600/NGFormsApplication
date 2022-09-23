import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[mclass]'
})
export class MclassDirective  implements OnInit,OnChanges{

  @Input() mclass: string ='';
  constructor(private elementRef: ElementRef) 
  {

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('On Changes Called');
  
  }
  ngOnInit(): void {
    this.elementRef.nativeElement.classList.add(this.mclass)
  }

}

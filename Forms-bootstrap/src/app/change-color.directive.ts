import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(private _element: ElementRef) {
    this._element.nativeElement.style.color = "greenyellow";
   }

   @HostListener("mouseenter") mouseEnter(){
    this.changeColor("white");
   }
   @HostListener("mouseleave") mouseLeave(){
    this.changeColor("greenyellow");
   }

   changeColor(color:any){
    this._element.nativeElement.style.color=color;
   }

}

import {Directive, ElementRef, HostListener, Input} from '@angular/core';
@Directive({
  standalone: true,
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() appHighlight :string = ''
  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.backgroundColor = 'yellow';
  }
  @HostListener('mouseenter') onMouseEneter() {
    this.highlight(this.appHighlight || 'yellow')
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('')
  }

  highlight(color:string){
    this.el.nativeElement.style.backgroundColor = color
  }
}
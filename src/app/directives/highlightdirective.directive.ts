import { Directive,ElementRef ,HostListener} from '@angular/core';

@Directive({
  selector: '[appHgts]'
})
export class HighlightdirectiveDirective {

  constructor(private el: ElementRef) { }
    
    @HostListener('mouseenter') onMouseEnter() {
      this.highlight('Gold  ');
      this.textcolor('GhostWhite ')      
    }
   
    @HostListener('mouseleave') onMouseLeave() {
      this.highlight(null);
      this.textcolor(null);
    }
   
    private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
    }

    private textcolor(color: string) {
      this.el.nativeElement.style.color = color;
    }
  }



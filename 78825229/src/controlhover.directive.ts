import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appControlhover]',
  standalone: true,
})
export class ControlhoverDirective implements OnChanges {
  @Input() defaultColor!: string;
  @Input() highlightColor!: string;
  @Input() isValid: boolean = true;
  @Input() btnhovertxtcolor!: string;
  @HostBinding('style.backgroundColor') backgroundColor!: string;
  //@HostBinding('style.color') btnhovercolor!: string;
  @HostBinding('style.color') btncolor!: string;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    //throw new Error('Method not implemented.');
  }

  ngOnInit() {
    if (this.highlightColor != 'none') {
      this.backgroundColor = this.defaultColor;
    } else if (this.highlightColor == 'none') {
      this.backgroundColor = this.defaultColor;
    } else {
      this.backgroundColor = this.defaultColor;
    }
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    if (this.highlightColor != 'none') {
      this.backgroundColor = this.highlightColor;
      //this.btncolor = '#28e979';
      this.btncolor = this.btnhovertxtcolor;
    } else if (this.highlightColor == 'none') {
      this.backgroundColor = this.defaultColor;
      this.btncolor = 'white';
    } else {
      this.backgroundColor = this.defaultColor;
      this.btncolor = 'white';
    }
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    if (this.highlightColor != 'none') {
      this.backgroundColor = this.defaultColor;
      this.btncolor = 'black';
    } else if (this.highlightColor == 'none') {
      this.backgroundColor = this.defaultColor;
      this.btncolor = 'black';
    } else {
      this.backgroundColor = this.defaultColor;
      this.btncolor = 'black';
    }
  }
}

import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[customclass]'
})
// A custom attribute directive
export class CustomclassDirective {

// ElementRef is how ng supplies the element labeled with this directive. It's
// a reference to the element to which we apply the directive - ie, div, span, etc.
  constructor(private element: ElementRef) {}

  // The setter sets the color every time it is called; gets around 'undefined'
  // properties without using setTimeout. As soon as ng sees this directive
  // in the template, it instantiates it, but the color property hasn't been set yet.
  // This takes care of that, setting it after the fact.
  // 'customclass' in parens allows us to use [customclass] in template rather than
  // customclass [backgroundColor]
  // @Input('customclass') set backgroundColor(color: string) {
  //   this.element.nativeElement.style.backgroundColor = color;
  // }

  // This basically does what ngClass does
  @Input('customclass') set classNames(classObj: any) {
    for (const key in classObj) {
      if (classObj[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }

}

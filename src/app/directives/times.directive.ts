import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
// A custom structural directive
export class TimesDirective {

  // ViewContainerRef is a reference to the container to which we apply this
  // directive - ie, a div, h1, etc. Differs from elementRef in that it allows
  // us to add elements inside, etc.

  // TemplateRef is a ref to the elements inside the VCRef
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  @Input('appTimes') set render(times: number) {
    this.viewContainer.clear();

    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        // this is the context object, where we can add various props
        index: i
      });
    }
  }

}

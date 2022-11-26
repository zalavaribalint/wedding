import { AfterViewInit, Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appElementVisible]',
})
export class ElementVisibleDirective implements AfterViewInit {
  constructor(private vcRef: ViewContainerRef, private tplRef: TemplateRef<any>) {}

  isRendered = false;

  ngAfterViewInit() {
    const observedElement = this.vcRef.element.nativeElement.parentElement;

    const observer = new IntersectionObserver(([entry]) => {
      this.renderContents(entry.isIntersecting);
    });
    observer.observe(observedElement);
  }

  renderContents(isIntersecting: boolean) {
    if (this.isRendered) {
      return;
    }
    this.vcRef.clear();

    if (isIntersecting) {
      this.isRendered = true;
      this.vcRef.createEmbeddedView(this.tplRef);
    }
  }
}

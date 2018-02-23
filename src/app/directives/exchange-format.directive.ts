import { Directive, HostListener, ElementRef, OnInit } from '@angular/core';
import { MyExchangePipe } from '../pipes/exchange.pipe';

@Directive({ selector: '[myExchangeFormat]' })
export class ExchangeDirective implements OnInit {

  private el: any;

  constructor(
    private elementRef: ElementRef,
    private exchangePipe: MyExchangePipe
  ) {
    this.el = this.elementRef.nativeElement;

  }

  public ngOnInit() {
    this.el.value = this.exchangePipe.transform(this.el.value);
  }

  @HostListener('focus', ['$event.target.value'])
  private onFocus(value) {
    this.el.value = this.exchangePipe.parse(value);
    this.el.select();
  }

  @HostListener('blur', ['$event.target.value'])
  private onBlur(value) {
    this.el.value = this.exchangePipe.transform(value);
  }

}
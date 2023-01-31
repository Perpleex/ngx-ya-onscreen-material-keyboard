import { Directive, ElementRef, EventEmitter, HostListener, Input, Optional, Output, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatKeyboardService } from '../services/keyboard.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/keyboard.service";
import * as i2 from "@angular/forms";
export class MatKeyboardDirective {
    constructor(_elementRef, _keyboardService, _control) {
        this._elementRef = _elementRef;
        this._keyboardService = _keyboardService;
        this._control = _control;
        this.enterClick = new EventEmitter();
        this.capsClick = new EventEmitter();
        this.altClick = new EventEmitter();
        this.shiftClick = new EventEmitter();
    }
    ngOnDestroy() {
        this.hideKeyboard();
    }
    showKeyboard() {
        this._keyboardRef = this._keyboardService.open(this.matKeyboard, {
            darkTheme: this.darkTheme,
            duration: this.duration,
            isDebug: this.isDebug
        });
        // reference the input element
        this._keyboardRef.instance.setInputInstance(this._elementRef);
        // set control if given, cast to smth. non-abstract
        if (this._control) {
            this._keyboardRef.instance.attachControl(this._control.control);
        }
        // connect outputs
        this._keyboardRef.instance.enterClick.subscribe(() => this.enterClick.next());
        this._keyboardRef.instance.capsClick.subscribe(() => this.capsClick.next());
        this._keyboardRef.instance.altClick.subscribe(() => this.altClick.next());
        this._keyboardRef.instance.shiftClick.subscribe(() => this.shiftClick.next());
    }
    hideKeyboard() {
        if (this._keyboardRef) {
            this._keyboardRef.dismiss();
        }
    }
}
MatKeyboardDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MatKeyboardDirective, deps: [{ token: i0.ElementRef }, { token: i1.MatKeyboardService }, { token: i2.NgControl, optional: true, self: true }], target: i0.ɵɵFactoryTarget.Directive });
MatKeyboardDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.12", type: MatKeyboardDirective, selector: "input[matKeyboard], textarea[matKeyboard]", inputs: { matKeyboard: "matKeyboard", darkTheme: "darkTheme", duration: "duration", isDebug: "isDebug" }, outputs: { enterClick: "enterClick", capsClick: "capsClick", altClick: "altClick", shiftClick: "shiftClick" }, host: { listeners: { "focus": "showKeyboard($event)", "blur": "hideKeyboard($event)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MatKeyboardDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[matKeyboard], textarea[matKeyboard]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.MatKeyboardService }, { type: i2.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }]; }, propDecorators: { matKeyboard: [{
                type: Input
            }], darkTheme: [{
                type: Input
            }], duration: [{
                type: Input
            }], isDebug: [{
                type: Input
            }], enterClick: [{
                type: Output
            }], capsClick: [{
                type: Output
            }], altClick: [{
                type: Output
            }], shiftClick: [{
                type: Output
            }], showKeyboard: [{
                type: HostListener,
                args: ['focus', ['$event']]
            }], hideKeyboard: [{
                type: HostListener,
                args: ['blur', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvcmUvc3JjL2RpcmVjdGl2ZXMva2V5Ym9hcmQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVILE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUkzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7OztBQUtsRSxNQUFNLE9BQU8sb0JBQW9CO0lBb0IvQixZQUFvQixXQUF1QixFQUN2QixnQkFBb0MsRUFDaEIsUUFBb0I7UUFGeEMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFvQjtRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFZO1FBVmxELGVBQVUsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUUxRCxjQUFTLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7UUFFekQsYUFBUSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBRXhELGVBQVUsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUlMLENBQUM7SUFFaEUsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBR00sWUFBWTtRQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUMvRCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDLENBQUM7UUFFSCw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTlELG1EQUFtRDtRQUNuRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDakU7UUFFRCxrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUdNLFlBQVk7UUFDakIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDN0I7SUFDSCxDQUFDOztrSEF4RFUsb0JBQW9CO3NHQUFwQixvQkFBb0I7NEZBQXBCLG9CQUFvQjtrQkFIaEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsMkNBQTJDO2lCQUN0RDs7MEJBdUJjLFFBQVE7OzBCQUFJLElBQUk7NENBbEJwQixXQUFXO3NCQUFuQixLQUFLO2dCQUVHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBRUcsUUFBUTtzQkFBaEIsS0FBSztnQkFFRyxPQUFPO3NCQUFmLEtBQUs7Z0JBRUksVUFBVTtzQkFBbkIsTUFBTTtnQkFFRyxTQUFTO3NCQUFsQixNQUFNO2dCQUVHLFFBQVE7c0JBQWpCLE1BQU07Z0JBRUcsVUFBVTtzQkFBbkIsTUFBTTtnQkFXQSxZQUFZO3NCQURsQixZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkF3QjFCLFlBQVk7c0JBRGxCLFlBQVk7dUJBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uRGVzdHJveSwgT3B0aW9uYWwsIE91dHB1dCwgU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBNYXRLZXlib2FyZFJlZiB9IGZyb20gJy4uL2NsYXNzZXMva2V5Ym9hcmQtcmVmLmNsYXNzJztcclxuaW1wb3J0IHsgTWF0S2V5Ym9hcmRDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2tleWJvYXJkL2tleWJvYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdEtleWJvYXJkU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2tleWJvYXJkLnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdpbnB1dFttYXRLZXlib2FyZF0sIHRleHRhcmVhW21hdEtleWJvYXJkXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdEtleWJvYXJkRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuXHJcbiAgcHJpdmF0ZSBfa2V5Ym9hcmRSZWY6IE1hdEtleWJvYXJkUmVmPE1hdEtleWJvYXJkQ29tcG9uZW50PjtcclxuXHJcbiAgQElucHV0KCkgbWF0S2V5Ym9hcmQ6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgZGFya1RoZW1lOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKSBkdXJhdGlvbjogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKSBpc0RlYnVnOiBib29sZWFuO1xyXG5cclxuICBAT3V0cHV0KCkgZW50ZXJDbGljazogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBAT3V0cHV0KCkgY2Fwc0NsaWNrOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSBhbHRDbGljazogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBAT3V0cHV0KCkgc2hpZnRDbGljazogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2tleWJvYXJkU2VydmljZTogTWF0S2V5Ym9hcmRTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgcHJpdmF0ZSBfY29udHJvbD86IE5nQ29udHJvbCkge31cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmhpZGVLZXlib2FyZCgpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnLCBbJyRldmVudCddKVxyXG4gIHB1YmxpYyBzaG93S2V5Ym9hcmQoKSB7XHJcbiAgICB0aGlzLl9rZXlib2FyZFJlZiA9IHRoaXMuX2tleWJvYXJkU2VydmljZS5vcGVuKHRoaXMubWF0S2V5Ym9hcmQsIHtcclxuICAgICAgZGFya1RoZW1lOiB0aGlzLmRhcmtUaGVtZSxcclxuICAgICAgZHVyYXRpb246IHRoaXMuZHVyYXRpb24sXHJcbiAgICAgIGlzRGVidWc6IHRoaXMuaXNEZWJ1Z1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcmVmZXJlbmNlIHRoZSBpbnB1dCBlbGVtZW50XHJcbiAgICB0aGlzLl9rZXlib2FyZFJlZi5pbnN0YW5jZS5zZXRJbnB1dEluc3RhbmNlKHRoaXMuX2VsZW1lbnRSZWYpO1xyXG5cclxuICAgIC8vIHNldCBjb250cm9sIGlmIGdpdmVuLCBjYXN0IHRvIHNtdGguIG5vbi1hYnN0cmFjdFxyXG4gICAgaWYgKHRoaXMuX2NvbnRyb2wpIHtcclxuICAgICAgdGhpcy5fa2V5Ym9hcmRSZWYuaW5zdGFuY2UuYXR0YWNoQ29udHJvbCh0aGlzLl9jb250cm9sLmNvbnRyb2wpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbm5lY3Qgb3V0cHV0c1xyXG4gICAgdGhpcy5fa2V5Ym9hcmRSZWYuaW5zdGFuY2UuZW50ZXJDbGljay5zdWJzY3JpYmUoKCkgPT4gdGhpcy5lbnRlckNsaWNrLm5leHQoKSk7XHJcbiAgICB0aGlzLl9rZXlib2FyZFJlZi5pbnN0YW5jZS5jYXBzQ2xpY2suc3Vic2NyaWJlKCgpID0+IHRoaXMuY2Fwc0NsaWNrLm5leHQoKSk7XHJcbiAgICB0aGlzLl9rZXlib2FyZFJlZi5pbnN0YW5jZS5hbHRDbGljay5zdWJzY3JpYmUoKCkgPT4gdGhpcy5hbHRDbGljay5uZXh0KCkpO1xyXG4gICAgdGhpcy5fa2V5Ym9hcmRSZWYuaW5zdGFuY2Uuc2hpZnRDbGljay5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zaGlmdENsaWNrLm5leHQoKSk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdibHVyJywgWyckZXZlbnQnXSlcclxuICBwdWJsaWMgaGlkZUtleWJvYXJkKCkge1xyXG4gICAgaWYgKHRoaXMuX2tleWJvYXJkUmVmKSB7XHJcbiAgICAgIHRoaXMuX2tleWJvYXJkUmVmLmRpc21pc3MoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==
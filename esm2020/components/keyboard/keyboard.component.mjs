import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Inject, LOCALE_ID, QueryList, ViewChildren } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { KEYBOARD_ICONS } from '../../configs/keyboard-icons.config';
import { KeyboardClassKey } from '../../enums/keyboard-class-key.enum';
import { KeyboardModifier } from '../../enums/keyboard-modifier.enum';
import { MatKeyboardService } from '../../services/keyboard.service';
import { MatKeyboardKeyComponent } from '../keyboard-key/keyboard-key.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/keyboard.service";
import * as i2 from "@angular/common";
import * as i3 from "../keyboard-key/keyboard-key.component";
/**
 * A component used to open as the default keyboard, matching material spec.
 * This should only be used internally by the keyboard service.
 */
export class MatKeyboardComponent {
    // inject dependencies
    constructor(_locale, _keyboardService) {
        this._locale = _locale;
        this._keyboardService = _keyboardService;
        this._darkTheme = new BehaviorSubject(false);
        this._isDebug = new BehaviorSubject(false);
        this._inputInstance$ = new BehaviorSubject(null);
        this._modifier = KeyboardModifier.None;
        this._capsLocked = false;
        this._icons = KEYBOARD_ICONS;
        this.cssClass = true;
        this.enterClick = new EventEmitter();
        this.capsClick = new EventEmitter();
        this.altClick = new EventEmitter();
        this.shiftClick = new EventEmitter();
    }
    // returns an observable of the input instance
    get inputInstance() {
        return this._inputInstance$.asObservable();
    }
    set icons(icons) {
        Object.assign(this._icons, icons);
    }
    set darkTheme(darkTheme) {
        if (this._darkTheme.getValue() !== darkTheme) {
            this._darkTheme.next(darkTheme);
        }
    }
    set isDebug(isDebug) {
        if (this._isDebug.getValue() !== isDebug) {
            this._isDebug.next(isDebug);
        }
    }
    get darkTheme$() {
        return this._darkTheme.asObservable();
    }
    get isDebug$() {
        return this._isDebug.asObservable();
    }
    setInputInstance(inputInstance) {
        this._inputInstance$.next(inputInstance);
    }
    attachControl(control) {
        this.control = control;
    }
    ngOnInit() {
        // set a fallback using the locale
        if (!this.layout) {
            this.locale = this._keyboardService.mapLocale(this._locale) ? this._locale : 'en-US';
            this.layout = this._keyboardService.getLayoutForLocale(this.locale);
        }
    }
    /**
     * dismisses the keyboard
     */
    dismiss() {
        this.keyboardRef.dismiss();
    }
    /**
     * checks if a given key is currently pressed
     * @param key
     * @param
     */
    isActive(key) {
        const modifiedKey = this.getModifiedKey(key);
        const isActiveCapsLock = modifiedKey === KeyboardClassKey.Caps && this._capsLocked;
        const isActiveModifier = modifiedKey === KeyboardModifier[this._modifier];
        return isActiveCapsLock || isActiveModifier;
    }
    // retrieves modified key
    getModifiedKey(key) {
        let modifier = this._modifier;
        // `CapsLock` inverts the meaning of `Shift`
        if (this._capsLocked) {
            modifier = this._invertShiftModifier(this._modifier);
        }
        return key[modifier];
    }
    // retrieves icon for given key
    getKeyIcon(key) {
        return this._icons[key[KeyboardModifier.None]];
    }
    /**
     * listens to users keyboard inputs to simulate on virtual keyboard, too
     * @param event
     */
    onKeyDown(event) {
        // 'activate' corresponding key
        this._keys
            .filter((key) => key.key === event.key)
            .forEach((key) => {
            key.pressed = true;
        });
        // simulate modifier press
        if (event.key === KeyboardClassKey.Caps) {
            this.onCapsClick(event.getModifierState(KeyboardClassKey.Caps));
        }
        if (event.key === KeyboardClassKey.Alt && this._modifier !== KeyboardModifier.Alt && this._modifier !== KeyboardModifier.ShiftAlt) {
            this.onAltClick();
        }
        if (event.key === KeyboardClassKey.Shift && this._modifier !== KeyboardModifier.Shift && this._modifier !== KeyboardModifier.ShiftAlt) {
            this.onShiftClick();
        }
    }
    /**
     * listens to users keyboard inputs to simulate on virtual keyboard, too
     * @param event
     */
    onKeyUp(event) {
        // 'deactivate' corresponding key
        this._keys
            .filter((key) => key.key === event.key)
            .forEach((key) => {
            key.pressed = false;
        });
        // simulate modifier release
        if (event.key === KeyboardClassKey.Alt && (this._modifier === KeyboardModifier.Alt || this._modifier === KeyboardModifier.ShiftAlt)) {
            this.onAltClick();
        }
        if (event.key === KeyboardClassKey.Shift && (this._modifier === KeyboardModifier.Shift || this._modifier === KeyboardModifier.ShiftAlt)) {
            this.onShiftClick();
        }
    }
    /**
     * bubbles event if submit is potentially triggered
     */
    onEnterClick() {
        // notify subscribers
        this.enterClick.next();
    }
    /**
     * simulates clicking `CapsLock` key
     * @param targetState
     */
    onCapsClick(targetState = !this._capsLocked) {
        // not implemented
        this._capsLocked = targetState;
        // notify subscribers
        this.capsClick.next();
    }
    /*
     * non-modifier keys are clicked
     */
    onKeyClick() {
        if (this._modifier === KeyboardModifier.Shift || this._modifier === KeyboardModifier.ShiftAlt) {
            this._modifier = this._invertShiftModifier(this._modifier);
        }
        if (this._modifier === KeyboardModifier.Alt || this._modifier === KeyboardModifier.ShiftAlt) {
            this._modifier = this._invertAltModifier(this._modifier);
        }
    }
    /**
     * simulates clicking `Alt` key
     */
    onAltClick() {
        // invert modifier meaning
        this._modifier = this._invertAltModifier(this._modifier);
        // notify subscribers
        this.altClick.next();
    }
    /**
     * simulates clicking `Shift` key
     */
    onShiftClick() {
        // invert modifier meaning
        this._modifier = this._invertShiftModifier(this._modifier);
        // notify subscribers
        this.shiftClick.next();
    }
    _invertAltModifier(modifier) {
        switch (modifier) {
            case KeyboardModifier.None:
                return KeyboardModifier.Alt;
            case KeyboardModifier.Shift:
                return KeyboardModifier.ShiftAlt;
            case KeyboardModifier.ShiftAlt:
                return KeyboardModifier.Shift;
            case KeyboardModifier.Alt:
                return KeyboardModifier.None;
        }
    }
    _invertShiftModifier(modifier) {
        switch (modifier) {
            case KeyboardModifier.None:
                return KeyboardModifier.Shift;
            case KeyboardModifier.Alt:
                return KeyboardModifier.ShiftAlt;
            case KeyboardModifier.ShiftAlt:
                return KeyboardModifier.Alt;
            case KeyboardModifier.Shift:
                return KeyboardModifier.None;
        }
    }
}
MatKeyboardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MatKeyboardComponent, deps: [{ token: LOCALE_ID }, { token: i1.MatKeyboardService }], target: i0.ɵɵFactoryTarget.Component });
MatKeyboardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: MatKeyboardComponent, selector: "mat-keyboard", host: { listeners: { "document:keydown": "onKeyDown($event)", "document:keyup": "onKeyUp($event)" }, properties: { "class.mat-keyboard": "this.cssClass" } }, viewQueries: [{ propertyName: "_keys", predicate: MatKeyboardKeyComponent, descendants: true }], ngImport: i0, template: "<div class=\"mat-keyboard-wrapper\"\r\n     [class.dark-theme]=\"darkTheme$ | async\"\r\n     [class.debug]=\"isDebug$ | async\"\r\n>\r\n  <nav class=\"mat-keyboard-layout\">\r\n    <div class=\"mat-keyboard-row\"\r\n         *ngFor=\"let row of layout.keys\"\r\n    >\r\n      <ng-container *ngFor=\"let key of row\">\r\n        <mat-keyboard-key class=\"mat-keyboard-col\"\r\n                          *ngIf=\"getModifiedKey(key)\"\r\n                          [key]=\"getModifiedKey(key)\"\r\n                          [icon]=\"getKeyIcon(key)\"\r\n                          [active]=\"isActive(key)\"\r\n                          [input]=\"inputInstance | async\"\r\n                          [control]=\"control\"\r\n                          (enterClick)=\"onEnterClick()\"\r\n                          (capsClick)=\"onCapsClick()\"\r\n                          (altClick)=\"onAltClick()\"\r\n                          (shiftClick)=\"onShiftClick()\"\r\n                          (keyClick)=\"onKeyClick()\"\r\n        ></mat-keyboard-key>\r\n      </ng-container>\r\n    </div>\r\n  </nav>\r\n</div>\r\n", styles: [".mat-keyboard-wrapper{background-color:#f5f5f5;border-radius:2px;display:flex;font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;justify-content:space-between;line-height:20px;padding:14px 24px}.mat-keyboard-wrapper.dark-theme{background-color:#424242}.mat-keyboard-action{background:none;color:inherit;flex-shrink:0;font-family:inherit;font-size:inherit;font-weight:600;line-height:1;margin-left:8px;text-transform:uppercase}:host(.dark-theme) .mat-keyboard-action{color:#f5f5f5}.mat-keyboard-layout{width:100%}.mat-keyboard-row{align-items:stretch;display:flex;flex-direction:row;flex-wrap:nowrap}.mat-keyboard-col{box-sizing:border-box;flex:1 1 auto;padding:4px}.mat-keyboard-key{min-width:0;width:100%}:host(.dark-theme) .mat-keyboard-key{background-color:#616161;color:#f5f5f5}:host(.debug) .mat-keyboard-key-deadkey{background-color:#5f9ea0}:host(.debug) .mat-keyboard-key-modifier{background-color:#7fffd4}:host(.debug.dark-theme) .mat-keyboard-key-deadkey{background-color:#639}:host(.debug.dark-theme) .mat-keyboard-key-modifier{background-color:#9370db}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.MatKeyboardKeyComponent, selector: "mat-keyboard-key", inputs: ["key", "icon", "active", "pressed", "input", "control"], outputs: ["genericClick", "enterClick", "bkspClick", "capsClick", "altClick", "shiftClick", "spaceClick", "tabClick", "keyClick"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MatKeyboardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mat-keyboard', changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, template: "<div class=\"mat-keyboard-wrapper\"\r\n     [class.dark-theme]=\"darkTheme$ | async\"\r\n     [class.debug]=\"isDebug$ | async\"\r\n>\r\n  <nav class=\"mat-keyboard-layout\">\r\n    <div class=\"mat-keyboard-row\"\r\n         *ngFor=\"let row of layout.keys\"\r\n    >\r\n      <ng-container *ngFor=\"let key of row\">\r\n        <mat-keyboard-key class=\"mat-keyboard-col\"\r\n                          *ngIf=\"getModifiedKey(key)\"\r\n                          [key]=\"getModifiedKey(key)\"\r\n                          [icon]=\"getKeyIcon(key)\"\r\n                          [active]=\"isActive(key)\"\r\n                          [input]=\"inputInstance | async\"\r\n                          [control]=\"control\"\r\n                          (enterClick)=\"onEnterClick()\"\r\n                          (capsClick)=\"onCapsClick()\"\r\n                          (altClick)=\"onAltClick()\"\r\n                          (shiftClick)=\"onShiftClick()\"\r\n                          (keyClick)=\"onKeyClick()\"\r\n        ></mat-keyboard-key>\r\n      </ng-container>\r\n    </div>\r\n  </nav>\r\n</div>\r\n", styles: [".mat-keyboard-wrapper{background-color:#f5f5f5;border-radius:2px;display:flex;font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;justify-content:space-between;line-height:20px;padding:14px 24px}.mat-keyboard-wrapper.dark-theme{background-color:#424242}.mat-keyboard-action{background:none;color:inherit;flex-shrink:0;font-family:inherit;font-size:inherit;font-weight:600;line-height:1;margin-left:8px;text-transform:uppercase}:host(.dark-theme) .mat-keyboard-action{color:#f5f5f5}.mat-keyboard-layout{width:100%}.mat-keyboard-row{align-items:stretch;display:flex;flex-direction:row;flex-wrap:nowrap}.mat-keyboard-col{box-sizing:border-box;flex:1 1 auto;padding:4px}.mat-keyboard-key{min-width:0;width:100%}:host(.dark-theme) .mat-keyboard-key{background-color:#616161;color:#f5f5f5}:host(.debug) .mat-keyboard-key-deadkey{background-color:#5f9ea0}:host(.debug) .mat-keyboard-key-modifier{background-color:#7fffd4}:host(.debug.dark-theme) .mat-keyboard-key-deadkey{background-color:#639}:host(.debug.dark-theme) .mat-keyboard-key-modifier{background-color:#9370db}\n"] }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }, { type: i1.MatKeyboardService }]; }, propDecorators: { _keys: [{
                type: ViewChildren,
                args: [MatKeyboardKeyComponent]
            }], cssClass: [{
                type: HostBinding,
                args: ['class.mat-keyboard']
            }], onKeyDown: [{
                type: HostListener,
                args: ['document:keydown', ['$event']]
            }], onKeyUp: [{
                type: HostListener,
                args: ['document:keyup', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvcmUvc3JjL2NvbXBvbmVudHMva2V5Ym9hcmQva2V5Ym9hcmQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vc3JjL2NvcmUvc3JjL2NvbXBvbmVudHMva2V5Ym9hcmQva2V5Ym9hcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUssT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUVuRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDckUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7Ozs7O0FBRWpGOzs7R0FHRztBQVFILE1BQU0sT0FBTyxvQkFBb0I7SUFtRS9CLHNCQUFzQjtJQUN0QixZQUF1QyxPQUFlLEVBQ2xDLGdCQUFvQztRQURqQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2xDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBb0I7UUFuRWhELGVBQVUsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbEUsYUFBUSxHQUE2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVoRSxvQkFBZSxHQUF1QyxJQUFJLGVBQWUsQ0FBQyxJQUFJ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b250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5qZWN0LCBMT0NBTEVfSUQsIE9uSW5pdCwgUXVlcnlMaXN0LCBWaWV3Q2hpbGRyZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTWF0S2V5Ym9hcmRSZWYgfSBmcm9tICcuLi8uLi9jbGFzc2VzL2tleWJvYXJkLXJlZi5jbGFzcyc7XHJcbmltcG9ydCB7IEtFWUJPQVJEX0lDT05TIH0gZnJvbSAnLi4vLi4vY29uZmlncy9rZXlib2FyZC1pY29ucy5jb25maWcnO1xyXG5pbXBvcnQgeyBLZXlib2FyZENsYXNzS2V5IH0gZnJvbSAnLi4vLi4vZW51bXMva2V5Ym9hcmQtY2xhc3Mta2V5LmVudW0nO1xyXG5pbXBvcnQgeyBLZXlib2FyZE1vZGlmaWVyIH0gZnJvbSAnLi4vLi4vZW51bXMva2V5Ym9hcmQtbW9kaWZpZXIuZW51bSc7XHJcbmltcG9ydCB7IElLZXlib2FyZEljb25zLCBJTWF0SWNvbiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMva2V5Ym9hcmQtaWNvbnMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgSUtleWJvYXJkTGF5b3V0IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9rZXlib2FyZC1sYXlvdXQuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgTWF0S2V5Ym9hcmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMva2V5Ym9hcmQuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hdEtleWJvYXJkS2V5Q29tcG9uZW50IH0gZnJvbSAnLi4va2V5Ym9hcmQta2V5L2tleWJvYXJkLWtleS5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEEgY29tcG9uZW50IHVzZWQgdG8gb3BlbiBhcyB0aGUgZGVmYXVsdCBrZXlib2FyZCwgbWF0Y2hpbmcgbWF0ZXJpYWwgc3BlYy5cclxuICogVGhpcyBzaG91bGQgb25seSBiZSB1c2VkIGludGVybmFsbHkgYnkgdGhlIGtleWJvYXJkIHNlcnZpY2UuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21hdC1rZXlib2FyZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2tleWJvYXJkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9rZXlib2FyZC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRLZXlib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHByaXZhdGUgX2RhcmtUaGVtZTogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblxyXG4gIHByaXZhdGUgX2lzRGVidWc6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cclxuICBwcml2YXRlIF9pbnB1dEluc3RhbmNlJDogQmVoYXZpb3JTdWJqZWN0PEVsZW1lbnRSZWYgfCBudWxsPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XHJcblxyXG4gIEBWaWV3Q2hpbGRyZW4oTWF0S2V5Ym9hcmRLZXlDb21wb25lbnQpXHJcbiAgcHJpdmF0ZSBfa2V5czogUXVlcnlMaXN0PE1hdEtleWJvYXJkS2V5Q29tcG9uZW50PjtcclxuXHJcbiAgcHJpdmF0ZSBfbW9kaWZpZXI6IEtleWJvYXJkTW9kaWZpZXIgPSBLZXlib2FyZE1vZGlmaWVyLk5vbmU7XHJcblxyXG4gIHByaXZhdGUgX2NhcHNMb2NrZWQgPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBfaWNvbnM6IElLZXlib2FyZEljb25zID0gS0VZQk9BUkRfSUNPTlM7XHJcblxyXG4gIC8vIHRoZSBzZXJ2aWNlIHByb3ZpZGVzIGEgbG9jYWxlIG9yIGxheW91dCBvcHRpb25hbGx5XHJcbiAgbG9jYWxlPzogc3RyaW5nO1xyXG5cclxuICBsYXlvdXQ6IElLZXlib2FyZExheW91dDtcclxuXHJcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sO1xyXG5cclxuICAvLyB0aGUgaW5zdGFuY2Ugb2YgdGhlIGNvbXBvbmVudCBtYWtpbmcgdXAgdGhlIGNvbnRlbnQgb2YgdGhlIGtleWJvYXJkXHJcbiAga2V5Ym9hcmRSZWY6IE1hdEtleWJvYXJkUmVmPE1hdEtleWJvYXJkQ29tcG9uZW50PjtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tYXQta2V5Ym9hcmQnKVxyXG4gIGNzc0NsYXNzID0gdHJ1ZTtcclxuXHJcbiAgZW50ZXJDbGljazogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBjYXBzQ2xpY2s6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgYWx0Q2xpY2s6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgc2hpZnRDbGljazogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICAvLyByZXR1cm5zIGFuIG9ic2VydmFibGUgb2YgdGhlIGlucHV0IGluc3RhbmNlXHJcbiAgZ2V0IGlucHV0SW5zdGFuY2UoKTogT2JzZXJ2YWJsZTxFbGVtZW50UmVmIHwgbnVsbD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lucHV0SW5zdGFuY2UkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0IGljb25zKGljb25zOiBJS2V5Ym9hcmRJY29ucykge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLl9pY29ucywgaWNvbnMpO1xyXG4gIH1cclxuXHJcbiAgc2V0IGRhcmtUaGVtZShkYXJrVGhlbWU6IGJvb2xlYW4pIHtcclxuICAgIGlmICh0aGlzLl9kYXJrVGhlbWUuZ2V0VmFsdWUoKSAhPT0gZGFya1RoZW1lKSB7XHJcbiAgICAgIHRoaXMuX2RhcmtUaGVtZS5uZXh0KGRhcmtUaGVtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXQgaXNEZWJ1Zyhpc0RlYnVnOiBib29sZWFuKSB7XHJcbiAgICBpZiAodGhpcy5faXNEZWJ1Zy5nZXRWYWx1ZSgpICE9PSBpc0RlYnVnKSB7XHJcbiAgICAgIHRoaXMuX2lzRGVidWcubmV4dChpc0RlYnVnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBkYXJrVGhlbWUkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhcmtUaGVtZS5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBpc0RlYnVnJCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiB0aGlzLl9pc0RlYnVnLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gaW5qZWN0IGRlcGVuZGVuY2llc1xyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTE9DQUxFX0lEKSBwcml2YXRlIF9sb2NhbGU6IHN0cmluZyxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9rZXlib2FyZFNlcnZpY2U6IE1hdEtleWJvYXJkU2VydmljZSkgeyB9XHJcblxyXG4gIHNldElucHV0SW5zdGFuY2UoaW5wdXRJbnN0YW5jZTogRWxlbWVudFJlZikge1xyXG4gICAgdGhpcy5faW5wdXRJbnN0YW5jZSQubmV4dChpbnB1dEluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIGF0dGFjaENvbnRyb2woY29udHJvbDogQWJzdHJhY3RDb250cm9sKSB7XHJcbiAgICB0aGlzLmNvbnRyb2wgPSBjb250cm9sO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBzZXQgYSBmYWxsYmFjayB1c2luZyB0aGUgbG9jYWxlXHJcbiAgICBpZiAoIXRoaXMubGF5b3V0KSB7XHJcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5fa2V5Ym9hcmRTZXJ2aWNlLm1hcExvY2FsZSh0aGlzLl9sb2NhbGUpID8gdGhpcy5fbG9jYWxlIDogJ2VuLVVTJztcclxuICAgICAgdGhpcy5sYXlvdXQgPSB0aGlzLl9rZXlib2FyZFNlcnZpY2UuZ2V0TGF5b3V0Rm9yTG9jYWxlKHRoaXMubG9jYWxlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGRpc21pc3NlcyB0aGUga2V5Ym9hcmRcclxuICAgKi9cclxuICBkaXNtaXNzKCkge1xyXG4gICAgdGhpcy5rZXlib2FyZFJlZi5kaXNtaXNzKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBjaGVja3MgaWYgYSBnaXZlbiBrZXkgaXMgY3VycmVudGx5IHByZXNzZWRcclxuICAgKiBAcGFyYW0ga2V5XHJcbiAgICogQHBhcmFtXHJcbiAgICovXHJcbiAgaXNBY3RpdmUoa2V5OiAoc3RyaW5nIHwgS2V5Ym9hcmRDbGFzc0tleSlbXSk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgbW9kaWZpZWRLZXk6IHN0cmluZyA9IHRoaXMuZ2V0TW9kaWZpZWRLZXkoa2V5KTtcclxuICAgIGNvbnN0IGlzQWN0aXZlQ2Fwc0xvY2s6IGJvb2xlYW4gPSBtb2RpZmllZEtleSA9PT0gS2V5Ym9hcmRDbGFzc0tleS5DYXBzICYmIHRoaXMuX2NhcHNMb2NrZWQ7XHJcbiAgICBjb25zdCBpc0FjdGl2ZU1vZGlmaWVyOiBib29sZWFuID0gbW9kaWZpZWRLZXkgPT09IEtleWJvYXJkTW9kaWZpZXJbdGhpcy5fbW9kaWZpZXJdO1xyXG4gICAgcmV0dXJuIGlzQWN0aXZlQ2Fwc0xvY2sgfHwgaXNBY3RpdmVNb2RpZmllcjtcclxuICB9XHJcblxyXG4gIC8vIHJldHJpZXZlcyBtb2RpZmllZCBrZXlcclxuICBnZXRNb2RpZmllZEtleShrZXk6IChzdHJpbmcgfCBLZXlib2FyZENsYXNzS2V5KVtdKTogc3RyaW5nIHtcclxuICAgIGxldCBtb2RpZmllcjogS2V5Ym9hcmRNb2RpZmllciA9IHRoaXMuX21vZGlmaWVyO1xyXG5cclxuICAgIC8vIGBDYXBzTG9ja2AgaW52ZXJ0cyB0aGUgbWVhbmluZyBvZiBgU2hpZnRgXHJcbiAgICBpZiAodGhpcy5fY2Fwc0xvY2tlZCkge1xyXG4gICAgICBtb2RpZmllciA9IHRoaXMuX2ludmVydFNoaWZ0TW9kaWZpZXIodGhpcy5fbW9kaWZpZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBrZXlbbW9kaWZpZXJdO1xyXG4gIH1cclxuXHJcbiAgLy8gcmV0cmlldmVzIGljb24gZm9yIGdpdmVuIGtleVxyXG4gIGdldEtleUljb24oa2V5OiAoc3RyaW5nIHwgS2V5Ym9hcmRDbGFzc0tleSlbXSk6IElNYXRJY29uIHtcclxuICAgIHJldHVybiB0aGlzLl9pY29uc1trZXlbS2V5Ym9hcmRNb2RpZmllci5Ob25lXV07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBsaXN0ZW5zIHRvIHVzZXJzIGtleWJvYXJkIGlucHV0cyB0byBzaW11bGF0ZSBvbiB2aXJ0dWFsIGtleWJvYXJkLCB0b29cclxuICAgKiBAcGFyYW0gZXZlbnRcclxuICAgKi9cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXlkb3duJywgWyckZXZlbnQnXSlcclxuICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIC8vICdhY3RpdmF0ZScgY29ycmVzcG9uZGluZyBrZXlcclxuICAgIHRoaXMuX2tleXNcclxuICAgICAgLmZpbHRlcigoa2V5OiBNYXRLZXlib2FyZEtleUNvbXBvbmVudCkgPT4ga2V5LmtleSA9PT0gZXZlbnQua2V5KVxyXG4gICAgICAuZm9yRWFjaCgoa2V5OiBNYXRLZXlib2FyZEtleUNvbXBvbmVudCkgPT4ge1xyXG4gICAgICAgIGtleS5wcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgLy8gc2ltdWxhdGUgbW9kaWZpZXIgcHJlc3NcclxuICAgIGlmIChldmVudC5rZXkgPT09IEtleWJvYXJkQ2xhc3NLZXkuQ2Fwcykge1xyXG4gICAgICB0aGlzLm9uQ2Fwc0NsaWNrKGV2ZW50LmdldE1vZGlmaWVyU3RhdGUoS2V5Ym9hcmRDbGFzc0tleS5DYXBzKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBLZXlib2FyZENsYXNzS2V5LkFsdCAmJiB0aGlzLl9tb2RpZmllciAhPT0gS2V5Ym9hcmRNb2RpZmllci5BbHQgJiYgdGhpcy5fbW9kaWZpZXIgIT09IEtleWJvYXJkTW9kaWZpZXIuU2hpZnRBbHQpIHtcclxuICAgICAgdGhpcy5vbkFsdENsaWNrKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBLZXlib2FyZENsYXNzS2V5LlNoaWZ0ICYmIHRoaXMuX21vZGlmaWVyICE9PSBLZXlib2FyZE1vZGlmaWVyLlNoaWZ0ICYmIHRoaXMuX21vZGlmaWVyICE9PSBLZXlib2FyZE1vZGlmaWVyLlNoaWZ0QWx0KSB7XHJcbiAgICAgIHRoaXMub25TaGlmdENsaWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBsaXN0ZW5zIHRvIHVzZXJzIGtleWJvYXJkIGlucHV0cyB0byBzaW11bGF0ZSBvbiB2aXJ0dWFsIGtleWJvYXJkLCB0b29cclxuICAgKiBAcGFyYW0gZXZlbnRcclxuICAgKi9cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXl1cCcsIFsnJGV2ZW50J10pXHJcbiAgb25LZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgLy8gJ2RlYWN0aXZhdGUnIGNvcnJlc3BvbmRpbmcga2V5XHJcbiAgICB0aGlzLl9rZXlzXHJcbiAgICAgIC5maWx0ZXIoKGtleTogTWF0S2V5Ym9hcmRLZXlDb21wb25lbnQpID0+IGtleS5rZXkgPT09IGV2ZW50LmtleSlcclxuICAgICAgLmZvckVhY2goKGtleTogTWF0S2V5Ym9hcmRLZXlDb21wb25lbnQpID0+IHtcclxuICAgICAgICBrZXkucHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAvLyBzaW11bGF0ZSBtb2RpZmllciByZWxlYXNlXHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBLZXlib2FyZENsYXNzS2V5LkFsdCAmJiAodGhpcy5fbW9kaWZpZXIgPT09IEtleWJvYXJkTW9kaWZpZXIuQWx0IHx8IHRoaXMuX21vZGlmaWVyID09PSBLZXlib2FyZE1vZGlmaWVyLlNoaWZ0QWx0KSkge1xyXG4gICAgICB0aGlzLm9uQWx0Q2xpY2soKTtcclxuICAgIH1cclxuICAgIGlmIChldmVudC5rZXkgPT09IEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQgJiYgKHRoaXMuX21vZGlmaWVyID09PSBLZXlib2FyZE1vZGlmaWVyLlNoaWZ0IHx8IHRoaXMuX21vZGlmaWVyID09PSBLZXlib2FyZE1vZGlmaWVyLlNoaWZ0QWx0KSkge1xyXG4gICAgICB0aGlzLm9uU2hpZnRDbGljaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogYnViYmxlcyBldmVudCBpZiBzdWJtaXQgaXMgcG90ZW50aWFsbHkgdHJpZ2dlcmVkXHJcbiAgICovXHJcbiAgb25FbnRlckNsaWNrKCkge1xyXG4gICAgLy8gbm90aWZ5IHN1YnNjcmliZXJzXHJcbiAgICB0aGlzLmVudGVyQ2xpY2submV4dCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2ltdWxhdGVzIGNsaWNraW5nIGBDYXBzTG9ja2Aga2V5XHJcbiAgICogQHBhcmFtIHRhcmdldFN0YXRlXHJcbiAgICovXHJcbiAgb25DYXBzQ2xpY2sodGFyZ2V0U3RhdGUgPSAhdGhpcy5fY2Fwc0xvY2tlZCkge1xyXG4gICAgLy8gbm90IGltcGxlbWVudGVkXHJcbiAgICB0aGlzLl9jYXBzTG9ja2VkID0gdGFyZ2V0U3RhdGU7XHJcblxyXG4gICAgLy8gbm90aWZ5IHN1YnNjcmliZXJzXHJcbiAgICB0aGlzLmNhcHNDbGljay5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIG5vbi1tb2RpZmllciBrZXlzIGFyZSBjbGlja2VkXHJcbiAgICovXHJcbiAgb25LZXlDbGljaygpIHtcclxuICAgIGlmICh0aGlzLl9tb2RpZmllciA9PT0gS2V5Ym9hcmRNb2RpZmllci5TaGlmdCB8fCB0aGlzLl9tb2RpZmllciA9PT0gS2V5Ym9hcmRNb2RpZmllci5TaGlmdEFsdCkge1xyXG4gICAgICB0aGlzLl9tb2RpZmllciA9IHRoaXMuX2ludmVydFNoaWZ0TW9kaWZpZXIodGhpcy5fbW9kaWZpZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9tb2RpZmllciA9PT0gS2V5Ym9hcmRNb2RpZmllci5BbHQgfHwgdGhpcy5fbW9kaWZpZXIgPT09IEtleWJvYXJkTW9kaWZpZXIuU2hpZnRBbHQpIHtcclxuICAgICAgdGhpcy5fbW9kaWZpZXIgPSB0aGlzLl9pbnZlcnRBbHRNb2RpZmllcih0aGlzLl9tb2RpZmllcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBzaW11bGF0ZXMgY2xpY2tpbmcgYEFsdGAga2V5XHJcbiAgICovXHJcbiAgb25BbHRDbGljaygpIHtcclxuICAgIC8vIGludmVydCBtb2RpZmllciBtZWFuaW5nXHJcbiAgICB0aGlzLl9tb2RpZmllciA9IHRoaXMuX2ludmVydEFsdE1vZGlmaWVyKHRoaXMuX21vZGlmaWVyKTtcclxuXHJcbiAgICAvLyBub3RpZnkgc3Vic2NyaWJlcnNcclxuICAgIHRoaXMuYWx0Q2xpY2submV4dCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2ltdWxhdGVzIGNsaWNraW5nIGBTaGlmdGAga2V5XHJcbiAgICovXHJcbiAgb25TaGlmdENsaWNrKCkge1xyXG4gICAgLy8gaW52ZXJ0IG1vZGlmaWVyIG1lYW5pbmdcclxuICAgIHRoaXMuX21vZGlmaWVyID0gdGhpcy5faW52ZXJ0U2hpZnRNb2RpZmllcih0aGlzLl9tb2RpZmllcik7XHJcblxyXG4gICAgLy8gbm90aWZ5IHN1YnNjcmliZXJzXHJcbiAgICB0aGlzLnNoaWZ0Q2xpY2submV4dCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaW52ZXJ0QWx0TW9kaWZpZXIobW9kaWZpZXI6IEtleWJvYXJkTW9kaWZpZXIpOiBLZXlib2FyZE1vZGlmaWVyIHtcclxuICAgIHN3aXRjaCAobW9kaWZpZXIpIHtcclxuICAgICAgY2FzZSBLZXlib2FyZE1vZGlmaWVyLk5vbmU6XHJcbiAgICAgICAgcmV0dXJuIEtleWJvYXJkTW9kaWZpZXIuQWx0O1xyXG5cclxuICAgICAgY2FzZSBLZXlib2FyZE1vZGlmaWVyLlNoaWZ0OlxyXG4gICAgICAgIHJldHVybiBLZXlib2FyZE1vZGlmaWVyLlNoaWZ0QWx0O1xyXG5cclxuICAgICAgY2FzZSBLZXlib2FyZE1vZGlmaWVyLlNoaWZ0QWx0OlxyXG4gICAgICAgIHJldHVybiBLZXlib2FyZE1vZGlmaWVyLlNoaWZ0O1xyXG5cclxuICAgICAgY2FzZSBLZXlib2FyZE1vZGlmaWVyLkFsdDpcclxuICAgICAgICByZXR1cm4gS2V5Ym9hcmRNb2RpZmllci5Ob25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaW52ZXJ0U2hpZnRNb2RpZmllcihtb2RpZmllcjogS2V5Ym9hcmRNb2RpZmllcik6IEtleWJvYXJkTW9kaWZpZXIge1xyXG4gICAgc3dpdGNoIChtb2RpZmllcikge1xyXG4gICAgICBjYXNlIEtleWJvYXJkTW9kaWZpZXIuTm9uZTpcclxuICAgICAgICByZXR1cm4gS2V5Ym9hcmRNb2RpZmllci5TaGlmdDtcclxuXHJcbiAgICAgIGNhc2UgS2V5Ym9hcmRNb2RpZmllci5BbHQ6XHJcbiAgICAgICAgcmV0dXJuIEtleWJvYXJkTW9kaWZpZXIuU2hpZnRBbHQ7XHJcblxyXG4gICAgICBjYXNlIEtleWJvYXJkTW9kaWZpZXIuU2hpZnRBbHQ6XHJcbiAgICAgICAgcmV0dXJuIEtleWJvYXJkTW9kaWZpZXIuQWx0O1xyXG5cclxuICAgICAgY2FzZSBLZXlib2FyZE1vZGlmaWVyLlNoaWZ0OlxyXG4gICAgICAgIHJldHVybiBLZXlib2FyZE1vZGlmaWVyLk5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwibWF0LWtleWJvYXJkLXdyYXBwZXJcIlxyXG4gICAgIFtjbGFzcy5kYXJrLXRoZW1lXT1cImRhcmtUaGVtZSQgfCBhc3luY1wiXHJcbiAgICAgW2NsYXNzLmRlYnVnXT1cImlzRGVidWckIHwgYXN5bmNcIlxyXG4+XHJcbiAgPG5hdiBjbGFzcz1cIm1hdC1rZXlib2FyZC1sYXlvdXRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJtYXQta2V5Ym9hcmQtcm93XCJcclxuICAgICAgICAgKm5nRm9yPVwibGV0IHJvdyBvZiBsYXlvdXQua2V5c1wiXHJcbiAgICA+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGtleSBvZiByb3dcIj5cclxuICAgICAgICA8bWF0LWtleWJvYXJkLWtleSBjbGFzcz1cIm1hdC1rZXlib2FyZC1jb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZ2V0TW9kaWZpZWRLZXkoa2V5KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2tleV09XCJnZXRNb2RpZmllZEtleShrZXkpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbaWNvbl09XCJnZXRLZXlJY29uKGtleSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFthY3RpdmVdPVwiaXNBY3RpdmUoa2V5KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2lucHV0XT1cImlucHV0SW5zdGFuY2UgfCBhc3luY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbnRyb2xdPVwiY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGVudGVyQ2xpY2spPVwib25FbnRlckNsaWNrKClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChjYXBzQ2xpY2spPVwib25DYXBzQ2xpY2soKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGFsdENsaWNrKT1cIm9uQWx0Q2xpY2soKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHNoaWZ0Q2xpY2spPVwib25TaGlmdENsaWNrKClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChrZXlDbGljayk9XCJvbktleUNsaWNrKClcIlxyXG4gICAgICAgID48L21hdC1rZXlib2FyZC1rZXk+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uYXY+XHJcbjwvZGl2PlxyXG4iXX0=
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Inject, Input, Output } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { MAT_KEYBOARD_DEADKEYS } from '../../configs/keyboard-deadkey.config';
import { KeyboardClassKey } from '../../enums/keyboard-class-key.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
export const VALUE_NEWLINE = '\n\r';
export const VALUE_SPACE = ' ';
export const VALUE_TAB = '\t';
const REPEAT_TIMEOUT = 500;
const REPEAT_INTERVAL = 100;
export class MatKeyboardKeyComponent {
    // Inject dependencies
    constructor(_deadkeys) {
        this._deadkeys = _deadkeys;
        this._deadkeyKeys = [];
        this._repeatState = false; // true if repeating, false if waiting
        this.active$ = new BehaviorSubject(false);
        this.pressed$ = new BehaviorSubject(false);
        this.genericClick = new EventEmitter();
        this.enterClick = new EventEmitter();
        this.bkspClick = new EventEmitter();
        this.capsClick = new EventEmitter();
        this.altClick = new EventEmitter();
        this.shiftClick = new EventEmitter();
        this.spaceClick = new EventEmitter();
        this.tabClick = new EventEmitter();
        this.keyClick = new EventEmitter();
    }
    set active(active) {
        this.active$.next(active);
    }
    get active() {
        return this.active$.getValue();
    }
    set pressed(pressed) {
        this.pressed$.next(pressed);
    }
    get pressed() {
        return this.pressed$.getValue();
    }
    get lowerKey() {
        return `${this.key}`.toLowerCase();
    }
    get charCode() {
        return `${this.key}`.charCodeAt(0);
    }
    get isClassKey() {
        return this.key in KeyboardClassKey;
    }
    get isDeadKey() {
        return this._deadkeyKeys.some((deadKey) => deadKey === `${this.key}`);
    }
    get hasIcon() {
        return this.icon !== undefined && this.icon !== null;
    }
    get iconName() {
        return this.icon.name || '';
    }
    get fontSet() {
        return this.icon.fontSet || '';
    }
    get fontIcon() {
        return this.icon.fontIcon || '';
    }
    get svgIcon() {
        return this.icon.svgIcon || '';
    }
    get cssClass() {
        const classes = [];
        if (this.hasIcon) {
            classes.push('mat-keyboard-key-modifier');
            classes.push(`mat-keyboard-key-${this.lowerKey}`);
        }
        if (this.isDeadKey) {
            classes.push('mat-keyboard-key-deadkey');
        }
        return classes.join(' ');
    }
    get inputValue() {
        if (this.control) {
            return this.control.value;
        }
        else if (this.input && this.input.nativeElement && this.input.nativeElement.value) {
            return this.input.nativeElement.value;
        }
        else {
            return '';
        }
    }
    set inputValue(inputValue) {
        if (this.control) {
            this.control.setValue(inputValue);
        }
        else if (this.input && this.input.nativeElement) {
            this.input.nativeElement.value = inputValue;
        }
    }
    ngOnInit() {
        // read the deadkeys
        this._deadkeyKeys = Object.keys(this._deadkeys);
    }
    ngOnDestroy() {
        this.cancelRepeat();
    }
    onClick(event) {
        // Trigger generic click event
        this.genericClick.emit(event);
        // Do not execute keypress if key is currently repeating
        if (this._repeatState) {
            return;
        }
        // Trigger a global key event. TODO: investigate
        // this._triggerKeyEvent();
        // Manipulate the focused input / textarea value
        const caret = this.input ? this._getCursorPosition() : 0;
        let char;
        switch (this.key) {
            // this keys have no actions yet
            // TODO: add deadkeys and modifiers
            case KeyboardClassKey.Alt:
            case KeyboardClassKey.AltGr:
            case KeyboardClassKey.AltLk:
                this.altClick.emit(event);
                break;
            case KeyboardClassKey.Bksp:
                this.deleteSelectedText();
                this.bkspClick.emit(event);
                break;
            case KeyboardClassKey.Caps:
                this.capsClick.emit(event);
                break;
            case KeyboardClassKey.Enter:
                if (this._isTextarea()) {
                    char = VALUE_NEWLINE;
                }
                else {
                    this.enterClick.emit(event);
                    // TODO: trigger submit / onSubmit / ngSubmit properly (for the time being this has to be handled by the user himself)
                    // console.log(this.control.ngControl.control.root)
                    // this.input.nativeElement.form.submit();
                }
                break;
            case KeyboardClassKey.Shift:
                this.shiftClick.emit(event);
                break;
            case KeyboardClassKey.Space:
                char = VALUE_SPACE;
                this.spaceClick.emit(event);
                break;
            case KeyboardClassKey.Tab:
                char = VALUE_TAB;
                this.tabClick.emit(event);
                break;
            default:
                // the key is not mapped or a string
                char = `${this.key}`;
                this.keyClick.emit(event);
                break;
        }
        if (char && this.input) {
            this.replaceSelectedText(char);
            this._setCursorPosition(caret + 1);
        }
        // Dispatch Input Event for Angular to register a change
        if (this.input && this.input.nativeElement) {
            setTimeout(() => {
                this.input.nativeElement.dispatchEvent(new Event('input', { bubbles: true }));
            });
        }
    }
    // Handle repeating keys. Keypress logic derived from onClick()
    onPointerDown() {
        this.cancelRepeat();
        this._repeatState = false;
        this._repeatTimeoutHandler = setTimeout(() => {
            // Initialize keypress variables
            let char;
            let keyFn;
            switch (this.key) {
                // Ignore non-repeating keys
                case KeyboardClassKey.Alt:
                case KeyboardClassKey.AltGr:
                case KeyboardClassKey.AltLk:
                case KeyboardClassKey.Caps:
                case KeyboardClassKey.Enter:
                case KeyboardClassKey.Shift:
                    return;
                case KeyboardClassKey.Bksp:
                    keyFn = () => {
                        this.deleteSelectedText();
                        this.bkspClick.emit();
                    };
                    break;
                case KeyboardClassKey.Space:
                    char = VALUE_SPACE;
                    keyFn = () => this.spaceClick.emit();
                    break;
                case KeyboardClassKey.Tab:
                    char = VALUE_TAB;
                    keyFn = () => this.tabClick.emit();
                    break;
                default:
                    char = `${this.key}`;
                    keyFn = () => this.keyClick.emit();
                    break;
            }
            // Execute repeating keypress
            this._repeatIntervalHandler = setInterval(() => {
                const caret = this.input ? this._getCursorPosition() : 0;
                this._repeatState = true;
                if (keyFn) {
                    keyFn();
                }
                if (char && this.input) {
                    this.replaceSelectedText(char);
                    this._setCursorPosition(caret + 1);
                }
                if (this.input && this.input.nativeElement) {
                    setTimeout(() => this.input.nativeElement.dispatchEvent(new Event('input', { bubbles: true })));
                }
            }, REPEAT_INTERVAL);
        }, REPEAT_TIMEOUT);
    }
    cancelRepeat() {
        if (this._repeatTimeoutHandler) {
            clearTimeout(this._repeatTimeoutHandler);
            this._repeatTimeoutHandler = null;
        }
        if (this._repeatIntervalHandler) {
            clearInterval(this._repeatIntervalHandler);
            this._repeatIntervalHandler = null;
        }
    }
    deleteSelectedText() {
        const value = this.inputValue ? this.inputValue.toString() : '';
        let caret = this.input ? this._getCursorPosition() : 0;
        let selectionLength = this._getSelectionLength();
        if (selectionLength === 0) {
            if (caret === 0) {
                return;
            }
            caret--;
            selectionLength = 1;
        }
        const headPart = value.slice(0, caret);
        const endPart = value.slice(caret + selectionLength);
        this.inputValue = [headPart, endPart].join('');
        this._setCursorPosition(caret);
    }
    replaceSelectedText(char) {
        const value = this.inputValue ? this.inputValue.toString() : '';
        const caret = this.input ? this._getCursorPosition() : 0;
        const selectionLength = this._getSelectionLength();
        const headPart = value.slice(0, caret);
        const endPart = value.slice(caret + selectionLength);
        this.inputValue = [headPart, char, endPart].join('');
    }
    // TODO: Include for repeating keys as well (if this gets implemented)
    // private _triggerKeyEvent(): Event {
    //   const keyboardEvent = new KeyboardEvent('keydown');
    //   //
    //   // keyboardEvent[initMethod](
    //   //   true, // bubbles
    //   //   true, // cancelable
    //   //   window, // viewArg: should be window
    //   //   false, // ctrlKeyArg
    //   //   false, // altKeyArg
    //   //   false, // shiftKeyArg
    //   //   false, // metaKeyArg
    //   //   this.charCode, // keyCodeArg : unsigned long - the virtual key code, else 0
    //   //   0 // charCodeArgs : unsigned long - the Unicode character associated with the depressed key, else 0
    //   // );
    //   //
    //   // window.document.dispatchEvent(keyboardEvent);
    //   return keyboardEvent;
    // }
    // inspired by:
    // ref https://stackoverflow.com/a/2897510/1146207
    _getCursorPosition() {
        if (!this.input) {
            return;
        }
        if ('selectionStart' in this.input.nativeElement) {
            // Standard-compliant browsers
            return this.input.nativeElement.selectionStart;
        }
        else if ('selection' in window.document) {
            // IE
            this.input.nativeElement.focus();
            const selection = window.document['selection'];
            const sel = selection.createRange();
            const selLen = selection.createRange().text.length;
            sel.moveStart('character', -this.control.value.length);
            return sel.text.length - selLen;
        }
    }
    _getSelectionLength() {
        if (!this.input) {
            return;
        }
        if ('selectionEnd' in this.input.nativeElement) {
            // Standard-compliant browsers
            return this.input.nativeElement.selectionEnd - this.input.nativeElement.selectionStart;
        }
        if ('selection' in window.document) {
            // IE
            this.input.nativeElement.focus();
            const selection = window.document['selection'];
            return selection.createRange().text.length;
        }
    }
    // inspired by:
    // ref https://stackoverflow.com/a/12518737/1146207
    // tslint:disable one-line
    _setCursorPosition(position) {
        if (!this.input) {
            return;
        }
        this.inputValue = this.control.value;
        // ^ this is used to not only get "focus", but
        // to make sure we don't have it everything -selected-
        // (it causes an issue in chrome, and having it doesn't hurt any other browser)
        if ('createTextRange' in this.input.nativeElement) {
            const range = this.input.nativeElement.createTextRange();
            range.move('character', position);
            range.select();
            return true;
        }
        else {
            // (el.selectionStart === 0 added for Firefox bug)
            if (this.input.nativeElement.selectionStart || this.input.nativeElement.selectionStart === 0) {
                this.input.nativeElement.focus();
                this.input.nativeElement.setSelectionRange(position, position);
                return true;
            }
            // fail city, fortunately this never happens (as far as I've tested) :)
            else {
                this.input.nativeElement.focus();
                return false;
            }
        }
    }
    _isTextarea() {
        return this.input && this.input.nativeElement && this.input.nativeElement.tagName === 'TEXTAREA';
    }
}
MatKeyboardKeyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MatKeyboardKeyComponent, deps: [{ token: MAT_KEYBOARD_DEADKEYS }], target: i0.ɵɵFactoryTarget.Component });
MatKeyboardKeyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: MatKeyboardKeyComponent, selector: "mat-keyboard-key", inputs: { key: "key", icon: "icon", active: "active", pressed: "pressed", input: "input", control: "control" }, outputs: { genericClick: "genericClick", enterClick: "enterClick", bkspClick: "bkspClick", capsClick: "capsClick", altClick: "altClick", shiftClick: "shiftClick", spaceClick: "spaceClick", tabClick: "tabClick", keyClick: "keyClick" }, ngImport: i0, template: "<button mat-raised-button\r\n        class=\"mat-keyboard-key\"\r\n        tabindex=\"-1\"\r\n        [class.mat-keyboard-key-active]=\"active$ | async\"\r\n        [class.mat-keyboard-key-pressed]=\"pressed$ | async\"\r\n        [ngClass]=\"cssClass\"\r\n        (click)=\"onClick($event)\"\r\n        (pointerdown)=\"onPointerDown()\"\r\n        (pointerleave)=\"cancelRepeat()\"\r\n        (pointerup)=\"cancelRepeat()\"\r\n>\r\n  <mat-icon *ngIf=\"hasIcon; else noIcon\" [fontSet]=\"fontSet\" [fontIcon]=\"fontIcon\" [svgIcon]=\"svgIcon\">{{ iconName }}</mat-icon>\r\n  <ng-template #noIcon>{{ key }}</ng-template>\r\n</button>\r\n", styles: ["@charset \"UTF-8\";:host{display:flex;font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;justify-content:space-between;line-height:20px}.mat-keyboard-key{min-width:0;width:100%}.mat-keyboard-key-active{background-color:#e0e0e0}.mat-keyboard-key-pressed{background-color:#bdbdbd}.mat-keyboard-key-capslock{background-color:#fff}.mat-keyboard-key-capslock:before{background-color:#bdbdbd;border-radius:100%;content:\"\";display:inline-block;height:3px;left:5px;position:absolute;top:5px;transition:.4s cubic-bezier(.25,.8,.25,1);transition-property:background-color,box-shadow;width:3px}.mat-keyboard-key-capslock.mat-keyboard-key-active:before{background-color:#0f0;box-shadow:0 0 \\a7px #adff2f}:host-context(.dark-theme) .mat-keyboard-key{background-color:#616161;color:#f5f5f5}:host-context(.dark-theme) .mat-keyboard-key-active{background-color:#9e9e9e}:host-context(.dark-theme) .mat-keyboard-key-pressed{background-color:#757575}:host-context(.debug) .mat-keyboard-key-deadkey{background-color:#5f9ea0}:host-context(.debug) .mat-keyboard-key-deadkey.mat-keyboard-key-active{background-color:#6fa8aa}:host-context(.debug) .mat-keyboard-key-deadkey.mat-keyboard-key-pressed{background-color:#7fb1b3}:host-context(.debug) .mat-keyboard-key-modifier{background-color:#7fffd4}:host-context(.debug) .mat-keyboard-key-modifier.mat-keyboard-key-active{background-color:#9fd}:host-context(.debug) .mat-keyboard-key-modifier.mat-keyboard-key-pressed{background-color:#b2ffe5}:host-context(.dark-theme.debug) .mat-keyboard-key-deadkey{background-color:#639}:host-context(.dark-theme.debug) .mat-keyboard-key-deadkey.mat-keyboard-key-active{background-color:#7339ac}:host-context(.dark-theme.debug) .mat-keyboard-key-deadkey.mat-keyboard-key-pressed{background-color:#8040bf}:host-context(.dark-theme.debug) .mat-keyboard-key-modifier{background-color:#9370db}:host-context(.dark-theme.debug) .mat-keyboard-key-modifier.mat-keyboard-key-active{background-color:#a284e0}:host-context(.dark-theme.debug) .mat-keyboard-key-modifier.mat-keyboard-key-pressed{background-color:#b299e5}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MatKeyboardKeyComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mat-keyboard-key', changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, template: "<button mat-raised-button\r\n        class=\"mat-keyboard-key\"\r\n        tabindex=\"-1\"\r\n        [class.mat-keyboard-key-active]=\"active$ | async\"\r\n        [class.mat-keyboard-key-pressed]=\"pressed$ | async\"\r\n        [ngClass]=\"cssClass\"\r\n        (click)=\"onClick($event)\"\r\n        (pointerdown)=\"onPointerDown()\"\r\n        (pointerleave)=\"cancelRepeat()\"\r\n        (pointerup)=\"cancelRepeat()\"\r\n>\r\n  <mat-icon *ngIf=\"hasIcon; else noIcon\" [fontSet]=\"fontSet\" [fontIcon]=\"fontIcon\" [svgIcon]=\"svgIcon\">{{ iconName }}</mat-icon>\r\n  <ng-template #noIcon>{{ key }}</ng-template>\r\n</button>\r\n", styles: ["@charset \"UTF-8\";:host{display:flex;font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;justify-content:space-between;line-height:20px}.mat-keyboard-key{min-width:0;width:100%}.mat-keyboard-key-active{background-color:#e0e0e0}.mat-keyboard-key-pressed{background-color:#bdbdbd}.mat-keyboard-key-capslock{background-color:#fff}.mat-keyboard-key-capslock:before{background-color:#bdbdbd;border-radius:100%;content:\"\";display:inline-block;height:3px;left:5px;position:absolute;top:5px;transition:.4s cubic-bezier(.25,.8,.25,1);transition-property:background-color,box-shadow;width:3px}.mat-keyboard-key-capslock.mat-keyboard-key-active:before{background-color:#0f0;box-shadow:0 0 \\a7px #adff2f}:host-context(.dark-theme) .mat-keyboard-key{background-color:#616161;color:#f5f5f5}:host-context(.dark-theme) .mat-keyboard-key-active{background-color:#9e9e9e}:host-context(.dark-theme) .mat-keyboard-key-pressed{background-color:#757575}:host-context(.debug) .mat-keyboard-key-deadkey{background-color:#5f9ea0}:host-context(.debug) .mat-keyboard-key-deadkey.mat-keyboard-key-active{background-color:#6fa8aa}:host-context(.debug) .mat-keyboard-key-deadkey.mat-keyboard-key-pressed{background-color:#7fb1b3}:host-context(.debug) .mat-keyboard-key-modifier{background-color:#7fffd4}:host-context(.debug) .mat-keyboard-key-modifier.mat-keyboard-key-active{background-color:#9fd}:host-context(.debug) .mat-keyboard-key-modifier.mat-keyboard-key-pressed{background-color:#b2ffe5}:host-context(.dark-theme.debug) .mat-keyboard-key-deadkey{background-color:#639}:host-context(.dark-theme.debug) .mat-keyboard-key-deadkey.mat-keyboard-key-active{background-color:#7339ac}:host-context(.dark-theme.debug) .mat-keyboard-key-deadkey.mat-keyboard-key-pressed{background-color:#8040bf}:host-context(.dark-theme.debug) .mat-keyboard-key-modifier{background-color:#9370db}:host-context(.dark-theme.debug) .mat-keyboard-key-modifier.mat-keyboard-key-active{background-color:#a284e0}:host-context(.dark-theme.debug) .mat-keyboard-key-modifier.mat-keyboard-key-pressed{background-color:#b299e5}\n"] }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_KEYBOARD_DEADKEYS]
                }] }]; }, propDecorators: { key: [{
                type: Input
            }], icon: [{
                type: Input
            }], active: [{
                type: Input
            }], pressed: [{
                type: Input
            }], input: [{
                type: Input
            }], control: [{
                type: Input
            }], genericClick: [{
                type: Output
            }], enterClick: [{
                type: Output
            }], bkspClick: [{
                type: Output
            }], capsClick: [{
                type: Output
            }], altClick: [{
                type: Output
            }], shiftClick: [{
                type: Output
            }], spaceClick: [{
                type: Output
            }], tabClick: [{
                type: Output
            }], keyClick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQta2V5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb3JlL3NyYy9jb21wb25lbnRzL2tleWJvYXJkLWtleS9rZXlib2FyZC1rZXkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vc3JjL2NvcmUvc3JjL2NvbXBvbmVudHMva2V5Ym9hcmQta2V5L2tleWJvYXJkLWtleS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZJLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7Ozs7O0FBSXZFLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUM7QUFDcEMsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQztBQUMvQixNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQzlCLE1BQU0sY0FBYyxHQUFHLEdBQUcsQ0FBQztBQUMzQixNQUFNLGVBQWUsR0FBRyxHQUFHLENBQUM7QUFTNUIsTUFBTSxPQUFPLHVCQUF1QjtJQXlJbEMsc0JBQXNCO0lBQ3RCLFlBQW1ELFNBQTRCO1FBQTVCLGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBeEl2RSxpQkFBWSxHQUFhLEVBQUUsQ0FBQztRQUc1QixpQkFBWSxHQUFZLEtBQUssQ0FBQyxDQUFDLHNDQUFzQztRQUU3RSxZQUFPLEdBQTZCLElBQUks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QU07c0JBRFQsS0FBSztnQkFVRixPQUFPO3NCQURWLEtBQUs7Z0JBVU4sS0FBSztzQkFESixLQUFLO2dCQUlOLE9BQU87c0JBRE4sS0FBSztnQkFJTixZQUFZO3NCQURYLE1BQU07Z0JBSVAsVUFBVTtzQkFEVCxNQUFNO2dCQUlQLFNBQVM7c0JBRFIsTUFBTTtnQkFJUCxTQUFTO3NCQURSLE1BQU07Z0JBSVAsUUFBUTtzQkFEUCxNQUFNO2dCQUlQLFVBQVU7c0JBRFQsTUFBTTtnQkFJUCxVQUFVO3NCQURULE1BQU07Z0JBSVAsUUFBUTtzQkFEUCxNQUFNO2dCQUlQLFFBQVE7c0JBRFAsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVbnR5cGVkRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBNQVRfS0VZQk9BUkRfREVBREtFWVMgfSBmcm9tICcuLi8uLi9jb25maWdzL2tleWJvYXJkLWRlYWRrZXkuY29uZmlnJztcclxuaW1wb3J0IHsgS2V5Ym9hcmRDbGFzc0tleSB9IGZyb20gJy4uLy4uL2VudW1zL2tleWJvYXJkLWNsYXNzLWtleS5lbnVtJztcclxuaW1wb3J0IHsgSUtleWJvYXJkRGVhZGtleXMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2tleWJvYXJkLWRlYWRrZXlzLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IElNYXRJY29uIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9rZXlib2FyZC1pY29ucy5pbnRlcmZhY2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFZBTFVFX05FV0xJTkUgPSAnXFxuXFxyJztcclxuZXhwb3J0IGNvbnN0IFZBTFVFX1NQQUNFID0gJyAnO1xyXG5leHBvcnQgY29uc3QgVkFMVUVfVEFCID0gJ1xcdCc7XHJcbmNvbnN0IFJFUEVBVF9USU1FT1VUID0gNTAwO1xyXG5jb25zdCBSRVBFQVRfSU5URVJWQUwgPSAxMDA7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21hdC1rZXlib2FyZC1rZXknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9rZXlib2FyZC1rZXkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2tleWJvYXJkLWtleS5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRLZXlib2FyZEtleUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgcHJpdmF0ZSBfZGVhZGtleUtleXM6IHN0cmluZ1tdID0gW107XHJcbiAgcHJpdmF0ZSBfcmVwZWF0VGltZW91dEhhbmRsZXI6IGFueTtcclxuICBwcml2YXRlIF9yZXBlYXRJbnRlcnZhbEhhbmRsZXI6IGFueTtcclxuICBwcml2YXRlIF9yZXBlYXRTdGF0ZTogYm9vbGVhbiA9IGZhbHNlOyAvLyB0cnVlIGlmIHJlcGVhdGluZywgZmFsc2UgaWYgd2FpdGluZ1xyXG5cclxuICBhY3RpdmUkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHJcbiAgcHJlc3NlZCQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGtleTogc3RyaW5nIHwgS2V5Ym9hcmRDbGFzc0tleTtcclxuXHJcbiAgQElucHV0KClcclxuICBpY29uOiBJTWF0SWNvbjtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgYWN0aXZlKGFjdGl2ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5hY3RpdmUkLm5leHQoYWN0aXZlKTtcclxuICB9XHJcblxyXG4gIGdldCBhY3RpdmUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5hY3RpdmUkLmdldFZhbHVlKCk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBwcmVzc2VkKHByZXNzZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMucHJlc3NlZCQubmV4dChwcmVzc2VkKTtcclxuICB9XHJcblxyXG4gIGdldCBwcmVzc2VkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMucHJlc3NlZCQuZ2V0VmFsdWUoKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgaW5wdXQ/OiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNvbnRyb2w/OiBVbnR5cGVkRm9ybUNvbnRyb2w7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIGdlbmVyaWNDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgZW50ZXJDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgYmtzcENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBjYXBzQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIGFsdENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBzaGlmdENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBzcGFjZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICB0YWJDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAga2V5Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gIGdldCBsb3dlcktleSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGAke3RoaXMua2V5fWAudG9Mb3dlckNhc2UoKTtcclxuICB9XHJcblxyXG4gIGdldCBjaGFyQ29kZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGAke3RoaXMua2V5fWAuY2hhckNvZGVBdCgwKTtcclxuICB9XHJcblxyXG4gIGdldCBpc0NsYXNzS2V5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMua2V5IGluIEtleWJvYXJkQ2xhc3NLZXk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNEZWFkS2V5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlYWRrZXlLZXlzLnNvbWUoKGRlYWRLZXk6IHN0cmluZykgPT4gZGVhZEtleSA9PT0gYCR7dGhpcy5rZXl9YCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaGFzSWNvbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmljb24gIT09IHVuZGVmaW5lZCAmJiB0aGlzLmljb24gIT09IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXQgaWNvbk5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmljb24ubmFtZSB8fCAnJztcclxuICB9XHJcblxyXG4gIGdldCBmb250U2V0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5pY29uLmZvbnRTZXQgfHwgJyc7XHJcbiAgfVxyXG5cclxuICBnZXQgZm9udEljb24oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmljb24uZm9udEljb24gfHwgJyc7XHJcbiAgfVxyXG5cclxuICBnZXQgc3ZnSWNvbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuaWNvbi5zdmdJY29uIHx8ICcnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNzc0NsYXNzKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gW107XHJcblxyXG4gICAgaWYgKHRoaXMuaGFzSWNvbikge1xyXG4gICAgICBjbGFzc2VzLnB1c2goJ21hdC1rZXlib2FyZC1rZXktbW9kaWZpZXInKTtcclxuICAgICAgY2xhc3Nlcy5wdXNoKGBtYXQta2V5Ym9hcmQta2V5LSR7dGhpcy5sb3dlcktleX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pc0RlYWRLZXkpIHtcclxuICAgICAgY2xhc3Nlcy5wdXNoKCdtYXQta2V5Ym9hcmQta2V5LWRlYWRrZXknKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgaW5wdXRWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMuY29udHJvbCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb250cm9sLnZhbHVlO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlucHV0ICYmIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCAmJiB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldCBpbnB1dFZhbHVlKGlucHV0VmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuY29udHJvbCkge1xyXG4gICAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUoaW5wdXRWYWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaW5wdXQgJiYgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9IGlucHV0VmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBJbmplY3QgZGVwZW5kZW5jaWVzXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChNQVRfS0VZQk9BUkRfREVBREtFWVMpIHByaXZhdGUgX2RlYWRrZXlzOiBJS2V5Ym9hcmREZWFka2V5cykgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gcmVhZCB0aGUgZGVhZGtleXNcclxuICAgIHRoaXMuX2RlYWRrZXlLZXlzID0gT2JqZWN0LmtleXModGhpcy5fZGVhZGtleXMpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmNhbmNlbFJlcGVhdCgpO1xyXG4gIH1cclxuXHJcbiAgb25DbGljayhldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgLy8gVHJpZ2dlciBnZW5lcmljIGNsaWNrIGV2ZW50XHJcbiAgICB0aGlzLmdlbmVyaWNDbGljay5lbWl0KGV2ZW50KTtcclxuXHJcbiAgICAvLyBEbyBub3QgZXhlY3V0ZSBrZXlwcmVzcyBpZiBrZXkgaXMgY3VycmVudGx5IHJlcGVhdGluZ1xyXG4gICAgaWYgKHRoaXMuX3JlcGVhdFN0YXRlKSB7IHJldHVybjsgfVxyXG5cclxuICAgIC8vIFRyaWdnZXIgYSBnbG9iYWwga2V5IGV2ZW50LiBUT0RPOiBpbnZlc3RpZ2F0ZVxyXG4gICAgLy8gdGhpcy5fdHJpZ2dlcktleUV2ZW50KCk7XHJcblxyXG4gICAgLy8gTWFuaXB1bGF0ZSB0aGUgZm9jdXNlZCBpbnB1dCAvIHRleHRhcmVhIHZhbHVlXHJcbiAgICBjb25zdCBjYXJldCA9IHRoaXMuaW5wdXQgPyB0aGlzLl9nZXRDdXJzb3JQb3NpdGlvbigpIDogMDtcclxuXHJcbiAgICBsZXQgY2hhcjogc3RyaW5nO1xyXG4gICAgc3dpdGNoICh0aGlzLmtleSkge1xyXG4gICAgICAvLyB0aGlzIGtleXMgaGF2ZSBubyBhY3Rpb25zIHlldFxyXG4gICAgICAvLyBUT0RPOiBhZGQgZGVhZGtleXMgYW5kIG1vZGlmaWVyc1xyXG4gICAgICBjYXNlIEtleWJvYXJkQ2xhc3NLZXkuQWx0OlxyXG4gICAgICBjYXNlIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3I6XHJcbiAgICAgIGNhc2UgS2V5Ym9hcmRDbGFzc0tleS5BbHRMazpcclxuICAgICAgICB0aGlzLmFsdENsaWNrLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBLZXlib2FyZENsYXNzS2V5LkJrc3A6XHJcbiAgICAgICAgdGhpcy5kZWxldGVTZWxlY3RlZFRleHQoKTtcclxuICAgICAgICB0aGlzLmJrc3BDbGljay5lbWl0KGV2ZW50KTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgS2V5Ym9hcmRDbGFzc0tleS5DYXBzOlxyXG4gICAgICAgIHRoaXMuY2Fwc0NsaWNrLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBLZXlib2FyZENsYXNzS2V5LkVudGVyOlxyXG4gICAgICAgIGlmICh0aGlzLl9pc1RleHRhcmVhKCkpIHtcclxuICAgICAgICAgIGNoYXIgPSBWQUxVRV9ORVdMSU5FO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmVudGVyQ2xpY2suZW1pdChldmVudCk7XHJcbiAgICAgICAgICAvLyBUT0RPOiB0cmlnZ2VyIHN1Ym1pdCAvIG9uU3VibWl0IC8gbmdTdWJtaXQgcHJvcGVybHkgKGZvciB0aGUgdGltZSBiZWluZyB0aGlzIGhhcyB0byBiZSBoYW5kbGVkIGJ5IHRoZSB1c2VyIGhpbXNlbGYpXHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNvbnRyb2wubmdDb250cm9sLmNvbnRyb2wucm9vdClcclxuICAgICAgICAgIC8vIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5mb3JtLnN1Ym1pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdDpcclxuICAgICAgICB0aGlzLnNoaWZ0Q2xpY2suZW1pdChldmVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2U6XHJcbiAgICAgICAgY2hhciA9IFZBTFVFX1NQQUNFO1xyXG4gICAgICAgIHRoaXMuc3BhY2VDbGljay5lbWl0KGV2ZW50KTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgS2V5Ym9hcmRDbGFzc0tleS5UYWI6XHJcbiAgICAgICAgY2hhciA9IFZBTFVFX1RBQjtcclxuICAgICAgICB0aGlzLnRhYkNsaWNrLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICAvLyB0aGUga2V5IGlzIG5vdCBtYXBwZWQgb3IgYSBzdHJpbmdcclxuICAgICAgICBjaGFyID0gYCR7dGhpcy5rZXl9YDtcclxuICAgICAgICB0aGlzLmtleUNsaWNrLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFyICYmIHRoaXMuaW5wdXQpIHtcclxuICAgICAgdGhpcy5yZXBsYWNlU2VsZWN0ZWRUZXh0KGNoYXIpO1xyXG4gICAgICB0aGlzLl9zZXRDdXJzb3JQb3NpdGlvbihjYXJldCArIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERpc3BhdGNoIElucHV0IEV2ZW50IGZvciBBbmd1bGFyIHRvIHJlZ2lzdGVyIGEgY2hhbmdlXHJcbiAgICBpZiAodGhpcy5pbnB1dCAmJiB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpbnB1dCcsIHsgYnViYmxlczogdHJ1ZSB9KSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gSGFuZGxlIHJlcGVhdGluZyBrZXlzLiBLZXlwcmVzcyBsb2dpYyBkZXJpdmVkIGZyb20gb25DbGljaygpXHJcbiAgb25Qb2ludGVyRG93bigpIHtcclxuICAgIHRoaXMuY2FuY2VsUmVwZWF0KCk7XHJcbiAgICB0aGlzLl9yZXBlYXRTdGF0ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5fcmVwZWF0VGltZW91dEhhbmRsZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgLy8gSW5pdGlhbGl6ZSBrZXlwcmVzcyB2YXJpYWJsZXNcclxuICAgICAgbGV0IGNoYXI6IHN0cmluZztcclxuICAgICAgbGV0IGtleUZuOiAoKSA9PiB2b2lkO1xyXG5cclxuICAgICAgc3dpdGNoICh0aGlzLmtleSkge1xyXG4gICAgICAgIC8vIElnbm9yZSBub24tcmVwZWF0aW5nIGtleXNcclxuICAgICAgICBjYXNlIEtleWJvYXJkQ2xhc3NLZXkuQWx0OlxyXG4gICAgICAgIGNhc2UgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcjpcclxuICAgICAgICBjYXNlIEtleWJvYXJkQ2xhc3NLZXkuQWx0TGs6XHJcbiAgICAgICAgY2FzZSBLZXlib2FyZENsYXNzS2V5LkNhcHM6XHJcbiAgICAgICAgY2FzZSBLZXlib2FyZENsYXNzS2V5LkVudGVyOlxyXG4gICAgICAgIGNhc2UgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdDpcclxuICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgY2FzZSBLZXlib2FyZENsYXNzS2V5LkJrc3A6XHJcbiAgICAgICAgICBrZXlGbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kZWxldGVTZWxlY3RlZFRleHQoKTtcclxuICAgICAgICAgICAgdGhpcy5ia3NwQ2xpY2suZW1pdCgpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2U6XHJcbiAgICAgICAgICBjaGFyID0gVkFMVUVfU1BBQ0U7XHJcbiAgICAgICAgICBrZXlGbiA9ICgpID0+IHRoaXMuc3BhY2VDbGljay5lbWl0KCk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBLZXlib2FyZENsYXNzS2V5LlRhYjpcclxuICAgICAgICAgIGNoYXIgPSBWQUxVRV9UQUI7XHJcbiAgICAgICAgICBrZXlGbiA9ICgpID0+IHRoaXMudGFiQ2xpY2suZW1pdCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBjaGFyID0gYCR7dGhpcy5rZXl9YDtcclxuICAgICAgICAgIGtleUZuID0gKCkgPT4gdGhpcy5rZXlDbGljay5lbWl0KCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gRXhlY3V0ZSByZXBlYXRpbmcga2V5cHJlc3NcclxuICAgICAgdGhpcy5fcmVwZWF0SW50ZXJ2YWxIYW5kbGVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhcmV0ID0gdGhpcy5pbnB1dCA/IHRoaXMuX2dldEN1cnNvclBvc2l0aW9uKCkgOiAwO1xyXG4gICAgICAgIHRoaXMuX3JlcGVhdFN0YXRlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKGtleUZuKSB7IGtleUZuKCk7IH1cclxuXHJcbiAgICAgICAgaWYgKGNoYXIgJiYgdGhpcy5pbnB1dCkge1xyXG4gICAgICAgICAgdGhpcy5yZXBsYWNlU2VsZWN0ZWRUZXh0KGNoYXIpO1xyXG4gICAgICAgICAgdGhpcy5fc2V0Q3Vyc29yUG9zaXRpb24oY2FyZXQgKyAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlucHV0ICYmIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2lucHV0JywgeyBidWJibGVzOiB0cnVlIH0pKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBSRVBFQVRfSU5URVJWQUwpO1xyXG4gICAgfSwgUkVQRUFUX1RJTUVPVVQpO1xyXG4gIH1cclxuXHJcbiAgY2FuY2VsUmVwZWF0KCkge1xyXG4gICAgaWYgKHRoaXMuX3JlcGVhdFRpbWVvdXRIYW5kbGVyKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9yZXBlYXRUaW1lb3V0SGFuZGxlcik7XHJcbiAgICAgIHRoaXMuX3JlcGVhdFRpbWVvdXRIYW5kbGVyID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fcmVwZWF0SW50ZXJ2YWxIYW5kbGVyKSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fcmVwZWF0SW50ZXJ2YWxIYW5kbGVyKTtcclxuICAgICAgdGhpcy5fcmVwZWF0SW50ZXJ2YWxIYW5kbGVyID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVsZXRlU2VsZWN0ZWRUZXh0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmlucHV0VmFsdWUgPyB0aGlzLmlucHV0VmFsdWUudG9TdHJpbmcoKSA6ICcnO1xyXG4gICAgbGV0IGNhcmV0ID0gdGhpcy5pbnB1dCA/IHRoaXMuX2dldEN1cnNvclBvc2l0aW9uKCkgOiAwO1xyXG4gICAgbGV0IHNlbGVjdGlvbkxlbmd0aCA9IHRoaXMuX2dldFNlbGVjdGlvbkxlbmd0aCgpO1xyXG4gICAgaWYgKHNlbGVjdGlvbkxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBpZiAoY2FyZXQgPT09IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhcmV0LS07XHJcbiAgICAgIHNlbGVjdGlvbkxlbmd0aCA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGVhZFBhcnQgPSB2YWx1ZS5zbGljZSgwLCBjYXJldCk7XHJcbiAgICBjb25zdCBlbmRQYXJ0ID0gdmFsdWUuc2xpY2UoY2FyZXQgKyBzZWxlY3Rpb25MZW5ndGgpO1xyXG5cclxuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IFtoZWFkUGFydCwgZW5kUGFydF0uam9pbignJyk7XHJcbiAgICB0aGlzLl9zZXRDdXJzb3JQb3NpdGlvbihjYXJldCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlcGxhY2VTZWxlY3RlZFRleHQoY2hhcjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5wdXRWYWx1ZSA/IHRoaXMuaW5wdXRWYWx1ZS50b1N0cmluZygpIDogJyc7XHJcbiAgICBjb25zdCBjYXJldCA9IHRoaXMuaW5wdXQgPyB0aGlzLl9nZXRDdXJzb3JQb3NpdGlvbigpIDogMDtcclxuICAgIGNvbnN0IHNlbGVjdGlvbkxlbmd0aCA9IHRoaXMuX2dldFNlbGVjdGlvbkxlbmd0aCgpO1xyXG4gICAgY29uc3QgaGVhZFBhcnQgPSB2YWx1ZS5zbGljZSgwLCBjYXJldCk7XHJcbiAgICBjb25zdCBlbmRQYXJ0ID0gdmFsdWUuc2xpY2UoY2FyZXQgKyBzZWxlY3Rpb25MZW5ndGgpO1xyXG5cclxuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IFtoZWFkUGFydCwgY2hhciwgZW5kUGFydF0uam9pbignJyk7XHJcbiAgfVxyXG5cclxuICAvLyBUT0RPOiBJbmNsdWRlIGZvciByZXBlYXRpbmcga2V5cyBhcyB3ZWxsIChpZiB0aGlzIGdldHMgaW1wbGVtZW50ZWQpXHJcbiAgLy8gcHJpdmF0ZSBfdHJpZ2dlcktleUV2ZW50KCk6IEV2ZW50IHtcclxuICAvLyAgIGNvbnN0IGtleWJvYXJkRXZlbnQgPSBuZXcgS2V5Ym9hcmRFdmVudCgna2V5ZG93bicpO1xyXG4gIC8vICAgLy9cclxuICAvLyAgIC8vIGtleWJvYXJkRXZlbnRbaW5pdE1ldGhvZF0oXHJcbiAgLy8gICAvLyAgIHRydWUsIC8vIGJ1YmJsZXNcclxuICAvLyAgIC8vICAgdHJ1ZSwgLy8gY2FuY2VsYWJsZVxyXG4gIC8vICAgLy8gICB3aW5kb3csIC8vIHZpZXdBcmc6IHNob3VsZCBiZSB3aW5kb3dcclxuICAvLyAgIC8vICAgZmFsc2UsIC8vIGN0cmxLZXlBcmdcclxuICAvLyAgIC8vICAgZmFsc2UsIC8vIGFsdEtleUFyZ1xyXG4gIC8vICAgLy8gICBmYWxzZSwgLy8gc2hpZnRLZXlBcmdcclxuICAvLyAgIC8vICAgZmFsc2UsIC8vIG1ldGFLZXlBcmdcclxuICAvLyAgIC8vICAgdGhpcy5jaGFyQ29kZSwgLy8ga2V5Q29kZUFyZyA6IHVuc2lnbmVkIGxvbmcgLSB0aGUgdmlydHVhbCBrZXkgY29kZSwgZWxzZSAwXHJcbiAgLy8gICAvLyAgIDAgLy8gY2hhckNvZGVBcmdzIDogdW5zaWduZWQgbG9uZyAtIHRoZSBVbmljb2RlIGNoYXJhY3RlciBhc3NvY2lhdGVkIHdpdGggdGhlIGRlcHJlc3NlZCBrZXksIGVsc2UgMFxyXG4gIC8vICAgLy8gKTtcclxuICAvLyAgIC8vXHJcbiAgLy8gICAvLyB3aW5kb3cuZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChrZXlib2FyZEV2ZW50KTtcclxuXHJcbiAgLy8gICByZXR1cm4ga2V5Ym9hcmRFdmVudDtcclxuICAvLyB9XHJcblxyXG4gIC8vIGluc3BpcmVkIGJ5OlxyXG4gIC8vIHJlZiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjg5NzUxMC8xMTQ2MjA3XHJcbiAgcHJpdmF0ZSBfZ2V0Q3Vyc29yUG9zaXRpb24oKTogbnVtYmVyIHtcclxuICAgIGlmICghdGhpcy5pbnB1dCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCdzZWxlY3Rpb25TdGFydCcgaW4gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgIC8vIFN0YW5kYXJkLWNvbXBsaWFudCBicm93c2Vyc1xyXG4gICAgICByZXR1cm4gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgfSBlbHNlIGlmICgnc2VsZWN0aW9uJyBpbiB3aW5kb3cuZG9jdW1lbnQpIHtcclxuICAgICAgLy8gSUVcclxuICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGlvbjogYW55ID0gd2luZG93LmRvY3VtZW50WydzZWxlY3Rpb24nXTtcclxuICAgICAgY29uc3Qgc2VsID0gc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCk7XHJcbiAgICAgIGNvbnN0IHNlbExlbiA9IHNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpLnRleHQubGVuZ3RoO1xyXG4gICAgICBzZWwubW92ZVN0YXJ0KCdjaGFyYWN0ZXInLCAtdGhpcy5jb250cm9sLnZhbHVlLmxlbmd0aCk7XHJcblxyXG4gICAgICByZXR1cm4gc2VsLnRleHQubGVuZ3RoIC0gc2VsTGVuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0U2VsZWN0aW9uTGVuZ3RoKCk6IG51bWJlciB7XHJcbiAgICBpZiAoIXRoaXMuaW5wdXQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgnc2VsZWN0aW9uRW5kJyBpbiB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgLy8gU3RhbmRhcmQtY29tcGxpYW50IGJyb3dzZXJzXHJcbiAgICAgIHJldHVybiB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kIC0gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgnc2VsZWN0aW9uJyBpbiB3aW5kb3cuZG9jdW1lbnQpIHtcclxuICAgICAgLy8gSUVcclxuICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGlvbjogYW55ID0gd2luZG93LmRvY3VtZW50WydzZWxlY3Rpb24nXTtcclxuICAgICAgcmV0dXJuIHNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpLnRleHQubGVuZ3RoO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gaW5zcGlyZWQgYnk6XHJcbiAgLy8gcmVmIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xMjUxODczNy8xMTQ2MjA3XHJcbiAgLy8gdHNsaW50OmRpc2FibGUgb25lLWxpbmVcclxuICBwcml2YXRlIF9zZXRDdXJzb3JQb3NpdGlvbihwb3NpdGlvbjogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMuaW5wdXQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMuY29udHJvbC52YWx1ZTtcclxuICAgIC8vIF4gdGhpcyBpcyB1c2VkIHRvIG5vdCBvbmx5IGdldCBcImZvY3VzXCIsIGJ1dFxyXG4gICAgLy8gdG8gbWFrZSBzdXJlIHdlIGRvbid0IGhhdmUgaXQgZXZlcnl0aGluZyAtc2VsZWN0ZWQtXHJcbiAgICAvLyAoaXQgY2F1c2VzIGFuIGlzc3VlIGluIGNocm9tZSwgYW5kIGhhdmluZyBpdCBkb2Vzbid0IGh1cnQgYW55IG90aGVyIGJyb3dzZXIpXHJcblxyXG4gICAgaWYgKCdjcmVhdGVUZXh0UmFuZ2UnIGluIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICBjb25zdCByYW5nZSA9IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5jcmVhdGVUZXh0UmFuZ2UoKTtcclxuICAgICAgcmFuZ2UubW92ZSgnY2hhcmFjdGVyJywgcG9zaXRpb24pO1xyXG4gICAgICByYW5nZS5zZWxlY3QoKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyAoZWwuc2VsZWN0aW9uU3RhcnQgPT09IDAgYWRkZWQgZm9yIEZpcmVmb3ggYnVnKVxyXG4gICAgICBpZiAodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0IHx8IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShwb3NpdGlvbiwgcG9zaXRpb24pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGZhaWwgY2l0eSwgZm9ydHVuYXRlbHkgdGhpcyBuZXZlciBoYXBwZW5zIChhcyBmYXIgYXMgSSd2ZSB0ZXN0ZWQpIDopXHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaXNUZXh0YXJlYSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlucHV0ICYmIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCAmJiB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJztcclxuICB9XHJcblxyXG59XHJcbiIsIjxidXR0b24gbWF0LXJhaXNlZC1idXR0b25cclxuICAgICAgICBjbGFzcz1cIm1hdC1rZXlib2FyZC1rZXlcIlxyXG4gICAgICAgIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgICAgIFtjbGFzcy5tYXQta2V5Ym9hcmQta2V5LWFjdGl2ZV09XCJhY3RpdmUkIHwgYXN5bmNcIlxyXG4gICAgICAgIFtjbGFzcy5tYXQta2V5Ym9hcmQta2V5LXByZXNzZWRdPVwicHJlc3NlZCQgfCBhc3luY1wiXHJcbiAgICAgICAgW25nQ2xhc3NdPVwiY3NzQ2xhc3NcIlxyXG4gICAgICAgIChjbGljayk9XCJvbkNsaWNrKCRldmVudClcIlxyXG4gICAgICAgIChwb2ludGVyZG93bik9XCJvblBvaW50ZXJEb3duKClcIlxyXG4gICAgICAgIChwb2ludGVybGVhdmUpPVwiY2FuY2VsUmVwZWF0KClcIlxyXG4gICAgICAgIChwb2ludGVydXApPVwiY2FuY2VsUmVwZWF0KClcIlxyXG4+XHJcbiAgPG1hdC1pY29uICpuZ0lmPVwiaGFzSWNvbjsgZWxzZSBub0ljb25cIiBbZm9udFNldF09XCJmb250U2V0XCIgW2ZvbnRJY29uXT1cImZvbnRJY29uXCIgW3N2Z0ljb25dPVwic3ZnSWNvblwiPnt7IGljb25OYW1lIH19PC9tYXQtaWNvbj5cclxuICA8bmctdGVtcGxhdGUgI25vSWNvbj57eyBrZXkgfX08L25nLXRlbXBsYXRlPlxyXG48L2J1dHRvbj5cclxuIl19
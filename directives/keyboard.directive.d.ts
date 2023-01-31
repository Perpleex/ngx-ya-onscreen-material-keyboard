import { ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatKeyboardService } from '../services/keyboard.service';
import * as i0 from "@angular/core";
export declare class MatKeyboardDirective implements OnDestroy {
    private _elementRef;
    private _keyboardService;
    private _control?;
    private _keyboardRef;
    matKeyboard: string;
    darkTheme: boolean;
    duration: number;
    isDebug: boolean;
    enterClick: EventEmitter<void>;
    capsClick: EventEmitter<void>;
    altClick: EventEmitter<void>;
    shiftClick: EventEmitter<void>;
    constructor(_elementRef: ElementRef, _keyboardService: MatKeyboardService, _control?: NgControl);
    ngOnDestroy(): void;
    showKeyboard(): void;
    hideKeyboard(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatKeyboardDirective, [null, null, { optional: true; self: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MatKeyboardDirective, "input[matKeyboard], textarea[matKeyboard]", never, { "matKeyboard": "matKeyboard"; "darkTheme": "darkTheme"; "duration": "duration"; "isDebug": "isDebug"; }, { "enterClick": "enterClick"; "capsClick": "capsClick"; "altClick": "altClick"; "shiftClick": "shiftClick"; }, never, never, false>;
}

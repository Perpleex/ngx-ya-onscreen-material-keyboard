import { animate, state, style, transition, trigger } from '@angular/animations';
import { BasePortalOutlet, CdkPortalOutlet } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, HostListener, NgZone, ViewChild } from '@angular/core';
import { AnimationCurves, AnimationDurations } from '@angular/material/core';
import { Subject } from 'rxjs';
import { first } from 'rxjs/operators';
import { KeyboardAnimationState } from '../../enums/keyboard-animation-state.enum';
import { KeyboardAnimationTransition } from '../../enums/keyboard-animation-transition.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/portal";
// TODO: we can't use constants from animation.ts here because you can't use
// a text interpolation in anything that is analyzed statically with ngc (for AoT compile).
export const SHOW_ANIMATION = `${AnimationDurations.ENTERING} ${AnimationCurves.DECELERATION_CURVE}`;
export const HIDE_ANIMATION = `${AnimationDurations.EXITING} ${AnimationCurves.ACCELERATION_CURVE}`;
/**
 * Internal component that wraps user-provided keyboard content.
 * @docs-private
 */
export class MatKeyboardContainerComponent extends BasePortalOutlet {
    constructor(_ngZone, _changeDetectorRef) {
        super();
        this._ngZone = _ngZone;
        this._changeDetectorRef = _changeDetectorRef;
        /** Whether the component has been destroyed. */
        this._destroyed = false;
        /** The state of the keyboard animations. */
        this._animationState = KeyboardAnimationState.Void;
        /** Subject for notifying that the keyboard has exited from view. */
        this.onExit = new Subject();
        /** Subject for notifying that the keyboard has finished entering the view. */
        this.onEnter = new Subject();
        this.attrRole = 'alert';
    }
    onMousedown(event) {
        event.preventDefault();
    }
    /** Attach a component portal as content to this keyboard container. */
    attachComponentPortal(portal) {
        if (this._portalOutlet.hasAttached()) {
            throw Error('Attempting to attach keyboard content after content is already attached');
        }
        return this._portalOutlet.attachComponentPortal(portal);
    }
    // Attach a template portal as content to this keyboard container
    attachTemplatePortal() {
        throw Error('Not yet implemented');
    }
    /** Handle end of animations, updating the state of the keyboard. */
    onAnimationEnd(event) {
        const { fromState, toState } = event;
        if ((toState === KeyboardAnimationState.Void && fromState !== KeyboardAnimationState.Void) || toState.startsWith('hidden')) {
            this._completeExit();
        }
        if (toState === KeyboardAnimationState.Visible) {
            // Note: we shouldn't use `this` inside the zone callback,
            // because it can cause a memory leak.
            const onEnter = this.onEnter;
            this._ngZone.run(() => {
                onEnter.next();
                onEnter.complete();
            });
        }
    }
    /** Begin animation of keyboard entrance into view. */
    enter() {
        if (!this._destroyed) {
            this._animationState = KeyboardAnimationState.Visible;
            this._changeDetectorRef.detectChanges();
        }
    }
    /** Begin animation of the snack bar exiting from view. */
    exit() {
        this._animationState = KeyboardAnimationState.Hidden;
        return this.onExit;
    }
    /**
     * Makes sure the exit callbacks have been invoked when the element is destroyed.
     */
    ngOnDestroy() {
        this._destroyed = true;
        this._completeExit();
    }
    /**
     * Waits for the zone to settle before removing the element. Helps prevent
     * errors where we end up removing an element which is in the middle of an animation.
     */
    _completeExit() {
        this._ngZone.onMicrotaskEmpty
            .asObservable()
            .pipe(first())
            .subscribe(() => {
            this.onExit.next();
            this.onExit.complete();
        });
    }
}
MatKeyboardContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MatKeyboardContainerComponent, deps: [{ token: i0.NgZone }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
MatKeyboardContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: MatKeyboardContainerComponent, selector: "mat-keyboard-container", host: { listeners: { "mousedown": "onMousedown($event)", "@state.done": "onAnimationEnd($event)" }, properties: { "@state": "this._animationState", "attr.role": "this.attrRole" } }, viewQueries: [{ propertyName: "_portalOutlet", first: true, predicate: CdkPortalOutlet, descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<ng-template cdkPortalHost></ng-template>\r\n", styles: [":host{box-shadow:0 3px 5px -1px #0003,0 6px 10px #00000024,0 1px 18px #0000001f;border-radius:2px;box-sizing:border-box;display:block;margin:0 auto;max-width:960px;min-width:568px;transform:translateY(100%)}.cdk-high-contrast-active :host{border:solid 1px}.cdk-high-contrast-active :host :host{border:solid 1px}\n"], dependencies: [{ kind: "directive", type: i1.PortalHostDirective, selector: "[cdkPortalHost], [portalHost]", inputs: ["cdkPortalHost"], exportAs: ["cdkPortalHost"] }], animations: [
        trigger('state', [
            state(`${KeyboardAnimationState.Visible}`, style({ transform: 'translateY(0%)' })),
            transition(`${KeyboardAnimationTransition.Hide}`, animate(HIDE_ANIMATION)),
            transition(`${KeyboardAnimationTransition.Show}`, animate(SHOW_ANIMATION))
        ])
    ], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MatKeyboardContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mat-keyboard-container', changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, animations: [
                        trigger('state', [
                            state(`${KeyboardAnimationState.Visible}`, style({ transform: 'translateY(0%)' })),
                            transition(`${KeyboardAnimationTransition.Hide}`, animate(HIDE_ANIMATION)),
                            transition(`${KeyboardAnimationTransition.Show}`, animate(SHOW_ANIMATION))
                        ])
                    ], template: "<ng-template cdkPortalHost></ng-template>\r\n", styles: [":host{box-shadow:0 3px 5px -1px #0003,0 6px 10px #00000024,0 1px 18px #0000001f;border-radius:2px;box-sizing:border-box;display:block;margin:0 auto;max-width:960px;min-width:568px;transform:translateY(100%)}.cdk-high-contrast-active :host{border:solid 1px}.cdk-high-contrast-active :host :host{border:solid 1px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.NgZone }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { _portalOutlet: [{
                type: ViewChild,
                args: [CdkPortalOutlet, { static: true }]
            }], _animationState: [{
                type: HostBinding,
                args: ['@state']
            }], attrRole: [{
                type: HostBinding,
                args: ['attr.role']
            }], onMousedown: [{
                type: HostListener,
                args: ['mousedown', ['$event']]
            }], onAnimationEnd: [{
                type: HostListener,
                args: ['@state.done', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb3JlL3NyYy9jb21wb25lbnRzL2tleWJvYXJkLWNvbnRhaW5lci9rZXlib2FyZC1jb250YWluZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vc3JjL2NvcmUvc3JjL2NvbXBvbmVudHMva2V5Ym9hcmQtY29udGFpbmVyL2tleWJvYXJkLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFrQixLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFtQixNQUFNLHFCQUFxQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQWlDLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5SyxPQUFPLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0UsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7OztBQUU3Riw0RUFBNEU7QUFDNUUsMkZBQTJGO0FBQzNGLE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxHQUFHLGtCQUFrQixDQUFDLFFBQVEsSUFBSSxlQUFlLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztBQUNyRyxNQUFNLENBQUMsTUFBTSxj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ckIsUUFBUTtzQkFEUCxXQUFXO3VCQUFDLFdBQVc7Z0JBWXhCLFdBQVc7c0JBRFYsWUFBWTt1QkFBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBcUJyQyxjQUFjO3NCQURiLFlBQVk7dUJBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgQW5pbWF0aW9uRXZlbnQsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBCYXNlUG9ydGFsT3V0bGV0LCBDZGtQb3J0YWxPdXRsZXQsIENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgQ29tcG9uZW50UmVmLCBFbWJlZGRlZFZpZXdSZWYsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIE5nWm9uZSwgT25EZXN0cm95LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmVzLCBBbmltYXRpb25EdXJhdGlvbnMgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTWF0S2V5Ym9hcmRDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWdzL2tleWJvYXJkLmNvbmZpZyc7XHJcbmltcG9ydCB7IEtleWJvYXJkQW5pbWF0aW9uU3RhdGUgfSBmcm9tICcuLi8uLi9lbnVtcy9rZXlib2FyZC1hbmltYXRpb24tc3RhdGUuZW51bSc7XHJcbmltcG9ydCB7IEtleWJvYXJkQW5pbWF0aW9uVHJhbnNpdGlvbiB9IGZyb20gJy4uLy4uL2VudW1zL2tleWJvYXJkLWFuaW1hdGlvbi10cmFuc2l0aW9uLmVudW0nO1xyXG5cclxuLy8gVE9ETzogd2UgY2FuJ3QgdXNlIGNvbnN0YW50cyBmcm9tIGFuaW1hdGlvbi50cyBoZXJlIGJlY2F1c2UgeW91IGNhbid0IHVzZVxyXG4vLyBhIHRleHQgaW50ZXJwb2xhdGlvbiBpbiBhbnl0aGluZyB0aGF0IGlzIGFuYWx5emVkIHN0YXRpY2FsbHkgd2l0aCBuZ2MgKGZvciBBb1QgY29tcGlsZSkuXHJcbmV4cG9ydCBjb25zdCBTSE9XX0FOSU1BVElPTiA9IGAke0FuaW1hdGlvbkR1cmF0aW9ucy5FTlRFUklOR30gJHtBbmltYXRpb25DdXJ2ZXMuREVDRUxFUkFUSU9OX0NVUlZFfWA7XHJcbmV4cG9ydCBjb25zdCBISURFX0FOSU1BVElPTiA9IGAke0FuaW1hdGlvbkR1cmF0aW9ucy5FWElUSU5HfSAke0FuaW1hdGlvbkN1cnZlcy5BQ0NFTEVSQVRJT05fQ1VSVkV9YDtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcm5hbCBjb21wb25lbnQgdGhhdCB3cmFwcyB1c2VyLXByb3ZpZGVkIGtleWJvYXJkIGNvbnRlbnQuXHJcbiAqIEBkb2NzLXByaXZhdGVcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWF0LWtleWJvYXJkLWNvbnRhaW5lcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2tleWJvYXJkLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4va2V5Ym9hcmQtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgLy8gYW5pbWF0aW9uczogW1xyXG4gIC8vICAgdHJpZ2dlcignc3RhdGUnLCBbXHJcbiAgLy8gICAgIHN0YXRlKCd2aXNpYmxlJywgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCUpJ30pKSxcclxuICAvLyAgICAgdHJhbnNpdGlvbigndmlzaWJsZSA9PiBoaWRkZW4nLCBhbmltYXRlKEhJREVfQU5JTUFUSU9OKSksXHJcbiAgLy8gICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gdmlzaWJsZScsIGFuaW1hdGUoU0hPV19BTklNQVRJT04pKSxcclxuICAvLyAgIF0pXHJcbiAgLy8gXVxyXG4gIGFuaW1hdGlvbnM6IFtcclxuICAgIHRyaWdnZXIoJ3N0YXRlJywgW1xyXG4gICAgICBzdGF0ZShgJHtLZXlib2FyZEFuaW1hdGlvblN0YXRlLlZpc2libGV9YCwgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDAlKScgfSkpLFxyXG4gICAgICB0cmFuc2l0aW9uKGAke0tleWJvYXJkQW5pbWF0aW9uVHJhbnNpdGlvbi5IaWRlfWAsIGFuaW1hdGUoSElERV9BTklNQVRJT04pKSxcclxuICAgICAgdHJhbnNpdGlvbihgJHtLZXlib2FyZEFuaW1hdGlvblRyYW5zaXRpb24uU2hvd31gLCBhbmltYXRlKFNIT1dfQU5JTUFUSU9OKSlcclxuICAgIF0pXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0S2V5Ym9hcmRDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlUG9ydGFsT3V0bGV0IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBkZXN0cm95ZWQuICovXHJcbiAgcHJpdmF0ZSBfZGVzdHJveWVkID0gZmFsc2U7XHJcblxyXG4gIC8qKiBUaGUgcG9ydGFsIG91dGxldCBpbnNpZGUgb2YgdGhpcyBjb250YWluZXIgaW50byB3aGljaCB0aGUga2V5Ym9hcmQgY29udGVudCB3aWxsIGJlIGxvYWRlZC4gKi9cclxuICBAVmlld0NoaWxkKENka1BvcnRhbE91dGxldCwgeyBzdGF0aWM6IHRydWUgfSlcclxuICBwcml2YXRlIF9wb3J0YWxPdXRsZXQ6IENka1BvcnRhbE91dGxldDtcclxuXHJcbiAgLyoqIFRoZSBzdGF0ZSBvZiB0aGUga2V5Ym9hcmQgYW5pbWF0aW9ucy4gKi9cclxuICBASG9zdEJpbmRpbmcoJ0BzdGF0ZScpXHJcbiAgX2FuaW1hdGlvblN0YXRlOiBLZXlib2FyZEFuaW1hdGlvblN0YXRlID0gS2V5Ym9hcmRBbmltYXRpb25TdGF0ZS5Wb2lkO1xyXG5cclxuICAvKiogU3ViamVjdCBmb3Igbm90aWZ5aW5nIHRoYXQgdGhlIGtleWJvYXJkIGhhcyBleGl0ZWQgZnJvbSB2aWV3LiAqL1xyXG4gIG9uRXhpdDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgLyoqIFN1YmplY3QgZm9yIG5vdGlmeWluZyB0aGF0IHRoZSBrZXlib2FyZCBoYXMgZmluaXNoZWQgZW50ZXJpbmcgdGhlIHZpZXcuICovXHJcbiAgb25FbnRlcjogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxyXG4gIGF0dHJSb2xlID0gJ2FsZXJ0JztcclxuXHJcbiAgLy8gdGhlIGtleWJvYXJkIGNvbmZpZ3VyYXRpb25cclxuICBrZXlib2FyZENvbmZpZzogTWF0S2V5Ym9hcmRDb25maWc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25nWm9uZTogTmdab25lLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pXHJcbiAgb25Nb3VzZWRvd24oZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICAvKiogQXR0YWNoIGEgY29tcG9uZW50IHBvcnRhbCBhcyBjb250ZW50IHRvIHRoaXMga2V5Ym9hcmQgY29udGFpbmVyLiAqL1xyXG4gIGF0dGFjaENvbXBvbmVudFBvcnRhbDxUPihwb3J0YWw6IENvbXBvbmVudFBvcnRhbDxUPik6IENvbXBvbmVudFJlZjxUPiB7XHJcbiAgICBpZiAodGhpcy5fcG9ydGFsT3V0bGV0Lmhhc0F0dGFjaGVkKCkpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ0F0dGVtcHRpbmcgdG8gYXR0YWNoIGtleWJvYXJkIGNvbnRlbnQgYWZ0ZXIgY29udGVudCBpcyBhbHJlYWR5IGF0dGFjaGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX3BvcnRhbE91dGxldC5hdHRhY2hDb21wb25lbnRQb3J0YWwocG9ydGFsKTtcclxuICB9XHJcblxyXG4gIC8vIEF0dGFjaCBhIHRlbXBsYXRlIHBvcnRhbCBhcyBjb250ZW50IHRvIHRoaXMga2V5Ym9hcmQgY29udGFpbmVyXHJcbiAgYXR0YWNoVGVtcGxhdGVQb3J0YWwoKTogRW1iZWRkZWRWaWV3UmVmPGFueT4ge1xyXG4gICAgdGhyb3cgRXJyb3IoJ05vdCB5ZXQgaW1wbGVtZW50ZWQnKTtcclxuICB9XHJcblxyXG4gIC8qKiBIYW5kbGUgZW5kIG9mIGFuaW1hdGlvbnMsIHVwZGF0aW5nIHRoZSBzdGF0ZSBvZiB0aGUga2V5Ym9hcmQuICovXHJcbiAgQEhvc3RMaXN0ZW5lcignQHN0YXRlLmRvbmUnLCBbJyRldmVudCddKVxyXG4gIG9uQW5pbWF0aW9uRW5kKGV2ZW50OiBBbmltYXRpb25FdmVudCkge1xyXG4gICAgY29uc3QgeyBmcm9tU3RhdGUsIHRvU3RhdGUgfSA9IGV2ZW50O1xyXG5cclxuICAgIGlmICgodG9TdGF0ZSA9PT0gS2V5Ym9hcmRBbmltYXRpb25TdGF0ZS5Wb2lkICYmIGZyb21TdGF0ZSAhPT0gS2V5Ym9hcmRBbmltYXRpb25TdGF0ZS5Wb2lkKSB8fCB0b1N0YXRlLnN0YXJ0c1dpdGgoJ2hpZGRlbicpKSB7XHJcbiAgICAgIHRoaXMuX2NvbXBsZXRlRXhpdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0b1N0YXRlID09PSBLZXlib2FyZEFuaW1hdGlvblN0YXRlLlZpc2libGUpIHtcclxuICAgICAgLy8gTm90ZTogd2Ugc2hvdWxkbid0IHVzZSBgdGhpc2AgaW5zaWRlIHRoZSB6b25lIGNhbGxiYWNrLFxyXG4gICAgICAvLyBiZWNhdXNlIGl0IGNhbiBjYXVzZSBhIG1lbW9yeSBsZWFrLlxyXG4gICAgICBjb25zdCBvbkVudGVyID0gdGhpcy5vbkVudGVyO1xyXG5cclxuICAgICAgdGhpcy5fbmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgb25FbnRlci5uZXh0KCk7XHJcbiAgICAgICAgb25FbnRlci5jb21wbGV0ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBCZWdpbiBhbmltYXRpb24gb2Yga2V5Ym9hcmQgZW50cmFuY2UgaW50byB2aWV3LiAqL1xyXG4gIGVudGVyKCkge1xyXG4gICAgaWYgKCF0aGlzLl9kZXN0cm95ZWQpIHtcclxuICAgICAgdGhpcy5fYW5pbWF0aW9uU3RhdGUgPSBLZXlib2FyZEFuaW1hdGlvblN0YXRlLlZpc2libGU7XHJcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBCZWdpbiBhbmltYXRpb24gb2YgdGhlIHNuYWNrIGJhciBleGl0aW5nIGZyb20gdmlldy4gKi9cclxuICBleGl0KCk6IE9ic2VydmFibGU8dm9pZD4ge1xyXG4gICAgdGhpcy5fYW5pbWF0aW9uU3RhdGUgPSBLZXlib2FyZEFuaW1hdGlvblN0YXRlLkhpZGRlbjtcclxuICAgIHJldHVybiB0aGlzLm9uRXhpdDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1ha2VzIHN1cmUgdGhlIGV4aXQgY2FsbGJhY2tzIGhhdmUgYmVlbiBpbnZva2VkIHdoZW4gdGhlIGVsZW1lbnQgaXMgZGVzdHJveWVkLlxyXG4gICAqL1xyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcclxuICAgIHRoaXMuX2NvbXBsZXRlRXhpdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogV2FpdHMgZm9yIHRoZSB6b25lIHRvIHNldHRsZSBiZWZvcmUgcmVtb3ZpbmcgdGhlIGVsZW1lbnQuIEhlbHBzIHByZXZlbnRcclxuICAgKiBlcnJvcnMgd2hlcmUgd2UgZW5kIHVwIHJlbW92aW5nIGFuIGVsZW1lbnQgd2hpY2ggaXMgaW4gdGhlIG1pZGRsZSBvZiBhbiBhbmltYXRpb24uXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfY29tcGxldGVFeGl0KCkge1xyXG4gICAgdGhpcy5fbmdab25lLm9uTWljcm90YXNrRW1wdHlcclxuICAgICAgLmFzT2JzZXJ2YWJsZSgpXHJcbiAgICAgIC5waXBlKGZpcnN0KCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMub25FeGl0Lm5leHQoKTtcclxuICAgICAgICB0aGlzLm9uRXhpdC5jb21wbGV0ZSgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiPG5nLXRlbXBsYXRlIGNka1BvcnRhbEhvc3Q+PC9uZy10ZW1wbGF0ZT5cclxuIl19
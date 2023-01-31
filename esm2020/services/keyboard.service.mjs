import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Inject, Injectable, LOCALE_ID, Optional, SkipSelf } from '@angular/core';
import { MatKeyboardRef } from '../classes/keyboard-ref.class';
import { MatKeyboardContainerComponent } from '../components/keyboard-container/keyboard-container.component';
import { MatKeyboardComponent } from '../components/keyboard/keyboard.component';
import { MAT_KEYBOARD_LAYOUTS } from '../configs/keyboard-layouts.config';
import { _applyAvailableLayouts, _applyConfigDefaults } from '../utils/keyboard.utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "@angular/cdk/a11y";
/**
 * Service to dispatch Material Design keyboard.
 */
export class MatKeyboardService {
    constructor(_overlay, _live, _defaultLocale, _layouts, _parentKeyboard) {
        this._overlay = _overlay;
        this._live = _live;
        this._defaultLocale = _defaultLocale;
        this._layouts = _layouts;
        this._parentKeyboard = _parentKeyboard;
        /**
         * Reference to the current keyboard in the view *at this level* (in the Angular injector tree).
         * If there is a parent keyboard service, all operations should delegate to that parent
         * via `_openedKeyboardRef`.
         */
        this._keyboardRefAtThisLevel = null;
        this._availableLocales = {};
        // prepare available layouts mapping
        this._availableLocales = _applyAvailableLayouts(_layouts);
    }
    /** Reference to the currently opened keyboard at *any* level. */
    get _openedKeyboardRef() {
        const parent = this._parentKeyboard;
        return parent ? parent._openedKeyboardRef : this._keyboardRefAtThisLevel;
    }
    set _openedKeyboardRef(value) {
        if (this._parentKeyboard) {
            this._parentKeyboard._openedKeyboardRef = value;
        }
        else {
            this._keyboardRefAtThisLevel = value;
        }
    }
    get availableLocales() {
        return this._availableLocales;
    }
    get isOpened() {
        return !!this._openedKeyboardRef;
    }
    /**
     * Creates and dispatches a keyboard with a custom component for the content, removing any
     * currently opened keyboards.
     *
     * @param layoutOrLocale layout or locale to use.
     * @param config Extra configuration for the keyboard.
     */
    openFromComponent(layoutOrLocale, config) {
        const keyboardRef = this._attachKeyboardContent(config);
        keyboardRef.instance.darkTheme = config.darkTheme;
        keyboardRef.instance.isDebug = config.isDebug;
        // a locale is provided
        if (this.availableLocales[layoutOrLocale]) {
            keyboardRef.instance.locale = layoutOrLocale;
            keyboardRef.instance.layout = this.getLayoutForLocale(layoutOrLocale);
        }
        // a layout name is provided
        if (this._layouts[layoutOrLocale]) {
            keyboardRef.instance.layout = this._layouts[layoutOrLocale];
            keyboardRef.instance.locale = this._layouts[layoutOrLocale].lang && this._layouts[layoutOrLocale].lang.pop();
        }
        if (config.customIcons) {
            keyboardRef.instance.icons = config.customIcons;
        }
        // When the keyboard is dismissed, lower the keyboard counter.
        keyboardRef
            .afterDismissed()
            .subscribe(() => {
            // Clear the keyboard ref if it hasn't already been replaced by a newer keyboard.
            if (this._openedKeyboardRef === keyboardRef) {
                this._openedKeyboardRef = null;
            }
        });
        if (this._openedKeyboardRef) {
            // If a keyboard is already in view, dismiss it and enter the
            // new keyboard after exit animation is complete.
            this._openedKeyboardRef
                .afterDismissed()
                .subscribe(() => {
                keyboardRef.containerInstance.enter();
            });
            this._openedKeyboardRef.dismiss();
        }
        else {
            // If no keyboard is in view, enter the new keyboard.
            keyboardRef.containerInstance.enter();
        }
        // If a dismiss timeout is provided, set up dismiss based on after the keyboard is opened.
        // if (configs.duration > 0) {
        //   keyboardRef.afterOpened().subscribe(() => {
        //     setTimeout(() => keyboardRef.dismiss(), configs.duration);
        //   });
        // }
        if (config.announcementMessage) {
            this._live.announce(config.announcementMessage, config.politeness);
        }
        this._openedKeyboardRef = keyboardRef;
        return this._openedKeyboardRef;
    }
    /**
     * Opens a keyboard with a message and an optional action.
     * @param layoutOrLocale A string representing the locale or the layout name to be used.
     * @param config Additional configuration options for the keyboard.
     */
    open(layoutOrLocale = this._defaultLocale, config = {}) {
        const _config = _applyConfigDefaults(config);
        return this.openFromComponent(layoutOrLocale, _config);
    }
    /**
     * Dismisses the currently-visible keyboard.
     */
    dismiss() {
        if (this._openedKeyboardRef) {
            this._openedKeyboardRef.dismiss();
        }
    }
    /**
     * Map a given locale to a layout name.
     * @param locale The layout name
     */
    mapLocale(locale = this._defaultLocale) {
        let layout;
        const country = locale
            .split('-')
            .shift();
        // search for layout matching the
        // first part, the country code
        if (this.availableLocales[country]) {
            layout = this.availableLocales[locale];
        }
        // look if the detailed locale matches any layout
        if (this.availableLocales[locale]) {
            layout = this.availableLocales[locale];
        }
        if (!layout) {
            throw Error(`No layout found for locale ${locale}`);
        }
        return layout;
    }
    getLayoutForLocale(locale) {
        return this._layouts[this.mapLocale(locale)];
    }
    /**
     * Attaches the keyboard container component to the overlay.
     */
    _attachKeyboardContainer(overlayRef, config) {
        const containerPortal = new ComponentPortal(MatKeyboardContainerComponent, config.viewContainerRef);
        const containerRef = overlayRef.attach(containerPortal);
        // set config
        containerRef.instance.keyboardConfig = config;
        return containerRef.instance;
    }
    /**
     * Places a new component as the content of the keyboard container.
     */
    _attachKeyboardContent(config) {
        const overlayRef = this._createOverlay();
        const container = this._attachKeyboardContainer(overlayRef, config);
        const portal = new ComponentPortal(MatKeyboardComponent);
        const contentRef = container.attachComponentPortal(portal);
        return new MatKeyboardRef(contentRef.instance, container, overlayRef);
    }
    /**
     * Creates a new overlay and places it in the correct location.
     */
    _createOverlay() {
        const state = new OverlayConfig({
            width: '100%'
        });
        state.positionStrategy = this._overlay
            .position()
            .global()
            .centerHorizontally()
            .bottom('0');
        return this._overlay.create(state);
    }
}
MatKeyboardService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MatKeyboardService, deps: [{ token: i1.Overlay }, { token: i2.LiveAnnouncer }, { token: LOCALE_ID }, { token: MAT_KEYBOARD_LAYOUTS }, { token: MatKeyboardService, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.Injectable });
MatKeyboardService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MatKeyboardService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MatKeyboardService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Overlay }, { type: i2.LiveAnnouncer }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_KEYBOARD_LAYOUTS]
                }] }, { type: MatKeyboardService, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3NyYy9zZXJ2aWNlcy9rZXlib2FyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLHNCQUFzQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQWdCLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQy9ELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQzlHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBSzFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBRXZGOztHQUVHO0FBRUgsTUFBTSxPQUFPLGtCQUFrQjtJQWdDN0IsWUFBb0IsUUFBaUIsRUFDakIsS0FBb0IsRUFDRCxjQUFzQixFQUNYLFFBQTBCLEVBQ2hDLGVBQW1DO1FBSjNELGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsVUFBSyxHQUFMLEtBQUssQ0FBZTtRQUNELG1CQUFjLEdBQWQsY0FBYyxDQUFRO1FBQ1gsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7UUFDaEMsb0JBQWUsR0FBZixlQUFlLENBQW9CO1FBbkMvRTs7OztXQUlHO1FBQ0ssNEJBQXVCLEdBQWdELElBQUksQ0FBQztRQUU1RSxzQkFBaUIsR0FBZSxF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Q2hILENBQUM7SUFFRDs7T0FFRztJQUNLLGNBQWM7UUFDcEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxhQUFhLENBQUM7WUFDOUIsS0FBSyxFQUFFLE1BQU07U0FDZCxDQUFDLENBQUM7UUFFSCxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVE7YUFDbkMsUUFBUSxFQUFFO2FBQ1YsTUFBTSxFQUFFO2FBQ1Isa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWYsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDOztnSEF4TVUsa0JBQWtCLHNFQWtDVCxTQUFTLGFBQ1Qsb0JBQW9CO29IQW5DN0Isa0JBQWtCOzRGQUFsQixrQkFBa0I7a0JBRDlCLFVBQVU7OzBCQW1DSSxNQUFNOzJCQUFDLFNBQVM7OzBCQUNoQixNQUFNOzJCQUFDLG9CQUFvQjs7MEJBQzNCLFFBQVE7OzBCQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXZlQW5ub3VuY2VyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5Q29uZmlnLCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBJbmplY3QsIEluamVjdGFibGUsIExPQ0FMRV9JRCwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNYXRLZXlib2FyZFJlZiB9IGZyb20gJy4uL2NsYXNzZXMva2V5Ym9hcmQtcmVmLmNsYXNzJztcclxuaW1wb3J0IHsgTWF0S2V5Ym9hcmRDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2tleWJvYXJkLWNvbnRhaW5lci9rZXlib2FyZC1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0S2V5Ym9hcmRDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2tleWJvYXJkL2tleWJvYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1BVF9LRVlCT0FSRF9MQVlPVVRTIH0gZnJvbSAnLi4vY29uZmlncy9rZXlib2FyZC1sYXlvdXRzLmNvbmZpZyc7XHJcbmltcG9ydCB7IE1hdEtleWJvYXJkQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlncy9rZXlib2FyZC5jb25maWcnO1xyXG5pbXBvcnQgeyBJS2V5Ym9hcmRMYXlvdXQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2tleWJvYXJkLWxheW91dC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBJS2V5Ym9hcmRMYXlvdXRzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9rZXlib2FyZC1sYXlvdXRzLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IElMb2NhbGVNYXAgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2xvY2FsZS1tYXAuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgX2FwcGx5QXZhaWxhYmxlTGF5b3V0cywgX2FwcGx5Q29uZmlnRGVmYXVsdHMgfSBmcm9tICcuLi91dGlscy9rZXlib2FyZC51dGlscyc7XHJcblxyXG4vKipcclxuICogU2VydmljZSB0byBkaXNwYXRjaCBNYXRlcmlhbCBEZXNpZ24ga2V5Ym9hcmQuXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNYXRLZXlib2FyZFNlcnZpY2Uge1xyXG4gIC8qKlxyXG4gICAqIFJlZmVyZW5jZSB0byB0aGUgY3VycmVudCBrZXlib2FyZCBpbiB0aGUgdmlldyAqYXQgdGhpcyBsZXZlbCogKGluIHRoZSBBbmd1bGFyIGluamVjdG9yIHRyZWUpLlxyXG4gICAqIElmIHRoZXJlIGlzIGEgcGFyZW50IGtleWJvYXJkIHNlcnZpY2UsIGFsbCBvcGVyYXRpb25zIHNob3VsZCBkZWxlZ2F0ZSB0byB0aGF0IHBhcmVudFxyXG4gICAqIHZpYSBgX29wZW5lZEtleWJvYXJkUmVmYC5cclxuICAgKi9cclxuICBwcml2YXRlIF9rZXlib2FyZFJlZkF0VGhpc0xldmVsOiBNYXRLZXlib2FyZFJlZjxNYXRLZXlib2FyZENvbXBvbmVudD4gfCBudWxsID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBfYXZhaWxhYmxlTG9jYWxlczogSUxvY2FsZU1hcCA9IHt9O1xyXG5cclxuICAvKiogUmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50bHkgb3BlbmVkIGtleWJvYXJkIGF0ICphbnkqIGxldmVsLiAqL1xyXG4gIHByaXZhdGUgZ2V0IF9vcGVuZWRLZXlib2FyZFJlZigpOiBNYXRLZXlib2FyZFJlZjxNYXRLZXlib2FyZENvbXBvbmVudD4gfCBudWxsIHtcclxuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX3BhcmVudEtleWJvYXJkO1xyXG4gICAgcmV0dXJuIHBhcmVudCA/IHBhcmVudC5fb3BlbmVkS2V5Ym9hcmRSZWYgOiB0aGlzLl9rZXlib2FyZFJlZkF0VGhpc0xldmVsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXQgX29wZW5lZEtleWJvYXJkUmVmKHZhbHVlOiBNYXRLZXlib2FyZFJlZjxNYXRLZXlib2FyZENvbXBvbmVudD4pIHtcclxuICAgIGlmICh0aGlzLl9wYXJlbnRLZXlib2FyZCkge1xyXG4gICAgICB0aGlzLl9wYXJlbnRLZXlib2FyZC5fb3BlbmVkS2V5Ym9hcmRSZWYgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2tleWJvYXJkUmVmQXRUaGlzTGV2ZWwgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBhdmFpbGFibGVMb2NhbGVzKCk6IElMb2NhbGVNYXAge1xyXG4gICAgcmV0dXJuIHRoaXMuX2F2YWlsYWJsZUxvY2FsZXM7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNPcGVuZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISF0aGlzLl9vcGVuZWRLZXlib2FyZFJlZjtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX292ZXJsYXk6IE92ZXJsYXksXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbGl2ZTogTGl2ZUFubm91bmNlcixcclxuICAgICAgICAgICAgICBASW5qZWN0KExPQ0FMRV9JRCkgcHJpdmF0ZSBfZGVmYXVsdExvY2FsZTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgIEBJbmplY3QoTUFUX0tFWUJPQVJEX0xBWU9VVFMpIHByaXZhdGUgX2xheW91dHM6IElLZXlib2FyZExheW91dHMsXHJcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHJpdmF0ZSBfcGFyZW50S2V5Ym9hcmQ6IE1hdEtleWJvYXJkU2VydmljZSkge1xyXG4gICAgLy8gcHJlcGFyZSBhdmFpbGFibGUgbGF5b3V0cyBtYXBwaW5nXHJcbiAgICB0aGlzLl9hdmFpbGFibGVMb2NhbGVzID0gX2FwcGx5QXZhaWxhYmxlTGF5b3V0cyhfbGF5b3V0cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGFuZCBkaXNwYXRjaGVzIGEga2V5Ym9hcmQgd2l0aCBhIGN1c3RvbSBjb21wb25lbnQgZm9yIHRoZSBjb250ZW50LCByZW1vdmluZyBhbnlcclxuICAgKiBjdXJyZW50bHkgb3BlbmVkIGtleWJvYXJkcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBsYXlvdXRPckxvY2FsZSBsYXlvdXQgb3IgbG9jYWxlIHRvIHVzZS5cclxuICAgKiBAcGFyYW0gY29uZmlnIEV4dHJhIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBrZXlib2FyZC5cclxuICAgKi9cclxuICBvcGVuRnJvbUNvbXBvbmVudChsYXlvdXRPckxvY2FsZTogc3RyaW5nLCBjb25maWc6IE1hdEtleWJvYXJkQ29uZmlnKTogTWF0S2V5Ym9hcmRSZWY8TWF0S2V5Ym9hcmRDb21wb25lbnQ+IHtcclxuICAgIGNvbnN0IGtleWJvYXJkUmVmOiBNYXRLZXlib2FyZFJlZjxNYXRLZXlib2FyZENvbXBvbmVudD4gPSB0aGlzLl9hdHRhY2hLZXlib2FyZENvbnRlbnQoY29uZmlnKTtcclxuXHJcbiAgICBrZXlib2FyZFJlZi5pbnN0YW5jZS5kYXJrVGhlbWUgPSBjb25maWcuZGFya1RoZW1lO1xyXG4gICAga2V5Ym9hcmRSZWYuaW5zdGFuY2UuaXNEZWJ1ZyA9IGNvbmZpZy5pc0RlYnVnO1xyXG5cclxuICAgIC8vIGEgbG9jYWxlIGlzIHByb3ZpZGVkXHJcbiAgICBpZiAodGhpcy5hdmFpbGFibGVMb2NhbGVzW2xheW91dE9yTG9jYWxlXSkge1xyXG4gICAgICBrZXlib2FyZFJlZi5pbnN0YW5jZS5sb2NhbGUgPSBsYXlvdXRPckxvY2FsZTtcclxuICAgICAga2V5Ym9hcmRSZWYuaW5zdGFuY2UubGF5b3V0ID0gdGhpcy5nZXRMYXlvdXRGb3JMb2NhbGUobGF5b3V0T3JMb2NhbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGEgbGF5b3V0IG5hbWUgaXMgcHJvdmlkZWRcclxuICAgIGlmICh0aGlzLl9sYXlvdXRzW2xheW91dE9yTG9jYWxlXSkge1xyXG4gICAgICBrZXlib2FyZFJlZi5pbnN0YW5jZS5sYXlvdXQgPSB0aGlzLl9sYXlvdXRzW2xheW91dE9yTG9jYWxlXTtcclxuICAgICAga2V5Ym9hcmRSZWYuaW5zdGFuY2UubG9jYWxlID0gdGhpcy5fbGF5b3V0c1tsYXlvdXRPckxvY2FsZV0ubGFuZyAmJiB0aGlzLl9sYXlvdXRzW2xheW91dE9yTG9jYWxlXS5sYW5nLnBvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb25maWcuY3VzdG9tSWNvbnMpIHtcclxuICAgICAga2V5Ym9hcmRSZWYuaW5zdGFuY2UuaWNvbnMgPSBjb25maWcuY3VzdG9tSWNvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gV2hlbiB0aGUga2V5Ym9hcmQgaXMgZGlzbWlzc2VkLCBsb3dlciB0aGUga2V5Ym9hcmQgY291bnRlci5cclxuICAgIGtleWJvYXJkUmVmXHJcbiAgICAgIC5hZnRlckRpc21pc3NlZCgpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIC8vIENsZWFyIHRoZSBrZXlib2FyZCByZWYgaWYgaXQgaGFzbid0IGFscmVhZHkgYmVlbiByZXBsYWNlZCBieSBhIG5ld2VyIGtleWJvYXJkLlxyXG4gICAgICAgIGlmICh0aGlzLl9vcGVuZWRLZXlib2FyZFJlZiA9PT0ga2V5Ym9hcmRSZWYpIHtcclxuICAgICAgICAgIHRoaXMuX29wZW5lZEtleWJvYXJkUmVmID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLl9vcGVuZWRLZXlib2FyZFJlZikge1xyXG4gICAgICAvLyBJZiBhIGtleWJvYXJkIGlzIGFscmVhZHkgaW4gdmlldywgZGlzbWlzcyBpdCBhbmQgZW50ZXIgdGhlXHJcbiAgICAgIC8vIG5ldyBrZXlib2FyZCBhZnRlciBleGl0IGFuaW1hdGlvbiBpcyBjb21wbGV0ZS5cclxuICAgICAgdGhpcy5fb3BlbmVkS2V5Ym9hcmRSZWZcclxuICAgICAgICAuYWZ0ZXJEaXNtaXNzZWQoKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAga2V5Ym9hcmRSZWYuY29udGFpbmVySW5zdGFuY2UuZW50ZXIoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgdGhpcy5fb3BlbmVkS2V5Ym9hcmRSZWYuZGlzbWlzcygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gSWYgbm8ga2V5Ym9hcmQgaXMgaW4gdmlldywgZW50ZXIgdGhlIG5ldyBrZXlib2FyZC5cclxuICAgICAga2V5Ym9hcmRSZWYuY29udGFpbmVySW5zdGFuY2UuZW50ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiBhIGRpc21pc3MgdGltZW91dCBpcyBwcm92aWRlZCwgc2V0IHVwIGRpc21pc3MgYmFzZWQgb24gYWZ0ZXIgdGhlIGtleWJvYXJkIGlzIG9wZW5lZC5cclxuICAgIC8vIGlmIChjb25maWdzLmR1cmF0aW9uID4gMCkge1xyXG4gICAgLy8gICBrZXlib2FyZFJlZi5hZnRlck9wZW5lZCgpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiBrZXlib2FyZFJlZi5kaXNtaXNzKCksIGNvbmZpZ3MuZHVyYXRpb24pO1xyXG4gICAgLy8gICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBpZiAoY29uZmlnLmFubm91bmNlbWVudE1lc3NhZ2UpIHtcclxuICAgICAgdGhpcy5fbGl2ZS5hbm5vdW5jZShjb25maWcuYW5ub3VuY2VtZW50TWVzc2FnZSwgY29uZmlnLnBvbGl0ZW5lc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX29wZW5lZEtleWJvYXJkUmVmID0ga2V5Ym9hcmRSZWY7XHJcbiAgICByZXR1cm4gdGhpcy5fb3BlbmVkS2V5Ym9hcmRSZWY7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPcGVucyBhIGtleWJvYXJkIHdpdGggYSBtZXNzYWdlIGFuZCBhbiBvcHRpb25hbCBhY3Rpb24uXHJcbiAgICogQHBhcmFtIGxheW91dE9yTG9jYWxlIEEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgbG9jYWxlIG9yIHRoZSBsYXlvdXQgbmFtZSB0byBiZSB1c2VkLlxyXG4gICAqIEBwYXJhbSBjb25maWcgQWRkaXRpb25hbCBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSBrZXlib2FyZC5cclxuICAgKi9cclxuICBvcGVuKGxheW91dE9yTG9jYWxlOiBzdHJpbmcgPSB0aGlzLl9kZWZhdWx0TG9jYWxlLCBjb25maWc6IE1hdEtleWJvYXJkQ29uZmlnID0ge30pOiBNYXRLZXlib2FyZFJlZjxNYXRLZXlib2FyZENvbXBvbmVudD4ge1xyXG4gICAgY29uc3QgX2NvbmZpZyA9IF9hcHBseUNvbmZpZ0RlZmF1bHRzKGNvbmZpZyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMub3BlbkZyb21Db21wb25lbnQobGF5b3V0T3JMb2NhbGUsIF9jb25maWcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGlzbWlzc2VzIHRoZSBjdXJyZW50bHktdmlzaWJsZSBrZXlib2FyZC5cclxuICAgKi9cclxuICBkaXNtaXNzKCkge1xyXG4gICAgaWYgKHRoaXMuX29wZW5lZEtleWJvYXJkUmVmKSB7XHJcbiAgICAgIHRoaXMuX29wZW5lZEtleWJvYXJkUmVmLmRpc21pc3MoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1hcCBhIGdpdmVuIGxvY2FsZSB0byBhIGxheW91dCBuYW1lLlxyXG4gICAqIEBwYXJhbSBsb2NhbGUgVGhlIGxheW91dCBuYW1lXHJcbiAgICovXHJcbiAgbWFwTG9jYWxlKGxvY2FsZTogc3RyaW5nID0gdGhpcy5fZGVmYXVsdExvY2FsZSk6IHN0cmluZyB7XHJcbiAgICBsZXQgbGF5b3V0OiBzdHJpbmc7XHJcbiAgICBjb25zdCBjb3VudHJ5ID0gbG9jYWxlXHJcbiAgICAgIC5zcGxpdCgnLScpXHJcbiAgICAgIC5zaGlmdCgpO1xyXG5cclxuICAgIC8vIHNlYXJjaCBmb3IgbGF5b3V0IG1hdGNoaW5nIHRoZVxyXG4gICAgLy8gZmlyc3QgcGFydCwgdGhlIGNvdW50cnkgY29kZVxyXG4gICAgaWYgKHRoaXMuYXZhaWxhYmxlTG9jYWxlc1tjb3VudHJ5XSkge1xyXG4gICAgICBsYXlvdXQgPSB0aGlzLmF2YWlsYWJsZUxvY2FsZXNbbG9jYWxlXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBsb29rIGlmIHRoZSBkZXRhaWxlZCBsb2NhbGUgbWF0Y2hlcyBhbnkgbGF5b3V0XHJcbiAgICBpZiAodGhpcy5hdmFpbGFibGVMb2NhbGVzW2xvY2FsZV0pIHtcclxuICAgICAgbGF5b3V0ID0gdGhpcy5hdmFpbGFibGVMb2NhbGVzW2xvY2FsZV07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFsYXlvdXQpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYE5vIGxheW91dCBmb3VuZCBmb3IgbG9jYWxlICR7bG9jYWxlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsYXlvdXQ7XHJcbiAgfVxyXG5cclxuICBnZXRMYXlvdXRGb3JMb2NhbGUobG9jYWxlOiBzdHJpbmcpOiBJS2V5Ym9hcmRMYXlvdXQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xheW91dHNbdGhpcy5tYXBMb2NhbGUobG9jYWxlKV07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBdHRhY2hlcyB0aGUga2V5Ym9hcmQgY29udGFpbmVyIGNvbXBvbmVudCB0byB0aGUgb3ZlcmxheS5cclxuICAgKi9cclxuICBwcml2YXRlIF9hdHRhY2hLZXlib2FyZENvbnRhaW5lcihvdmVybGF5UmVmOiBPdmVybGF5UmVmLCBjb25maWc6IE1hdEtleWJvYXJkQ29uZmlnKTogTWF0S2V5Ym9hcmRDb250YWluZXJDb21wb25lbnQge1xyXG4gICAgY29uc3QgY29udGFpbmVyUG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChNYXRLZXlib2FyZENvbnRhaW5lckNvbXBvbmVudCwgY29uZmlnLnZpZXdDb250YWluZXJSZWYpO1xyXG4gICAgY29uc3QgY29udGFpbmVyUmVmOiBDb21wb25lbnRSZWY8TWF0S2V5Ym9hcmRDb250YWluZXJDb21wb25lbnQ+ID0gb3ZlcmxheVJlZi5hdHRhY2goY29udGFpbmVyUG9ydGFsKTtcclxuXHJcbiAgICAvLyBzZXQgY29uZmlnXHJcbiAgICBjb250YWluZXJSZWYuaW5zdGFuY2Uua2V5Ym9hcmRDb25maWcgPSBjb25maWc7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lclJlZi5pbnN0YW5jZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBsYWNlcyBhIG5ldyBjb21wb25lbnQgYXMgdGhlIGNvbnRlbnQgb2YgdGhlIGtleWJvYXJkIGNvbnRhaW5lci5cclxuICAgKi9cclxuICBwcml2YXRlIF9hdHRhY2hLZXlib2FyZENvbnRlbnQoY29uZmlnOiBNYXRLZXlib2FyZENvbmZpZyk6IE1hdEtleWJvYXJkUmVmPE1hdEtleWJvYXJkQ29tcG9uZW50PiB7XHJcbiAgICBjb25zdCBvdmVybGF5UmVmID0gdGhpcy5fY3JlYXRlT3ZlcmxheSgpO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fYXR0YWNoS2V5Ym9hcmRDb250YWluZXIob3ZlcmxheVJlZiwgY29uZmlnKTtcclxuICAgIGNvbnN0IHBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwoTWF0S2V5Ym9hcmRDb21wb25lbnQpO1xyXG4gICAgY29uc3QgY29udGVudFJlZiA9IGNvbnRhaW5lci5hdHRhY2hDb21wb25lbnRQb3J0YWwocG9ydGFsKTtcclxuICAgIHJldHVybiBuZXcgTWF0S2V5Ym9hcmRSZWYoY29udGVudFJlZi5pbnN0YW5jZSwgY29udGFpbmVyLCBvdmVybGF5UmVmKSBhcyBNYXRLZXlib2FyZFJlZjxNYXRLZXlib2FyZENvbXBvbmVudD47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IG92ZXJsYXkgYW5kIHBsYWNlcyBpdCBpbiB0aGUgY29ycmVjdCBsb2NhdGlvbi5cclxuICAgKi9cclxuICBwcml2YXRlIF9jcmVhdGVPdmVybGF5KCk6IE92ZXJsYXlSZWYge1xyXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgT3ZlcmxheUNvbmZpZyh7XHJcbiAgICAgIHdpZHRoOiAnMTAwJSdcclxuICAgIH0pO1xyXG5cclxuICAgIHN0YXRlLnBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLl9vdmVybGF5XHJcbiAgICAgIC5wb3NpdGlvbigpXHJcbiAgICAgIC5nbG9iYWwoKVxyXG4gICAgICAuY2VudGVySG9yaXpvbnRhbGx5KClcclxuICAgICAgLmJvdHRvbSgnMCcpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9vdmVybGF5LmNyZWF0ZShzdGF0ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
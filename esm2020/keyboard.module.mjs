// External modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Angular CDK
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
// Angular material
import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
// Configs
import { keyboardDeadkeys, MAT_KEYBOARD_DEADKEYS } from './configs/keyboard-deadkey.config';
import { keyboardLayouts, MAT_KEYBOARD_LAYOUTS } from './configs/keyboard-layouts.config';
// Components and directives
import { MatKeyboardContainerComponent } from './components/keyboard-container/keyboard-container.component';
import { MatKeyboardKeyComponent } from './components/keyboard-key/keyboard-key.component';
import { MatKeyboardComponent } from './components/keyboard/keyboard.component';
import { MatKeyboardDirective } from './directives/keyboard.directive';
// Providers
import { MatKeyboardKebabCasePipe } from './pipes/kebab-case.pipe';
import { MatKeyboardService } from './services/keyboard.service';
import * as i0 from "@angular/core";
export class MatKeyboardModule {
}
MatKeyboardModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MatKeyboardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MatKeyboardModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: MatKeyboardModule, declarations: [MatKeyboardKebabCasePipe,
        MatKeyboardComponent,
        MatKeyboardContainerComponent,
        MatKeyboardKeyComponent,
        MatKeyboardDirective], imports: [
        // Angular modules
        CommonModule,
        OverlayModule,
        // Cdk modules
        PortalModule,
        // Material modules
        MatButtonModule,
        MatCommonModule,
        MatIconModule,
        MatInputModule], exports: [MatKeyboardComponent,
        MatKeyboardContainerComponent,
        MatKeyboardKeyComponent,
        MatKeyboardDirective] });
MatKeyboardModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MatKeyboardModule, providers: [
        MatKeyboardService,
        { provide: MAT_KEYBOARD_DEADKEYS, useValue: keyboardDeadkeys },
        { provide: MAT_KEYBOARD_LAYOUTS, useValue: keyboardLayouts }
    ], imports: [
        // Angular modules
        CommonModule,
        OverlayModule,
        // Cdk modules
        PortalModule,
        // Material modules
        MatButtonModule,
        MatCommonModule,
        MatIconModule,
        MatInputModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MatKeyboardModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        // Angular modules
                        CommonModule,
                        OverlayModule,
                        // Cdk modules
                        PortalModule,
                        // Material modules
                        MatButtonModule,
                        MatCommonModule,
                        MatIconModule,
                        MatInputModule
                    ],
                    exports: [
                        MatKeyboardComponent,
                        MatKeyboardContainerComponent,
                        MatKeyboardKeyComponent,
                        MatKeyboardDirective
                    ],
                    declarations: [
                        MatKeyboardKebabCasePipe,
                        MatKeyboardComponent,
                        MatKeyboardContainerComponent,
                        MatKeyboardKeyComponent,
                        MatKeyboardDirective
                    ],
                    providers: [
                        MatKeyboardService,
                        { provide: MAT_KEYBOARD_DEADKEYS, useValue: keyboardDeadkeys },
                        { provide: MAT_KEYBOARD_LAYOUTS, useValue: keyboardLayouts }
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvcmUvc3JjL2tleWJvYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUI7QUFDbkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsY0FBYztBQUNkLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsbUJBQW1CO0FBQ25CLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxVQUFVO0FBQ1YsT0FBTyxFQUFFLGdCQUFnQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDNUYsT0FBTyxFQUFFLGVBQWUsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFGLDRCQUE0QjtBQUM1QixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUM3RyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNoRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN2RSxZQUFZO0FBQ1osT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0FBa0NqRSxNQUFNLE9BQU8saUJBQWlCOzsrR0FBakIsaUJBQWlCO2dIQUFqQixpQkFBaUIsaUJBWnRCLHdCQUF3QjtRQUN4QixvQkFBb0I7UUFDcEIsNkJBQTZCO1FBQzdCLHVCQUF1QjtRQUN2QixvQkFBb0I7UUF0QnBCLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osYUFBYTtRQUNiLGNBQWM7UUFDZCxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixlQUFlO1FBQ2YsYUFBYTtRQUNiLGNBQWMsYUFHZCxvQkFBb0I7UUFDcEIsNkJBQTZCO1FBQzdCLHVCQUF1QjtRQUN2QixvQkFBb0I7Z0hBZWYsaUJBQWlCLGFBTmY7UUFDUCxrQkFBa0I7UUFDbEIsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFO1FBQzlELEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUU7S0FDL0Q7UUE1Qkcsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixhQUFhO1FBQ2IsY0FBYztRQUNkLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGVBQWU7UUFDZixhQUFhO1FBQ2IsY0FBYzs0RkFxQlQsaUJBQWlCO2tCQWhDN0IsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUU7d0JBQ0wsa0JBQWtCO3dCQUNsQixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsY0FBYztxQkFDakI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLG9CQUFvQjt3QkFDcEIsNkJBQTZCO3dCQUM3Qix1QkFBdUI7d0JBQ3ZCLG9CQUFvQjtxQkFDdkI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNWLHdCQUF3Qjt3QkFDeEIsb0JBQW9CO3dCQUNwQiw2QkFBNkI7d0JBQzdCLHVCQUF1Qjt3QkFDdkIsb0JBQW9CO3FCQUN2QjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1Asa0JBQWtCO3dCQUNsQixFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUU7d0JBQzlELEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUU7cUJBQy9EO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXh0ZXJuYWwgbW9kdWxlc1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vLyBBbmd1bGFyIENES1xyXG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuLy8gQW5ndWxhciBtYXRlcmlhbFxyXG5pbXBvcnQgeyBNYXRDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuLy8gQ29uZmlnc1xyXG5pbXBvcnQgeyBrZXlib2FyZERlYWRrZXlzLCBNQVRfS0VZQk9BUkRfREVBREtFWVMgfSBmcm9tICcuL2NvbmZpZ3Mva2V5Ym9hcmQtZGVhZGtleS5jb25maWcnO1xyXG5pbXBvcnQgeyBrZXlib2FyZExheW91dHMsIE1BVF9LRVlCT0FSRF9MQVlPVVRTIH0gZnJvbSAnLi9jb25maWdzL2tleWJvYXJkLWxheW91dHMuY29uZmlnJztcclxuLy8gQ29tcG9uZW50cyBhbmQgZGlyZWN0aXZlc1xyXG5pbXBvcnQgeyBNYXRLZXlib2FyZENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9rZXlib2FyZC1jb250YWluZXIva2V5Ym9hcmQtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdEtleWJvYXJkS2V5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2tleWJvYXJkLWtleS9rZXlib2FyZC1rZXkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0S2V5Ym9hcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMva2V5Ym9hcmQva2V5Ym9hcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0S2V5Ym9hcmREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMva2V5Ym9hcmQuZGlyZWN0aXZlJztcclxuLy8gUHJvdmlkZXJzXHJcbmltcG9ydCB7IE1hdEtleWJvYXJkS2ViYWJDYXNlUGlwZSB9IGZyb20gJy4vcGlwZXMva2ViYWItY2FzZS5waXBlJztcclxuaW1wb3J0IHsgTWF0S2V5Ym9hcmRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9rZXlib2FyZC5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgLy8gQW5ndWxhciBtb2R1bGVzXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE92ZXJsYXlNb2R1bGUsXHJcbiAgICAgICAgLy8gQ2RrIG1vZHVsZXNcclxuICAgICAgICBQb3J0YWxNb2R1bGUsXHJcbiAgICAgICAgLy8gTWF0ZXJpYWwgbW9kdWxlc1xyXG4gICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgICAgICBNYXRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgTWF0SWNvbk1vZHVsZSxcclxuICAgICAgICBNYXRJbnB1dE1vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBNYXRLZXlib2FyZENvbXBvbmVudCxcclxuICAgICAgICBNYXRLZXlib2FyZENvbnRhaW5lckNvbXBvbmVudCxcclxuICAgICAgICBNYXRLZXlib2FyZEtleUNvbXBvbmVudCxcclxuICAgICAgICBNYXRLZXlib2FyZERpcmVjdGl2ZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIE1hdEtleWJvYXJkS2ViYWJDYXNlUGlwZSxcclxuICAgICAgICBNYXRLZXlib2FyZENvbXBvbmVudCxcclxuICAgICAgICBNYXRLZXlib2FyZENvbnRhaW5lckNvbXBvbmVudCxcclxuICAgICAgICBNYXRLZXlib2FyZEtleUNvbXBvbmVudCxcclxuICAgICAgICBNYXRLZXlib2FyZERpcmVjdGl2ZVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIE1hdEtleWJvYXJkU2VydmljZSxcclxuICAgICAgICB7IHByb3ZpZGU6IE1BVF9LRVlCT0FSRF9ERUFES0VZUywgdXNlVmFsdWU6IGtleWJvYXJkRGVhZGtleXMgfSxcclxuICAgICAgICB7IHByb3ZpZGU6IE1BVF9LRVlCT0FSRF9MQVlPVVRTLCB1c2VWYWx1ZToga2V5Ym9hcmRMYXlvdXRzIH1cclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdEtleWJvYXJkTW9kdWxlIHt9XHJcbiJdfQ==
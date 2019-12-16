import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './list-user/list-user.component';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { NotifierModule } from 'angular-notifier';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        TableModule,
        PaginatorModule,
        AutoCompleteModule,
        ReactiveFormsModule,
        CalendarModule,
        NotifierModule.withConfig({
            position: {
                horizontal: {
                    /*
                     //* Defines the horizontal position on the screen
                     * @type {'left' | 'middle' | 'right'}
                     */
                    position: 'right',

                    /**
                     * Defines the horizontal distance to the screen edge (in px)
                     //* @type {number}
                     */
                    distance: 25
                },

                vertical: {
                    /**
                     * Defines the vertical position on the screen
                     //* @type {'top' | 'bottom'}
                     */
                    position: 'top',

                    /**
                     * Defines the vertical distance to the screen edge (in px)
                     // * @type {number}
                     */
                    distance: 40,

                    /**
                     * Defines the vertical gap, existing between multiple notifications (in px)
                     //* @type {number}
                     */
                    gap: 10
                }
            },
            behaviour: {
                /**
                 * Defines whether each notification will hide itself automatically after a timeout passes
                 //* @type {number | false}
                 */
                autoHide: 3000,

                /**
                 * Defines what happens when someone clicks on a notification
                 //* @type {'hide' | false}
                 */
                onClick: 'hide',

                /**
                 * Defines what happens when someone hovers over a notification
                 //* @type {'pauseAutoHide' | 'resetAutoHide' | false}
                 */
                onMouseover: 'pauseAutoHide',

                /**
                 * Defines whether the dismiss button is visible or not
                 //* @type {boolean}
                 */
                showDismissButton: true,

                /**
                 * Defines whether multiple notification will be stacked, and how high the stack limit is
                 //* @type {number | false}
                 */
                stacking: 4
            }
        })

    ],
    declarations: [
        UserListComponent,
        UserComponent,
        DetailUserComponent,
        EditUserComponent
    ],
    providers: [
        UserService,
        DatePipe
    ]
})
export class UserModule { }
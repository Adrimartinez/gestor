import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CustomersService} from "./customers.service";
import {RouterModule} from "@angular/router";
import { ListComponent } from './list/list.component';
import { MatTableModule, MatToolbarModule, MatOptionModule, MatSelectModule, MatInputModule, MatCardModule, MatButtonModule } from "@angular/material";
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CustomerComponent } from './customer/customer.component';


@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        CustomerComponent,
    ],
    imports: [
        BrowserModule,
        MatTableModule,
        MatToolbarModule,
        MatOptionModule,
        MatSelectModule,
        FormsModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        HttpClientModule,

        RouterModule.forRoot([
            {
                path: 'list',
                component: ListComponent,
                children: [
                    {
                        path: ':id',
                        component: CustomerComponent
                    },
                ]
            },
            {
                path: '**',
                redirectTo: 'list'
            }
        ]),
    ],
    providers: [CustomersService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

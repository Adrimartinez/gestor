import {Component, OnInit} from '@angular/core';
import {Customer} from "../object/customer";
import {CustomersService} from "../customers.service";
import {Observable} from "rxjs/Observable";
import {DataSource} from '@angular/cdk/collections';
import {Router} from "@angular/router";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    displayedColumns = ['image', 'id', 'name', 'location'];
    dataSource = new UserDataSource(this.customerService);
    customer: Customer;

    constructor(private customerService: CustomersService, private _router: Router) {
    }

    ngOnInit() {
        this.getData(1);
    }

    getData(id: number) {
        this.customerService.getCustomer(id).subscribe(customer => this.customer = customer);
    }

    rowClick(row) {
        this.getData(row.id);
    }
}

export class UserDataSource extends DataSource<any> {
    constructor(private customerService: CustomersService) {
        super();
    }

    connect(): Observable<Customer[]> {
        return this.customerService.getCustomers();
    }

    disconnect() {
    }


}

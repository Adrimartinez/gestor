import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Comments, Customer} from "../object/customer";
import {CustomersService} from "../customers.service";

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit, AfterViewInit {

    constructor(private customerService: CustomersService, private route: ActivatedRoute) {
    }

    customer: Customer;
    id: number;
    comment = new Comments();

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
        }, );
        this.getData();
    }

    ngAfterViewInit() {

    }

    getData() {
        this.customerService.getCustomer(this.id).subscribe(customer => this.customer = customer);
    }

    tackComments(index: number, comment: Comments): number {
        return comment.id;
    }

    onSubmit(): void {

        this.comment.status = 'N';
        this.comment.rating = 1;
        this.comment.consultant = this.customer.id;
        this.customerService.addComment(this.comment)
            .subscribe(comment => this.customer.comments.push(comment));
    }

}

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {Customer, Comments} from './object/customer';
import 'rxjs/add/operator/map';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class CustomersService {

    constructor(private http: HttpClient) {
    }


    private customersURL = '';


    getCustomers(): Observable<Customer[]> {
        this.customersURL = 'http://demopeople.exolever.com/api/consultants/';
        return this.http.get<Customer[]>(this.customersURL).map(customers => customers);
    }

    getCustomer(id: number): Observable<Customer> {
        this.customersURL = 'http://demopeople.exolever.com/api/consultants/' + id;
        return this.http.get<Customer>(this.customersURL).map(customer => customer);
    }

    addComment(comment: Comments): Observable<Comments> {
        this.customersURL = 'http://demopeople.exolever.com/api/comment/';
        return this.http.post<Comments>(this.customersURL, comment, httpOptions);
    }

}

import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

@Component({
  selector: 'app-multi-data-form',
  templateUrl: './multi-data-form.component.html',
  //styleUrls: ['./multiple-data-form.component.css'],
  imports: [
    FormsModule,
    NgForOf
  ],
  standalone: true
})
export class MultiDataFormComponent {

  customerObject : any = {
    "customerId": 0,
    "name": "",
    "mockOrders": []
  };
  orderList: any[]=[];
  customerOrderObject : any = {
    "OrderId": 0,
    "Amount": 0,
    "CustomerId": 0
  }
  constructor(private http: HttpClient) {

  }
  addOrder() {
    const strobj = JSON.stringify(this.customerOrderObject);
    const obj = JSON.parse(strobj);
    this.orderList.unshift(obj);
  }

  saveCustomer() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'*'
      })
    };
    this.customerObject.mockOrders = this.orderList;
    this.http.post("http://localhost:8080/customer", this.customerObject).subscribe((res: any)=>{
      if (res.result) {
        alert(res.message)
      }
    })
  }

  loadCustomer() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'*'
      })
    };
    this.customerObject.mockOrders = this.orderList;
    this.http.get("http://localhost:8080/customer", this.customerObject).subscribe((res: any)=>{
      console.log(JSON.stringify(res));
      if (res.result) {
        alert(res.message)
        this.customerObject=res.customerObject;
      }
    })
  }

}

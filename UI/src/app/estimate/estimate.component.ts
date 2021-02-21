import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.scss']
})
export class EstimateComponent implements OnInit {
  perGram;
  weight;
  totalPrice;
  discount;
  DEFAULT_DISCOUNT = 2;
  PRIVILEGED = 1;
  isPrivileged = false;
  constructor(public appService: AppService, public router: Router) {

  }

  ngOnInit() {
    if (this.appService.customer && this.appService.customer.customerType.id == this.PRIVILEGED) {
      this.discount = this.DEFAULT_DISCOUNT;
      this.isPrivileged = true;
    }
    //this.discount
  }
  onCalculate($event) {
    this.totalPrice = this.getPrice();
  }
  getPrice() {
    let ltotalPrice = (this.weight * this.perGram);

    if (this.isPrivileged) {
      ltotalPrice = ltotalPrice - (ltotalPrice * (this.discount / 100));
    }
    return ltotalPrice;
  }
  printToScreen($event) {
    alert("Total price = " + this.getPrice());
  }
  printToFile($event) {

  }
  printToPaper($event) {

  }
  onClose($event) {
    this.perGram = null;
    this.weight = null;
    this.totalPrice = null;
    this.discount = null;
    this.appService.customer = null;
    this.router.navigate(["login"]);
  }
}

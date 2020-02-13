import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippinCosts;

  constructor(private cartSerivce: CartService) { }

  ngOnInit() {
    this.shippinCosts = this.cartSerivce.getShoppingPrice();
  }

}
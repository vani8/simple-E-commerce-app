import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
 
}

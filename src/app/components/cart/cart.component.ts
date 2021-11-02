import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cartTotal : number=0;
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
    removeProduct(item: any){
      this.cartService.removeCartItem(item);
    }
    emptyCart(){
      this.cartService.removeAllCart();
    }
    // decreaseQuantity(id) {
    //   let index = this.products.findIndex((item: any)=> item.id == id)
    //   if (index > -1) {
    //     this.products[index].quantity = --this.products[index].quantity
    //     if (this.products[index].quantity == 0) {
    //       this.products.splice(index, 1)
    //     }
    //     else {
    //       this.products[index].rate = this.products[index].rate - this.products[index].price
    //     }
  
    //     this.cartTotal = 0
    //     for (let i = 0; i < this.products.length; i++) {
    //       this.grandTotal = this.cartTotal + this.products[i].rate
    //     }
    //   }
  
    //   this.products.cartTotal(this.cartTotal, this.products)
    // }
  
    // increaseQuantity(id:any) {
    //   let index = this.products.findIndex(((item: any)=> item.id == id)
    //   if (index > -1) {
    //     this.products[index].quantity = 1 + this.products[index].quantity
    //     this.products[index].rate = this.products[index].rate + this.products[index].price
  
    //     this.cartTotal = 0
    //     for (let i = 0; i < this.products.length; i++) {
    //       this.cartTotal = this.cartTotal + this.products[i].rate
    //     }
    //   }
    //   this.products.cartTotal(this.cartTotal, this.products)
    // }

}

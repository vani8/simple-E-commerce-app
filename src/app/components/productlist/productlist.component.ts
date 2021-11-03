import { Component, OnInit,Input } from '@angular/core';
// import { ActivatedRoute,Params } from '@angular/router';
import { BaseService } from '../../shared/base.service';
import { CartService } from '../../shared/cart.service';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  public productList : any;
  public totalItem: number = 0;
  constructor(private base:BaseService,private cartService:CartService) { }
  public productDetails?: ProductDetails;
  ngOnInit(): void {
    this.base.getProduct().subscribe(res=>{
      this.productList = res;  
    })
    this.cartService.getProducts().subscribe(res=>{
      this.totalItem = res.length;
    })
    this.productDetails = history.state;
    console.log(this.productDetails);
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
}
  export interface ProductDetails {
    category: string;
    description: string;
    id: number;
    image: string;
    navigationId: number;
    price: number;
    quantity: number;
    rating: { rate: number; count: number };
    title: string;
    total: number;
  }
  // on(id: any){
  //   let x:any
  //   return this.productList.filter(x=> x.id === id);
  // }
  
  // getItem(item:any){
  //   this.cartService.selectItem(item);
  //   console.log(item)
  // }
  


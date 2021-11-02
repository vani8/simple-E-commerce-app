import { Component, OnInit,Output, EventEmitter, Input  } from '@angular/core';
import { Params, Router } from '@angular/router';
import { BaseService } from '../../shared/base.service';
import { CartService } from '../../shared/cart.service';
import { ProductService } from '../../shared/product.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public productList : any;
  public  message:any;
  public productdetail: any;
  public totalItem: number =0;
  constructor(private base: BaseService,private router: Router,private cartService: CartService,private api:ProductService) { }

  ngOnInit(): void {

      this.base.getProduct().subscribe(res=>{
        this.productList = [...res];  
        this.productList.forEach((listItem:any)=>{
          Object.assign(listItem,{quantity:1,total:listItem.price})
        })
      });
      this.cartService.getProducts().subscribe(res=>{
        this.totalItem = res.length;
      })
  }
  // public open(_id:any){
  //   this.router.navigate(['/productlist,_id']);
  // }
 
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  getItem(item:any){
    this.message = this.cartService.selectItem(item);
    console.log(item)
  }
}

import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../shared/base.service';
import { CartService } from '../../shared/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  public productList : any;
  public productdetail: any;
  public totalItem: number =0;
  constructor(private base: BaseService,private cartService: CartService) { }

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

}

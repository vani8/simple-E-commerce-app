import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from '../../shared/base.service';
import { CartService } from '../../shared/cart.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public productList : any;
  public productdetail: any;
  public totalItem: number =0;
  constructor(private base: BaseService,private router: Router,private cartService: CartService) { }

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
 
  getProductDetails(item: any) {
    this.router.navigateByUrl('/productlist', { state: item });
  }
}

import { Component, OnInit,Input } from '@angular/core';
import { BaseService } from '../../shared/base.service';
import { CartService } from '../../shared/cart.service';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  @Input() data:string=""
  public message : any; 
  public productdetail: any;
  public totalItem: number = 0;
  constructor(private base:BaseService,private cartService:CartService) { }

  ngOnInit(): void {
    
  }
 

  // on(id: any){
  //   let x:any
  //   return this.productList.filter(x=> x.id === id);
  // }
  
  // getItem(item:any){
  //   this.cartService.selectItem(item);
  //   console.log(item)
  // }
  
}

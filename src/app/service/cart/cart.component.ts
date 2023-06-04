import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public  products:any=[];
public grandtotal !:number;
  constructor(private cart:CartService){}

  ngOnInit(): void {
    this.cart.getproduct().subscribe((res)=>{
      this.products=res;
      this.grandtotal=this.cart.gettotlprice();
    })
  }
  removeitem(item:any){
    this.cart.removecartitem(item)

  }
  emptycart(){
    this.cart.removeall();
  }
}

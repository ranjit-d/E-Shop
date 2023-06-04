import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product-dashbpard',
  templateUrl: './product-dashbpard.component.html',
  styleUrls: ['./product-dashbpard.component.css']
})
export class ProductDashbpardComponent implements OnInit {

  public productlist:any;
  constructor(private api:ApiService,private cart:CartService){}


  ngOnInit(): void {
    this.api.getproduct().subscribe((res)=>{
      this.productlist=res;

      this.productlist.forEach((r:any)=>{
        Object.assign(r,{quantity:1,total:r.price});
      })
    })
    
  }
  addtocart(item:any){
    this.cart.addtokart(item);


  }
  
}

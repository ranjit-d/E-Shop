import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{
public totalitems:number=0;
  constructor(private cart:CartService){}

  ngOnInit(): void {
    this.cart.getproduct().subscribe((res)=>{
this.totalitems=res.length
    })
  }
}

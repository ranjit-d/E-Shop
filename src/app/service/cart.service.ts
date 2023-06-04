import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartitemlist: any = [];
  public productlist = new BehaviorSubject<any>([]);

  constructor() { }

  getproduct() {
    return this.productlist.asObservable();

  }
  setproduct(product: any) {
    this.cartitemlist.push(...product);
    this.productlist.next(product)
  }
  addtokart(product:any){
    this.cartitemlist.push(product);
    this.productlist.next(this.cartitemlist);
    this.gettotlprice();

  }
  gettotlprice():number{
    let grandtotal=0;
    this.cartitemlist.map((x:any)=>{
      grandtotal +=x.total;
      console.log(this.cartitemlist)
    })
    return grandtotal;
  }
  removecartitem(product:any){
    this.cartitemlist.map((x:any,index:any)=>{
      if(product.id===x.id){
        this.cartitemlist.splice(index,1)
      }
    })
    this.productlist.next(this.cartitemlist)

  }
  removeall(){
    this.cartitemlist=[];
    this.productlist.next(this.cartitemlist);
  }
}

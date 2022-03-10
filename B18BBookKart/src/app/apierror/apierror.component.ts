import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-apierror',
  templateUrl: './apierror.component.html',
  styleUrls: ['./apierror.component.scss']
})
export class ApierrorComponent implements OnInit {
   bookdetails=[];
   category:any;
  constructor(private data:ApiserviceService) { }
  ngOnInit(): void {
    console.log("Api Error handling")
  }
getBooks(){
  this.data.getBooks().subscribe((response:any)=>{
    debugger;
    this.bookdetails=response;
  });
}
  addWishlist(){
    this.data.getCategorylist().subscribe((response:any)=>{
      debugger;
      this.category=response;
    });
}
postBooks(){
  this.data.postBooks().subscribe((response:any)=>{
    debugger;
    this.bookdetails=response;
  })
}
}

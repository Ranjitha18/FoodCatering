import { Component, OnInit } from '@angular/core';
// import { Logins } from '../models/logins';
import { FoodService } from '../services/food.service';
import { Logins } from '../models/logins';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  login : Logins; 
  uusername:string ="";
  upassword:string ="";

  isLogin:boolean =true; 
  constructor(private fs : FoodService) { }

  ngOnInit() {
  }
  valid(){
    this.fs.getByname(this.uusername).subscribe(
      (data) => {this.login=data; }
     );
     

    if ((this.login.username== this.uusername) &&( this.login.password==this.upassword)){
      
     this.isLogin=false;
      
  }

  }

}
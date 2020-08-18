import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-useradmin',
  templateUrl: './useradmin.component.html',
  styleUrls: ['./useradmin.component.css']
})
export class UseradminComponent implements OnInit {
  username: string = "";
  password : string = "";
    islogin : boolean = true;
  constructor() { }

  ngOnInit() {
  }
  login(){
    if(this.username=="admin" &&  this.password=="admin"){
    this.islogin=false;
    }else{
      this.islogin=true;
      alert("please give valid username and password");
    }
    console.log( this.username, this.password);
  }
  
}

import { Component, OnInit } from '@angular/core';
import { Logins } from '../models/logins';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {
  login: Logins;
  Register: boolean =true;
  constructor(private fs : FoodService) { }

  ngOnInit() {
    
    this.login = new Logins();
  }
  add(){
    this.fs.addLogin(this.login).subscribe(
      () =>{}
    );
    this.Register=false;
  }
}

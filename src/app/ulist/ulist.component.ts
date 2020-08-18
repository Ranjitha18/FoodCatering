import { Component, OnInit } from '@angular/core';
import { Food } from '../models/food';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-ulist',
  templateUrl: './ulist.component.html',
  styleUrls: ['./ulist.component.css']
})
export class UListComponent implements OnInit {
  
  foodList : Food[];
 size : number;

  constructor(private cs:FoodService) { }

  ngOnInit() {
    console.log("method is called");
    this.cs.getAll().subscribe(
      (data) =>{ this.foodList = data; 
      this.size= this.foodList.length;} );
  }

}

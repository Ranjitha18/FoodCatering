import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Food} from '../models/food';
@Component({
  selector: 'app-list-food',
  templateUrl: './list-food.component.html',
  styleUrls: ['./list-food.component.css']
})
export class ListFoodComponent implements OnInit {

 
  errMsg: string;
  foodList : Food[];
 //size : number;
  constructor( private cs:FoodService) {
   }

  // ngOnInit() {
  //   this.cs.getAll().subscribe(
  //   (data) =>{ this.foodList = data; 
  //   this.size= this.foodList.length;} );

  // }
  ngOnInit() {
    console.log("method is called");
    this.cs.getAll().subscribe(
      //(data) => { setTimeout(()=>{this.books = data; this.headers = Object.keys(this.books[0]);},2500); },
     // (data) => { this.books = data; this.headers = Object.keys(this.books[0]); },
     (data) => { this.foodList = data },
     
      (error) => { this.errMsg = "Unable to reach the server. Please try after some time." }
      
    );
   


   
  }


}

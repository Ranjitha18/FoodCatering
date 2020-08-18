import { Component, OnInit } from '@angular/core';


import { Router, ActivatedRoute } from '@angular/router';
import { routerNgProbeToken} from '@angular/router/src/router_module';
import { Food } from '../models/food';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {
  food: Food;
  isNew : boolean;

  constructor( private actRt:ActivatedRoute,private  fs: FoodService, private actRoute : ActivatedRoute, private router: Router) { 
    this.food=new Food();
    this.isNew=true;
  }
  ngOnInit() {
    this.actRt.params.subscribe(
      (params)=>{
        let id = params.id;
        if(id){
          this.isNew=false;
          this.fs.getById(id).subscribe(
            (data)=>{this.food=data}
          );
        }
      }
    );
  }

  saveBook(){
    let ob;

    if(this.isNew){
      ob = this.fs.add(this.food);
    }else{
      ob = this.fs.updateFood(this.food);
    }

    ob.subscribe(
      (data)=>{
        let bcode = data.foodId;
        this.router.navigateByUrl(`/list`);
      }
    );
  

//   ngOnInit() {

// this.actRoute.params.subscribe(

//    (params) => {let id = params.foodId;
//       if(id){

//    this.isNew = false;
//    this.fs.getById(id).subscribe(
//     (data) => {this.food=data;
//     }
//    );
//   }else{
//     this.isNew= true;
//     this.food = new Food();
//   }
//   }
// );
//   }


//   add(){
//     if(this.isNew){
//     this.fs.add(this.food).subscribe(
//       () =>{}
//     );
//   }
//   else{
//     this.fs.modify(this.food).subscribe(()=>{});
//   }
//   this.router.navigateByUrl("/list");
// }

// }
    }
  }
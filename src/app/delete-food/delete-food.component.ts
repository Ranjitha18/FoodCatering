import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerNgProbeToken} from '@angular/router/src/router_module';
import { FoodService } from '../services/food.service';
import { Food } from '../models/food';


@Component({
  selector: 'app-delete-food',
  templateUrl: './delete-food.component.html',
  styleUrls: ['./delete-food.component.css']
})
export class DeleteFoodComponent implements OnInit {

  
  
  isNew : boolean;
  food: Food;



  constructor(private  fs: FoodService, private actRoute : ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.actRoute.params.subscribe(
    
      (params) => {let id = params.foodId;
      if(id){
       this.isNew = true;
       this.fs.getById(id).subscribe(
        (data) => {this.food=data;
        }
       );
    
      }else{
        
    
      }
      }
    );
    
      
       
    console.log(this.isNew);
      }

      
    
      delete(){
        if(this.isNew){
        this.fs.remove(this.food).subscribe(
          () =>{});
      }
      this.router.navigateByUrl("/list");

    }
    
    
}

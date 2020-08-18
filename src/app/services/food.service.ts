import { Injectable } from '@angular/core';
import {Food} from '../models/food';
import { Observable, observable } from 'rxjs';
import { Logins } from '../models/logins';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  foodList : Food[];
 
  food : Food;

  loginList: Logins[]= [{name: "saranya", phone: "8019278881", username: "saranya", password:"saranya" }]
  constructor() { 

    this.foodList =[
         {foodId:1, name:'Chicken Fry', cat: 'NON-VEG', price :100, occ:'Birthday/Marriage reception'},
         {foodId:2, name:'Sadhya', cat: 'VEG', price :150, occ:'Birthday/Marriage function'},
         {foodId:3, name:'Cake 1 Kg', cat: 'NON-VEG', price :1000, occ:'Birthday'},
         {foodId:4, name:'Chicken Biriyani', cat: 'NON-VEG', price :200, occ:'Birthday/Marriage reception'},
         {foodId:5, name:'Veg-Fried Rice', cat: 'VEG', price :90, occ:'Birthday/Marriage function'},
         {foodId:6, name:'Ice-Creams', cat: 'Deserts', price :200, occ:'Birthday/Marriage Function'},
    ];

  }

getAll():Observable<Food[]>{
  return new Observable(
    (observer)=>{
    observer.next(this.foodList);
    observer.complete();
});
}


add(food : Food):Observable<any>{
  return new Observable(
    (observer) => {
      this.foodList.push(food);
      observer.complete();
    }
  )
}


remove(food : Food):Observable<any>{
  return new Observable(
    (observer) => {
    var index = this.foodList.indexOf(food);
    if (index > -1) {
      this.foodList.splice(index, 1);
    }
    observer.complete();
    }    
  )
}




updateFood(food : Food):Observable<Food>{
  let result : Observable<Food> = new  Observable(
    (observer)=>{
      //let id = food.foodId;
      this.foodList.splice(this.foodList.indexOf(food),1);
      this.foodList.push(food);
      observer.complete();
    }
  )
  return result;
}


getById(foodId : number): Observable<Food>{
  return new Observable(
    (observer) => {
      //console.log(this.food)
      observer.next(this.foodList.find( i => i.foodId ==foodId));
            observer.complete();
    }
  )
}
getByname(username : string): Observable<Logins>{
  return new Observable(
    (observer) => {
      //console.log(this.contact)
      observer.next(this.loginList.find( i => i.username ==username));
            observer.complete();
    }
  )
  }
  addLogin(login : Logins):Observable<any>{
    return new Observable(
      (observer) => {
        this.loginList.push(login);
        observer.complete();
      }
    )
    }

// api_url : string;

//   constructor(private http : HttpClient) {
//     this.api_url = environment.api_url;
//   }

//   public getAll():Observable<Food[]>{
//     //console.log("method is called");
//     return this.http.get<Food[]>(this.api_url);
//   }

//   public getById(foodId : number) : Observable<Food>{
//     return this.http.get<Food>(`${this.api_url}/${foodId}`);
//   }

//   public add(food : Food) : Observable<Food> {
//     return this.http.post<Food>(this.api_url, food);
//   }

//   public modify(food : Food) : Observable<Food> {
//     return this.http.put<Food>(this.api_url, food);
//   }

//   public delete(foodId : number) : Observable<HttpResponse<any>> {
//     return this.http.delete<HttpResponse<any>>(`${this.api_url}/${foodId}`, {observe : 'response'});
//   }
// }

  }
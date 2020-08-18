import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { ListFoodComponent } from './list-food/list-food.component';
import { DeleteFoodComponent } from './delete-food/delete-food.component';
import { UseradminComponent } from './useradmin/useradmin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UHomeComponent } from './uhome/uhome.component';
import { UListComponent } from './ulist/ulist.component';


const routes: Routes = [
{path :"home",component:HomeComponent,pathMatch :'full' },
{path : "add", component:AddFoodComponent},
{path: "list", component:ListFoodComponent},
{path : "edit/:foodId", component:AddFoodComponent},
{path : "delete/:foodId", component:DeleteFoodComponent},
{path : 'user', component: UserloginComponent},
{path : 'uhome', component: UHomeComponent},
{path : 'ulist', component: UListComponent},
{path : 'admin', component:UseradminComponent },
{path : '', component: UserregisterComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

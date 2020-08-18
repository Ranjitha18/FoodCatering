import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ListFoodComponent } from './list-food/list-food.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { DeleteFoodComponent } from "./delete-food/delete-food.component";
import{Ng2SearchPipeModule} from 'ng2-search-filter';
import { UseradminComponent } from './useradmin/useradmin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UHomeComponent } from './uhome/uhome.component';
import { UHeaderComponent } from './uheader/uheader.component';
import { UListComponent } from './ulist/ulist.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashBoardComponent,
    ListFoodComponent,
    AddFoodComponent,
    HomeComponent,
    DeleteFoodComponent,
    UseradminComponent,
    UserloginComponent,
    UserregisterComponent,
    UHomeComponent,
    UHeaderComponent,
    UListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

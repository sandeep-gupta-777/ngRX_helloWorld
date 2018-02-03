import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {Route, Router, RouterModule} from "@angular/router";

import {AuthService} from "./auth.service";
import {ServerService} from "./server.service";
import {HelperService} from "./helper.service";
import {AppVariablesService} from "./appVariables.service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {RouterGaurdServiceService} from "./router-gaurd-service.service";
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import {StoreModule} from "@ngrx/store";
import {shoppingListReducer} from "./shopping-list/store/shopping-list.reducers";


const routes:Route[] = [


  // {path:'**', component: NotfoundComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({shoppingList:shoppingListReducer})
  ],
  providers: [
    AuthService,
    ServerService,
    HelperService,
    AppVariablesService,
    RouterGaurdServiceService
  ],
  bootstrap: [
    AppComponent

  ]
})
export class AppModule { }

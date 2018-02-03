import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Ingredient} from "../Models";
import {Observable} from "rxjs/Observable";
import * as ShoppingListActions from "./store/shopping-list.actions";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Observable<{ingredients:Ingredient[]}>;

  /*
  * store:Store<{shoppingList:{ingredients:Ingredient[]}}>
  * above line will ?????????
  * */
  constructor(private store:Store<{shoppingList:{ingredients:Ingredient[]}}>) { }

  ngOnInit() {
    console.log(this.store);
    this.ingredients = this.store.select('shoppingList');
    this.ingredients.subscribe((value)=>{
      console.log(value);
    });
  }

  addAnotherIngredient(){
    /*Dispatch an Action*/
    this.store.dispatch(new ShoppingListActions.AddIngredient(new Ingredient("Banana", 12)));
  }

  deleteIngredient(){
    /*Dispatch an Action*/
    this.store.dispatch(new ShoppingListActions.DeleteIngredient({index:2}));
  }

  updateIngredient(){
    /*Dispatch an Action*/
    this.store.dispatch(new ShoppingListActions.UpdateIngredient({index:2, ingredient: new Ingredient("Banana", 6)}));
  }


}

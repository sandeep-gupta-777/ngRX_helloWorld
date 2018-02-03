/*by default there is no property in Action class called payload, so we need to extend
* this class on our custom class which have payload property
* This is because not every Action require payload, so ngRX doesn't force us
* */

import {Action} from "@ngrx/store";
import {Ingredient} from "../../Models";

export const ADD_INGREDIENT  = 'ADD_INGREDIENT';
export const UPDATE_INGREDIENT  = 'UPDATE_INGREDIENT';
export const DELETE_INGREDIENT  = 'DELETE_INGREDIENT';

export class AddIngredient implements Action{
  readonly type: string = ADD_INGREDIENT;
  constructor(public payload:Ingredient){
  }
}

export class UpdateIngredient implements Action{
  readonly type: string = UPDATE_INGREDIENT;
  constructor(public payload:{index:number, ingredient:Ingredient}){
  }
}


export class DeleteIngredient implements Action{
  readonly type: string = DELETE_INGREDIENT;
  constructor(public payload:{index:number}){
  }
}



export type ShoppingListActions = UpdateIngredient|DeleteIngredient|AddIngredient;

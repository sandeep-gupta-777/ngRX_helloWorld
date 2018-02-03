
import {Action} from "@ngrx/store";
import {Ingredient} from "../../Models";
import * as ShoppingListActions from "./shopping-list.actions";
import {DeleteIngredient} from "./shopping-list.actions";
import {UpdateIngredient} from "./shopping-list.actions";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const UPDATE_INGREDIENT  = 'UPDATE_INGREDIENT';
export const DELETE_INGREDIENT  = 'DELETE_INGREDIENT';

const initialState = {
  ingredients:[
    new Ingredient('apple', 5),
    new Ingredient('Orange', 10)
  ]
};

/* Whatever will be returned by Reducer will become new state*/
/* arguments will be passed into the fuction automatically by ngRX*/
/* purpose of reducers is to set a new state */
/*dont use arrow function, that won't work*/
/*reducer function will be triggered whenever a function is dispatched
 */
export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions){
  /* Initial state is required because in the beginning there will be no state??? */

  const ingredients = state.ingredients;

  switch(action.type){
    case ADD_INGREDIENT:
      return{
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    case UPDATE_INGREDIENT:
      ingredients[(<UpdateIngredient>action).payload.index] = (<UpdateIngredient>action).payload.ingredient;
      return{
        ...state,
        ingredients: ingredients
      };
    case DELETE_INGREDIENT:
      console.log(1);
      ingredients.splice((<DeleteIngredient>action).payload.index,1);
      return{
        ...state,
        ingredients: [...ingredients]
     };
    default:
      return state;
  }
}

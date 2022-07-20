import { Action } from "@ngrx/store";
import { Tut } from "../model/tut";
import * as TutActions from '../Actions/tut.action' 

const intialState:Tut ={
    name:"Tutorial",
    description:"This is cool"

}

export function reducer(state:Tut[]=[intialState], action:TutActions.Actions){
    switch(action.type){
        case TutActions.ADD_TUT:
            return [...state, action.payload];
         case TutActions.REMOVE_TUT:
                return state.filter((tut,index)=>{
                    return index !== action.payload
                })
                default:
                    return state
    }
}
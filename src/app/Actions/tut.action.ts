import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Tut } from "../model/tut";

export const ADD_TUT = "[TUT] Add";
export const REMOVE_TUT = "[TUT] Remove";


export class AddTut implements Action{
    readonly type =ADD_TUT;
    constructor(public payload:Tut){}
}
 export class RemoveTut implements Action{
    readonly type =REMOVE_TUT;
    constructor(public payload:number){}
 }

 export type Actions =AddTut | RemoveTut
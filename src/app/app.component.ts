import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


interface AppSate{
  message:string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message$ : Observable<string>;

  constructor(private store:Store<AppSate>){

    this.message$ =this.store.select('message')
    
  }
    english(){
      this.store.dispatch({type:"ENGLISH"})
    }
    
    french(){
      this.store.dispatch({type:"FREMCH"})
    }

}


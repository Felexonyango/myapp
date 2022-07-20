import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tut } from 'src/app/model/tut';
import { AppState } from 'src/app/state/state';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

tutorials:Observable<Tut[]>

  constructor( private store:Store<AppState>) {
//access the store  and get the tutorials

    this.tutorials = this.store.select('tut')
   }

  ngOnInit(): void {
  }

}

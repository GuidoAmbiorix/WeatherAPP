import { wheatherState } from './../search/state/search.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getSearch } from '../search/state/search.selector';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{

  constructor(private store:Store){}

  weather$ = this.store.select(getSearch);

  ngOnInit(): void {
  }
}

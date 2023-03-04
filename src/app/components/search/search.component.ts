import { map } from 'rxjs';
import { loadWeather } from './state/search.action';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { wheatherState } from './state/search.state';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
constructor(private store:Store<wheatherState>){}

searchForm = new FormGroup({
name:new FormControl("",[Validators.required])
});

onSearch(){
if(this.searchForm.valid){
  const name:string = this.searchForm.value.name!;

  this.store.dispatch(loadWeather({name:name}));
};
};

ngOnInit(): void {
  this.searchForm.valueChanges.pipe(map(data => data.name)).subscribe((name) => this.store.dispatch(loadWeather({name:name!})))
}


}

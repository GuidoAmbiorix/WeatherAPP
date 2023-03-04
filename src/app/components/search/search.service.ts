import {debounceTime } from 'rxjs';
import { Weather } from './../../interfaces/wheater';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  getBySearch(name:string):Observable<Weather>{
    return this.http.get<Weather>(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=852c34bfec008cfc1b14469d3757cc64`).pipe(
      map(data =>{
        let weather:Weather = {} as Weather;
        weather = data;
        return weather;
      })
    );
  };

}

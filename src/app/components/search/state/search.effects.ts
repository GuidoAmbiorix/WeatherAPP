import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, debounce, debounceTime, interval, map, mergeMap, retry, retryWhen, shareReplay } from "rxjs";
import { SearchService } from "../search.service";
import { loadWeather, loadWeatherSuccess } from "./search.action";

@Injectable()
export class searchEffects{

  constructor(private action$:Actions,private searchService:SearchService){}

  loadSearch$ = createEffect(():any =>{
  return this.action$.pipe(
    ofType(loadWeather),
    debounce(() => interval(1000)),
    mergeMap((action) =>{
      return this.searchService.getBySearch(action.name).pipe(
        map((data) =>{
          const iconURL = "http://openweathermap.org/img/w/";
          data.weather[0].icon = iconURL + data.weather[0].icon+".png";
          return loadWeatherSuccess({weather:data})
        }),
      )
    }),retry(100)
  )
  });

};

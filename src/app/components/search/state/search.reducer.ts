import { loadWeatherSuccess } from './search.action';
import { createReducer, on } from "@ngrx/store";
import { initialState } from "./search.state";

const _searchReducer = createReducer(initialState,on(loadWeatherSuccess,(state,action) =>{
return {
  ...state,
  weather: action.weather
}
})
);


export function searchReducer(state:any,action:any){
  return _searchReducer(state,action);
}

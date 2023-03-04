import { wheatherState } from './search.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";


export const SEARCH_STATE_NAME = "search";
const getSearchState = createFeatureSelector<wheatherState>(SEARCH_STATE_NAME);

export const getSearch = createSelector(getSearchState,state =>{
return state.weather;
});

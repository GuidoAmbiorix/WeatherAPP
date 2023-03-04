import { createAction, props } from "@ngrx/store";
import { Weather } from "src/app/interfaces/wheater";

export const loadWeather = createAction("[Search] loadWheather",props<{name:string}>());
export const loadWeatherSuccess = createAction("[Search] loadWeatherSuccess", props<{weather:Weather}>());


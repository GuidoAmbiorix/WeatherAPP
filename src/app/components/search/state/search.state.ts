import { Weather} from './../../../interfaces/wheater';

export interface wheatherState {
  weather:Weather;
}

export const initialState:wheatherState = {
  weather:{} as Weather
}

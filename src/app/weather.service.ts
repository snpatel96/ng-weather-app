import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface WeatherDataResponse {
  location: {
    name: string;
    country: string;
  };
  current: {
    last_updated: string;
    temp_c: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
    };

    wind_kph: number;
    wind_dir: string;
    percip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  search(term: string) {
    return this.http.get<WeatherDataResponse>(
      'https://api.weatherapi.com/v1/current.json',
      {
        params: {
          key: '2a6ac9531a3b40cfb70194215230701',
          q: term,
          aqi: 'yes',
        },
      }
    );
  }

  SearchLocation(lat: number, long: number) {
    return this.http.get<WeatherDataResponse>(
      'https://api.weatherapi.com/v1/current.json',
      {
        params: {
          key: '2a6ac9531a3b40cfb70194215230701',
          q: `${lat},${long}`,
          aqi: 'yes',
        },
      }
    );
  }
}

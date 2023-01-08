import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  search(term: string) {
    return this.http.get('https://api.weatherapi.com/v1/current.json', {
      params: {
        key: '2a6ac9531a3b40cfb70194215230701',
        q: term,
        aqi: 'yes',
      },
    });
  }
}

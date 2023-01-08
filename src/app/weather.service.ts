import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor() {}

  search(term: string) {
    return 'weather search result';
  }
}

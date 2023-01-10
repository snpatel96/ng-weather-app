import { Component } from '@angular/core';
import { WeatherDataResponse, WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  weatherData!: WeatherDataResponse;

  constructor(private weatherService: WeatherService) {}
  onTerm(term: string) {
    this.weatherService
      .search(term)
      .subscribe(
        (response: WeatherDataResponse) => (this.weatherData = response)
      );
  }
}

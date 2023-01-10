import { Component, Input } from '@angular/core';
import { WeatherDataResponse } from '../weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css'],
})
export class WeatherCardComponent {
  @Input() weatherData!: WeatherDataResponse;
}

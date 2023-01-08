import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private weatherService: WeatherService) {}
  onTerm(term: string) {
    const results = this.weatherService.search(term);
    console.log(results);
  }
}

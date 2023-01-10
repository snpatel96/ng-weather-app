import { Component, OnInit } from '@angular/core';
import { WeatherDataResponse, WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  lat!: number;
  long!: number;
  weatherData!: WeatherDataResponse;

  constructor(private weatherService: WeatherService) {}
  onTerm(term: string) {
    this.weatherService
      .search(term)
      .subscribe((res: WeatherDataResponse) => (this.weatherData = res));
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
        this.onLocation(this.lat, this.long);
      },
      (err) => console.log(err)
    );
  }

  onLocation(lat: number, long: number) {
    this.weatherService
      .SearchLocation(this.lat, this.long)
      .subscribe((res: WeatherDataResponse) => (this.weatherData = res));
  }
}

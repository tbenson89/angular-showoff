import { Component, Injectable, OnInit } from '@angular/core';

export class Weather {
  temperature: string = '';
  description: string = '';
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor() { }

  public saveWeather(weather: Weather) {
    console.log(`Temperature: ${weather.temperature} - Description: ${weather.description}`);
  }
}

@Component({
  selector: 'app-weather',
  template: `
  <div class="rounded-xl bg-indigo-500 text-white">
    <form>
      <label>
        Description <input name="description" />
      </label>
      <br />
      <label>
        Temperature <input name="temperature" />
      </label>
      <button type="submit" (click)="onSubmit();">Submit</button>
    </form>
  </div>`
})
export class WeatherComponent implements OnInit {
  weather: Weather = new Weather;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weather = new Weather();
  }

  onSubmit() {
    this.weatherService.saveWeather(this.weather);
  }
}

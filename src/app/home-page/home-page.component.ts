import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  myweather:any;
  temperature:number=0;
  feelsliketemp:number=0;
  humidity:number=0;
  pressure:number=0;
  summary:string='';
  wind:number=0;
  iconUrl:string='';
  maxtemp:number=0;

  constructor(private weatherservice:AuthService) {}
  ngOnInit(): void {
    this.weatherservice.getweather().subscribe({

      next:(res)=>{
        console.log(res);
        this.myweather=res;
        console.log(this.myweather);
        this.temperature=this.myweather.main.temp;
        this.feelsliketemp=this.myweather.main.feels_like;
        this.humidity=this.myweather.main.humidity;
        this.summary=this.myweather.weather[0].main;
        this.pressure=this.myweather.main.pressure;
        this.wind=this.myweather.wind.speed;
        this.maxtemp=this.myweather.main.temp_max;
        this.iconUrl='https://openweathermap.org/img/wn/'+this.myweather.weather[0].icon +'@2x.png';
        
      },

      error:(error)=>console.log(error.message),
      complete:()=>console.info('API call completed')
    })
  }
}




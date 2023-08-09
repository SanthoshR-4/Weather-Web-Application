import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  getweather(){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=2b9846920598c2ef89ecdce62b9cd943&units=metric');
  }
}

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

 
  constructor(private httpClient:HttpClient) { }


  getCities():Observable<City[]>{
    return this.httpClient.get<City[]>("http://localhost:3000/cities")
  }

}

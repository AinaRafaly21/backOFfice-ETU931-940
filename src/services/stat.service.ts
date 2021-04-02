import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatService {

  constructor(private http : HttpClient) { }

  findOffre() : any{
    return this.http.get(BASE_URL + 'nom-offre');
  }

  findStat() : any{
    return this.http.get(BASE_URL + 'stat');
  }
}

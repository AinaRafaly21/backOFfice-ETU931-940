import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatService {

  constructor(private http : HttpClient) { }

  findOffre() : any{
    return this.http.get('https://webserviceprojet.herokuapp.com/' + 'nom-offre');
  }

  findStat() : any{
    return this.http.get('https://webserviceprojet.herokuapp.com/' + 'stat');
  }
}

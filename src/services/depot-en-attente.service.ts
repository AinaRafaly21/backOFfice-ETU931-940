import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepotEnAttenteService {

  constructor(private http : HttpClient) { }

  findDepotEnAttente() : any {
    return this.http.get(BASE_URL + 'depot-en-attente');
  }

  valider(depot : any){
    let headers = new HttpHeaders().set("Content-type", "application/json");
    console.log("VALIDEEEEEER :", depot);
    return this.http.post(BASE_URL + 'vrai-depot', depot, { headers : headers } );
  }

  refuser(id : any){
    console.log("REEEFUSSSEEEER :", id);
    return this.http.delete(BASE_URL + 'refuser-depot/' + id );
  }
}

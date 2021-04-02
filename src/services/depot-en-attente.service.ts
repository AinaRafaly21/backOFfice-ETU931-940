import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { BASE_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepotEnAttenteService {

  constructor(private http : HttpClient) { }

  findDepotEnAttente() : any {
    return this.http.get('https://webserviceprojet.herokuapp.com/' + 'depot-en-attente');
  }

  valider(depot : any){
    let headers = new HttpHeaders().set("Content-type", "application/json");
    console.log("VALIDEEEEEER :", depot);
    return this.http.post('https://webserviceprojet.herokuapp.com/' + 'vrai-depot', depot, { headers : headers } );
  }

  refuser(id : any){
    console.log("REEEFUSSSEEEER :", id);
    return this.http.delete('https://webserviceprojet.herokuapp.com/' + 'refuser-depot/' + id );
  }
}

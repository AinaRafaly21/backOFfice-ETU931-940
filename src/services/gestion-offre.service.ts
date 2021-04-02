import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GestionOffreService {

  constructor(private http : HttpClient) { }

  ajout(offre : any){
    let headers = new HttpHeaders().set("Content-type", "application/json");
    console.log("AJOUUUUT OFFREEEE : " , offre);
    return this.http.post(BASE_URL + 'ajout-offre', offre, { headers : headers });
  }

  findOffre() : any{
    return this.http.get(BASE_URL + 'offre');
  }

  findTypeOffre() : any{
    return this.http.get(BASE_URL + 'type-offre');
  }

  ajouterTypeOffre(offre_type_offre : any){
    let headers = new HttpHeaders().set("Content-type", "application/json");
    console.log("-------- :", offre_type_offre);
    return this.http.post(BASE_URL + 'offre-type-offre', offre_type_offre, { headers : headers } );
  }

  ajouterNewType(type : any){
    let headers = new HttpHeaders().set("Content-type", "application/json");
    console.log("NOOUVEEEEAU TYYYPEEE :", type);
    return this.http.post(BASE_URL + 'ajout-type', type, { headers : headers } );
  }
}

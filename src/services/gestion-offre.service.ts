import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GestionOffreService {

  constructor(private http : HttpClient) { }

  ajout(offre : any){
    let headers = new HttpHeaders().set("Content-type", "application/json");
    console.log("AJOUUUUT OFFREEEE : " , offre);
    return this.http.post('https://webserviceprojet.herokuapp.com/' + 'ajout-offre', offre, { headers : headers });
  }

  findOffre() : any{
    return this.http.get('https://webserviceprojet.herokuapp.com/' + 'offre');
  }

  findTypeOffre() : any{
    return this.http.get('https://webserviceprojet.herokuapp.com/' + 'type-offre');
  }

  ajouterTypeOffre(offre_type_offre : any){
    let headers = new HttpHeaders().set("Content-type", "application/json");
    console.log("-------- :", offre_type_offre);
    return this.http.post('https://webserviceprojet.herokuapp.com/' + 'offre-type-offre', offre_type_offre, { headers : headers } );
  }

  ajouterNewType(type : any){
    let headers = new HttpHeaders().set("Content-type", "application/json");
    console.log("NOOUVEEEEAU TYYYPEEE :", type);
    return this.http.post('https://webserviceprojet.herokuapp.com/' + 'ajout-type', type, { headers : headers } );
  }
}

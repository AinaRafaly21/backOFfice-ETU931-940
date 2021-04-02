import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepotEnAttenteService } from 'src/services/depot-en-attente.service';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit {
  listDepotEnAttente : any;

  constructor(private depServ : DepotEnAttenteService, public router : Router) { }

  ngOnInit(){
    this.depServ.findDepotEnAttente().subscribe((res : any) =>{
      this.listDepotEnAttente = res['data'];
      console.log('DATA', this.listDepotEnAttente);
    },
    (err: { error: { [x: string]: { message: any; }; }; }) =>{
      let err_message = err.error;
      if(err.error['META'] != undefined) err_message = err.error['META'].message;
    });
  }

  valider(index : any){
    let depot = this.listDepotEnAttente[index];
    this.depServ.valider(depot).subscribe((res : any) =>{
      console.log(depot);
      window.location.reload();
    });
  }

  refuser(index : any){
    let id = this.listDepotEnAttente[index].idDepotEnAttente;
    this.depServ.refuser(id).subscribe((res : any) =>{
      console.log(id);
      window.location.reload();
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GestionOffreService } from 'src/services/gestion-offre.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {
  listOffre : any;
  listTypeOffre : any;

  constructor(private offServ : GestionOffreService, public router : Router) {}

  ngOnInit() {
    this.offServ.findOffre().subscribe((res : any) => {
      this.listOffre = res['data'];
      console.log('DATA', this.listOffre);
    },
    this.offServ.findTypeOffre().subscribe((resp : any) => {
      this.listTypeOffre = resp['data'];
      console.log('DATA', this.listTypeOffre);
    },
    (err: { error: { [x: string]: { message: any; }; }; }) =>{
      let err_message = err.error;
      if(err.error['META'] != undefined) err_message = err.error['META'].message;
    }));
  }

  ajouter(AjoutForm : NgForm){
    this.offServ.ajout(AjoutForm.value).subscribe(
      (res : any) =>{
      console.log(res);
      window.location.reload();
    },
    (err: { error: { [x: string]: { message: any; }; }; })=>{
      let err_message = err.error;
      if(err.error['META'] != undefined) err_message = err.error['META'].message;
      alert("Vous avez ajouté une nouvelle offre.");
      }
    );
  }

  typeoffre(OffreTypeOffreForm : NgForm){
    this.offServ.ajouterTypeOffre(OffreTypeOffreForm.value).subscribe(
      (res)=>{
       console.log(res)
       window.location.reload();
      },
      (err)=>{
        let err_message = err.error;
        if(err.error['META'] != undefined) err_message = err.error['META'].message;
      }
    );
  }

  nouveautype(TypeForm : NgForm){
    this.offServ.ajouterNewType(TypeForm.value).subscribe(
      (res)=>{
       console.log(res)
       window.location.reload();
      },
      (err)=>{
        let err_message = err.error;
        if(err.error['META'] != undefined) err_message = err.error['META'].message;
      }
    );
  }

}

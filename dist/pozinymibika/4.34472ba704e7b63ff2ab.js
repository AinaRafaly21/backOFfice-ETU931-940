(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Y6SE:function(e,t,r){"use strict";r.r(t),r.d(t,"GestionModule",function(){return k});var o=r("fXoL"),n=r("tk/3");let a=(()=>{class e{constructor(e){this.http=e}ajout(e){let t=(new n.c).set("Content-type","application/json");return console.log("AJOUUUUT OFFREEEE : ",e),this.http.post("https://webserviceprojet.herokuapp.com/ajout-offre",e,{headers:t})}findOffre(){return this.http.get("https://webserviceprojet.herokuapp.com/offre")}findTypeOffre(){return this.http.get("https://webserviceprojet.herokuapp.com/type-offre")}ajouterTypeOffre(e){let t=(new n.c).set("Content-type","application/json");return console.log("-------- :",e),this.http.post("https://webserviceprojet.herokuapp.com/offre-type-offre",e,{headers:t})}ajouterNewType(e){let t=(new n.c).set("Content-type","application/json");return console.log("NOOUVEEEEAU TYYYPEEE :",e),this.http.post("https://webserviceprojet.herokuapp.com/ajout-type",e,{headers:t})}}return e.\u0275fac=function(t){return new(t||e)(o.Yb(n.a))},e.\u0275prov=o.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var i=r("tyNb"),c=r("Wp6s"),f=r("wZkO"),l=r("3Pt+"),b=r("kmnG"),p=r("qFsG"),s=r("ofXK"),u=r("bTqV"),m=r("d3UM"),d=r("FKr1");function g(e,t){1&e&&(o.Ub(0,"mat-error"),o.Cc(1,"type?"),o.Tb())}function T(e,t){1&e&&(o.Ub(0,"mat-error"),o.Cc(1,"nom?"),o.Tb())}function h(e,t){1&e&&(o.Ub(0,"mat-error"),o.Cc(1,"prix?"),o.Tb())}function v(e,t){1&e&&(o.Ub(0,"mat-error"),o.Cc(1,"validite?"),o.Tb())}function y(e,t){if(1&e&&(o.Ub(0,"mat-option",26),o.Cc(1),o.Tb()),2&e){const e=t.$implicit;o.kc("value",e.idOffre),o.Cb(1),o.Dc(e.nom_offre)}}function U(e,t){if(1&e&&(o.Ub(0,"mat-option",26),o.Cc(1),o.Tb()),2&e){const e=t.$implicit;o.kc("value",e.idTypeOffre),o.Cb(1),o.Dc(e.type)}}function O(e,t){1&e&&(o.Ub(0,"mat-error"),o.Cc(1,"valeur?"),o.Tb())}const C=[{path:"",component:(()=>{class e{constructor(e,t){this.offServ=e,this.router=t}ngOnInit(){this.offServ.findOffre().subscribe(e=>{this.listOffre=e.data,console.log("DATA",this.listOffre)},this.offServ.findTypeOffre().subscribe(e=>{this.listTypeOffre=e.data,console.log("DATA",this.listTypeOffre)},e=>{let t=e.error;null!=e.error.META&&(t=e.error.META.message)}))}ajouter(e){this.offServ.ajout(e.value).subscribe(e=>{console.log(e),window.location.reload()},e=>{let t=e.error;null!=e.error.META&&(t=e.error.META.message),alert("Vous avez ajout\xe9 une nouvelle offre.")})}typeoffre(e){this.offServ.ajouterTypeOffre(e.value).subscribe(e=>{console.log(e),window.location.reload()},e=>{let t=e.error;null!=e.error.META&&(t=e.error.META.message)})}nouveautype(e){this.offServ.ajouterNewType(e.value).subscribe(e=>{console.log(e),window.location.reload()},e=>{let t=e.error;null!=e.error.META&&(t=e.error.META.message)})}}return e.\u0275fac=function(t){return new(t||e)(o.Ob(a),o.Ob(i.a))},e.\u0275cmp=o.Ib({type:e,selectors:[["app-gestion"]],decls:57,vars:7,consts:[[1,"login-page"],[1,"mat-elevation-z12"],[2,"text-align","center"],["mat-stretch-tabs","",1,"example-stretched-tabs"],["label","Type offre"],["TypeForm","ngForm"],["type","text","matInput","","placeholder","Type offre","required","","name","type","ngModel",""],["type","ngModel"],[4,"ngIf"],["mat-raised-button","","color","primary",1,"login-button",3,"click"],["label","Offre"],["AjoutForm","ngForm"],["matInput","","placeholder","Nom de l'offre","required","","name","nom_offre","ngModel",""],["nom_offre","ngModel"],["matInput","","placeholder","Prix (MGA)","required","","name","prix_offre","ngModel",""],["prix_offre","ngModel"],["type","number","matInput","","placeholder","Validite (min)","required","","name","validite_offre","ngModel",""],["validite_offre","ngModel"],["label","Details offre"],["action",""],["OffreTypeOffreForm","ngForm"],["ngModel","","name","idOffre"],[3,"value",4,"ngFor","ngForOf"],["ngModel","","name","idType_offre"],["type","number","matInput","","placeholder","Valeur (min/unite/Mo)","required","","name","valeur_offre","ngModel",""],["valeur_offre","ngModel"],[3,"value"]],template:function(e,t){if(1&e){const e=o.Vb();o.Ub(0,"div",0),o.Ub(1,"mat-card",1),o.Ub(2,"mat-card-title",2),o.Cc(3,"Gestion Offre"),o.Tb(),o.Ub(4,"mat-tab-group",3),o.Ub(5,"mat-tab",4),o.Ub(6,"mat-card-content"),o.Ub(7,"form",null,5),o.Ub(9,"mat-form-field"),o.Pb(10,"input",6,7),o.Ac(12,g,2,0,"mat-error",8),o.Tb(),o.Ub(13,"button",9),o.bc("click",function(){o.tc(e);const r=o.qc(8);return t.nouveautype(r)}),o.Cc(14," Enregistrer "),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Ub(15,"mat-tab",10),o.Ub(16,"mat-card-content"),o.Ub(17,"form",null,11),o.Ub(19,"mat-form-field"),o.Pb(20,"input",12,13),o.Ac(22,T,2,0,"mat-error",8),o.Tb(),o.Ub(23,"mat-form-field"),o.Pb(24,"input",14,15),o.Ac(26,h,2,0,"mat-error",8),o.Tb(),o.Ub(27,"mat-form-field"),o.Pb(28,"input",16,17),o.Ac(30,v,2,0,"mat-error",8),o.Tb(),o.Ub(31,"button",9),o.bc("click",function(){o.tc(e);const r=o.qc(18);return t.ajouter(r)}),o.Cc(32," Enregistrer "),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Ub(33,"mat-tab",18),o.Ub(34,"mat-card-content"),o.Ub(35,"form",19,20),o.Ub(37,"mat-form-field"),o.Ub(38,"mat-label"),o.Cc(39,"Offre"),o.Tb(),o.Ub(40,"mat-select",21),o.Ub(41,"mat-label"),o.Cc(42,"Offre"),o.Tb(),o.Ac(43,y,2,2,"mat-option",22),o.Tb(),o.Tb(),o.Ub(44,"mat-form-field"),o.Ub(45,"mat-label"),o.Cc(46,"Type offre"),o.Tb(),o.Ub(47,"mat-select",23),o.Ub(48,"mat-label"),o.Cc(49,"Type Offre"),o.Tb(),o.Ac(50,U,2,2,"mat-option",22),o.Tb(),o.Tb(),o.Ub(51,"mat-form-field"),o.Pb(52,"input",24,25),o.Ac(54,O,2,0,"mat-error",8),o.Tb(),o.Ub(55,"button",9),o.bc("click",function(){o.tc(e);const r=o.qc(36);return t.typeoffre(r)}),o.Cc(56," Enregistrer "),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb()}if(2&e){const e=o.qc(11),r=o.qc(21),n=o.qc(25),a=o.qc(29),i=o.qc(53);o.Cb(12),o.kc("ngIf",e.invalid),o.Cb(10),o.kc("ngIf",r.invalid),o.Cb(4),o.kc("ngIf",n.invalid),o.Cb(4),o.kc("ngIf",a.invalid),o.Cb(13),o.kc("ngForOf",t.listOffre),o.Cb(7),o.kc("ngForOf",t.listTypeOffre),o.Cb(4),o.kc("ngIf",i.invalid)}},directives:[c.a,c.d,f.b,f.a,c.b,l.m,l.g,l.h,b.c,p.a,l.a,l.l,l.f,l.i,s.k,u.a,l.j,b.f,m.a,s.j,b.b,d.j],styles:[".login-page[_ngcontent-%COMP%]{top:0;margin:0;padding:0;width:100%;height:100%;display:block;background-color:#fff;background-position:50%;background-repeat:no-repeat;background-size:cover;overflow:hidden}mat-card[_ngcontent-%COMP%]{width:60%;margin:10% auto;border-radius:8px}mat-checkbox[_ngcontent-%COMP%], mat-form-field[_ngcontent-%COMP%]{width:80%;display:block;margin:auto}mat-card-content[_ngcontent-%COMP%]{margin-top:20px}.login-button[_ngcontent-%COMP%]{display:block;width:80%;margin:20px auto}"]}),e})()}];let k=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Mb({type:e}),e.\u0275inj=o.Lb({imports:[[i.c.forChild(C)],i.c]}),e})()}}]);
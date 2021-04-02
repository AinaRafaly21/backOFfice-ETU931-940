import { GestionComponent } from './gestion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';


const routes: Routes = [{ path: '', component: GestionComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionModule {

}

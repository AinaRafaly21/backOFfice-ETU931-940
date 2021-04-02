import { ValidationComponent } from './validation.component';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: ValidationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidationModule { }

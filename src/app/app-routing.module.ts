import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from './components/help/help.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './module/login/login.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'help', component: HelpComponent },
  { path: 'gestion', loadChildren: () => import('./module/gestion/gestion.module').then(m => m.GestionModule) },
  { path: 'stat', loadChildren: () => import('./module/stat/stat.module').then(m => m.StatModule) },
  { path: 'validation', loadChildren: () => import('./module/validation/validation.module').then(m => m.ValidationModule) },

  { path: '', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

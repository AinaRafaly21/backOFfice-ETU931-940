import { StatComponent } from './stat.component';
import { NgModule } from '@angular/core';
import { RouterModule ,Routes} from '@angular/router';


const routes: Routes = [{ path: '', component: StatComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatModule { }

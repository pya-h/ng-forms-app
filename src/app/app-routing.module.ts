import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

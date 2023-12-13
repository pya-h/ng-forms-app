import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  // { path: 'ng-forms-app', redirectTo: '/new', pathMatch: 'full'},
  { path: 'ng-forms-app', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

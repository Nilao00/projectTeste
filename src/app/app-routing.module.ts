import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutenticacaoComponentsComponent } from './autenticacao-components/autenticacao-components.component';
import { ListElementsComponent } from './list-elements/list-elements.component';
import { AuthGuard } from './Services/GuardRouter/AuthGuard';
const routes: Routes = [
  { path: 'login', component: AutenticacaoComponentsComponent },
  { path: 'list', component: ListElementsComponent, canActivate: [AuthGuard] },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

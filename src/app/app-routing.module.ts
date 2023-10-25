import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostComponent } from './cost/cost.component';
import { CostTableComponent } from './cost-table/cost-table.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/authguard.service';
import { LoginGuard } from './service/loginguard.service';

const routes: Routes = [
  { path: "login", component: LoginComponent, canActivate: [LoginGuard] },
  { path: "cadastroCusto", component: CostComponent, canActivate: [AuthGuard] },
  { path: "dreRelatorio", component: CostTableComponent, canActivate: [AuthGuard] },
  { path: "", redirectTo: "/cadastroCusto", pathMatch: "full" },
  // Outras rotas da sua aplicação
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

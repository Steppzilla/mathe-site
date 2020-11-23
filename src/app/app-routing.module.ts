import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogarithmenComponent } from './component/logarithmen/logarithmen.component';
import { MenuComponent } from './component/menu/menu.component';

const routes: Routes = [
  {path: "", redirectTo: '/menu', pathMatch: 'full' },
  {path: "menu", component: MenuComponent },
  {path: "logarithmen", component: LogarithmenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

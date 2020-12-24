import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogarithmenComponent } from './component/logarithmen/logarithmen.component';
import { MenuComponent } from './component/menu/menu.component';
import { Steckbrief1Component } from './component/steckbrief1/steckbrief1.component';

const routes: Routes = [
  {path: "", redirectTo: 'steckbrief', pathMatch: 'full' },
  {path: "menu", component: MenuComponent },
  {path: "logarithmen", component: LogarithmenComponent },
  {path: "steckbrief", component: Steckbrief1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

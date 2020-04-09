import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimeComponent } from './prime/prime.component';
import { MaterialComponent } from './material/material.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  { path : '', redirectTo: '/menu', pathMatch: 'full'},
  {path: 'menu', component: MenuComponent, children: [
    { path: 'material', component: MaterialComponent },
    { path: 'primeng', component: PrimeComponent }]},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

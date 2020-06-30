import { NgModule } from '@angular/core';
import { DispositivoComponent } from './components/dispositivo/dispositivo.component';
import { MonitorComponent } from './components/monitor/monitor.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: DispositivoComponent}, // '/' Mostrará el componente de los datos de los dispositivos
  { path: '/monitor', component: MonitorComponent}, // '/monitor' Mostrara el componente monitor en la vista
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

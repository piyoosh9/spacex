import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'launches', pathMatch: 'full' },
  { path: 'launches', loadChildren: () => import('./views/modules/launch-programs/launch-programs.module').then(m => m.LaunchProgramsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { EpisodesComponent } from './episodes/episodes.component';

const routes: Routes = [
  {path:'',component:ContainerComponent},
  {path:'episodes', component:EpisodesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

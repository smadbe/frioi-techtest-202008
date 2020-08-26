import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task.component';

@NgModule({
  imports: [ RouterModule.forRoot([
    {
      path: '',
      component: TaskComponent
    },
    {
      path: ':id',
      component: TaskComponent
    },
  ]) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { List } from './people/list/list';
import { Add } from './people/add/add';
import { View } from './people/view/view';

const routes: Routes = [
  {
    path: 'people',
    component: List,
  },
  {
    path: 'people/add',
    component: Add,
  },
  {
    path: 'people/:id',
    component: View,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

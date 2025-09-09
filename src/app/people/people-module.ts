import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { List } from './list/list';
import { Add } from './add/add';
import { View } from './view/view';
import { Edit } from './edit/edit';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [List, Add, View, Edit],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [List, Add, View, Edit],
})
export class PeopleModule {}

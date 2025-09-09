import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { List } from './list/list';
import { Add } from './add/add';
import { View } from './view/view';
import { Edit } from './edit/edit';



@NgModule({
  declarations: [List, Add, View, Edit],
  imports: [CommonModule],
  exports: [List, Add, View, Edit],
})
export class PeopleModule {}

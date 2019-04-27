import {NgModule} from '@angular/core';
import {OpsTreeContainerComponent} from './ops-tree-container/ops-tree-container.component';
import {CommonModule} from '@angular/common';
import { OpsTreeViewItemComponent } from './components/ops-tree-view-item/ops-tree-view-item.component';
import { OpsTreeViewEditbarComponent } from './components/ops-tree-view-editbar/ops-tree-view-editbar.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [OpsTreeContainerComponent, OpsTreeViewItemComponent, OpsTreeViewEditbarComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    OpsTreeContainerComponent
  ]
})
export class OpsTreeModule { }

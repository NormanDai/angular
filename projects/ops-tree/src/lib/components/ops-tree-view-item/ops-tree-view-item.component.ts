import {Component, Input, OnInit, Output} from '@angular/core';
import {TreeViewModel} from '../../models/tree-view.model';
import {TreeViewModelHelper} from '../../common/tree-view-model.helper';

@Component({
  selector: 'ops-tree-view-item',
  templateUrl: './ops-tree-view-item.component.html',
  styleUrls: ['../../ops-tree.css']
})
export class OpsTreeViewItemComponent implements OnInit {


  treeViewModel: TreeViewModel;

  newChildName: string;

  @Input('view_model') viewModel: TreeViewModel;

  constructor() { }

  ngOnInit() {
    this.treeViewModel = this.viewModel;
  }

  switchExpendIcon() {
    this.treeViewModel.options.expend = !this.treeViewModel.options.expend;
  }

  switchShowActionToolbar() {
    if (true === this.treeViewModel.config.showActionToolbar) {
      this.treeViewModel.options.showActionToolbar = !this.treeViewModel.options.showActionToolbar;
    }
  }

  switchEditModel() {
    this.treeViewModel.options.edit = !this.treeViewModel.options.edit;
  }

  showAddChildBar() {
    this.treeViewModel.options.expend = true;
    this.treeViewModel.options.showAddChildToobar = !this.treeViewModel.options.showAddChildToobar;
  }

  confirmEditResult() {
    this.treeViewModel.options.edit = !this.treeViewModel.options.edit;
  }

  cancelAddChild() {
    this.treeViewModel.options.showAddChildToobar = false;
  }

  confirmAddChild() {
    this.treeViewModel.options.showAddChildToobar = false;
    if (this.newChildName && this.newChildName.trim().length > 0) {
      console.log('添加新节点', [this.newChildName]);
     // TreeViewModelHelper.buildNewTreeViewModelToParent(this.newChildName, false , this.treeViewModel);
    }
  }
}

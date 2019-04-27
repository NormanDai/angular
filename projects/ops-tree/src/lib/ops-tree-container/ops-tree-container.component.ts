import {Component, Input, OnInit} from '@angular/core';
import {TreeConfig, TreeViewModel} from '../models/tree-view.model';
import {TreeViewModelConvertor} from '../convertor/TreeViewModelConvertor';
import {TreeViewModelService} from '../services/tree-view-model.service';
import {TreeViewModelHelper} from '../common/tree-view-model.helper';

@Component({
  selector: 'ops-tree-container',
  templateUrl: './ops-tree-container.component.html',
  styleUrls: ['../ops-tree.css']
})
export class OpsTreeContainerComponent implements OnInit {

  @Input('tree_view_meta') treeViewMeta: any;

  @Input('tree_view_config') treeConfig: TreeConfig;

  @Input('tree_view_convertor') treeViewConvertor: TreeViewModelConvertor<any>;

  private treeViewModels: TreeViewModel[];


  constructor(private treeViewModelService: TreeViewModelService) {

  }

  ngOnInit() {
    const viewModels = this.treeViewConvertor.viewModelInput(this.treeViewMeta);
    console.log('treeViewModels', [viewModels]);
    this.treeViewModels = viewModels;
    TreeViewModelHelper.initTreeModels(this.treeViewModels);
    if (this.treeConfig) {
      TreeViewModelHelper.initUserTreeConfig(this.treeViewModels, this.treeConfig);
    }
  }

}

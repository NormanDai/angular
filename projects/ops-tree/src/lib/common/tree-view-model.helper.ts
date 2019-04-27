import {TreeConfig, TreeItemOptions, TreeViewModel} from '../models/tree-view.model';
import {OpsTreeConstants} from './ops-tree.constants';
import {Tree} from '@angular/router/src/utils/tree';

export class TreeViewModelHelper {


  /**
   * 创建新的视图对象
   * @param name 名称
   * @param index 索引
   */
  public static getNewOneViewModel(name: string, index: number): TreeViewModel {
    const newOne = new TreeViewModel();
    newOne.name = name;
    newOne.index = index;
    newOne.id = Math.random();
    return newOne;
  }


  public static buildNewTreeViewModelToParent(name: string, apend: boolean, parent: TreeViewModel): void {
    const newOneViewModel = TreeViewModelHelper.getNewOneViewModel(name, parent.index + 1);
    if (parent) {
      parent.children.push(newOneViewModel);
    } else {
      const newTmpArray = new Array<TreeViewModel>();
      newTmpArray.push(newOneViewModel);
      parent.children.forEach((value) => {
        newTmpArray.push(value);
      });
      parent.children = newTmpArray;
    }

  }

  /**
   * 初始化 树属性
   * @param treeViewModels 模型
   */
  public static initTreeModels(treeViewModels: TreeViewModel[]): TreeViewModel[] {
    TreeViewModelHelper.buildTreeModelsOninit(treeViewModels, 1);
    return treeViewModels;
  }

  public static initUserTreeConfig(treeViewModels: TreeViewModel[], config: TreeConfig): TreeViewModel[] {
    TreeViewModelHelper.buildTreeConfigOninit(treeViewModels, config);
    return treeViewModels;
  }


  private static treeModelIterator(treeViewModels: TreeViewModel[], value?: any, callbackFn?: (model: TreeViewModel, value?: any) => void) {
    treeViewModels.forEach((valueItem) => {
      if (callbackFn) {
        callbackFn.call(valueItem, value);
      }
      if (valueItem.children && valueItem.children.length > 0) {
        TreeViewModelHelper.treeModelIterator(valueItem.children, value, callbackFn);
      }
    });
  }

  private static buildTreeModelsOninit(treeViewModels: TreeViewModel[], index?: number) {
    const tmpIndex = index;
    treeViewModels.forEach((value, i) => {
      // value.options = OpsTreeConstants.INIT_TREE_OPTIONS;
      const itemOptions = new TreeItemOptions();
      itemOptions.expend = false;
      itemOptions.edit = false;
      itemOptions.showActionToolbar = false;
      itemOptions.showAddChildToobar = false;
      value.options = itemOptions;

      if (!value.index) {
        value.index = tmpIndex;
      }
      if (value.children && value.children.length > 0) {
        TreeViewModelHelper.buildTreeModelsOninit(value.children, tmpIndex + 1);
      }
    });
  }


  private static buildTreeConfigOninit(treeViewModels: TreeViewModel[], config?: TreeConfig) {
    treeViewModels.forEach((value, i) => {
      value.config = config;
      if (value.children && value.children.length > 0) {
        TreeViewModelHelper.buildTreeConfigOninit(value.children, config);
      }
    });
  }
}

import {TreeViewModelConvertor} from '../../../projects/ops-tree/src/lib/convertor/TreeViewModelConvertor';
import {SelfMetaModel, SelfTreeMetaModel} from '../models/self-meta.model';
import {TreeViewModel} from '../../../projects/ops-tree/src/lib/models/tree-view.model';

export class SelfViewModelConvertor implements TreeViewModelConvertor<SelfTreeMetaModel> {


  /**
   * 实现 元数据输入方法
   * @param meta 元数据
   */
  viewModelInput(meta: SelfTreeMetaModel): TreeViewModel[] {
    const viewModels = new Array<TreeViewModel>();
    this.buildViewModel(1, meta.data, viewModels);
    console.log('viewModelInput', viewModels);
    return viewModels;
  }


  private buildViewModel(index: number, metaModels: SelfMetaModel[], viewModels: TreeViewModel[]) {
    const tmpIndex = index;
    metaModels.forEach((value, i) => {
      const viewModel: TreeViewModel = {
        id: Number(value.bizId),
        name: value.bizName,
        index: tmpIndex,
        position: i,
        metaData: value,
        children: new Array<TreeViewModel>()
      };
      viewModels.push(viewModel);
      if (value.children && value.children.length > 0) {
        this.buildViewModel(tmpIndex + 1, value.children, viewModel.children);
      }
    });
  }


  /**
   * 实现 元数据导出
   * @param treeViewModel 视图模型
   */
  viewModelOutput(treeViewModels: TreeViewModel[]): SelfTreeMetaModel {
    return undefined;
  }

}


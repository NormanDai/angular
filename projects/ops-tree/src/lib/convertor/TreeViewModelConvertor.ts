import {TreeViewModel} from '../models/tree-view.model';

export interface TreeViewModelConvertor <T> {


  viewModelOutput(treeViewModel$: TreeViewModel[]): T;

  viewModelInput(metaData$: T): TreeViewModel[];


}

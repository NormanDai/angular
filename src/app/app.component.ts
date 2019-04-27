import {Component, Output} from '@angular/core';
import {TreeConfig} from '../../projects/ops-tree/src/lib/models/tree-view.model';
import {TreeViewModelConvertor} from '../../projects/ops-tree/src/lib/convertor/TreeViewModelConvertor';
import {SelfViewModelConvertor} from './convertor/self-view-model.convertor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ops-tree-dnd';

  viewMeta = {
    data: [
      {
        bizName: 'batch 01',
        bizId: '1',
        children: [
          {
            bizName: 'group 01',
            bizId: '11',
            children: [],
          },
          {
            bizName: 'group 02',
            bizId: '12',
            children: [],
          },
        ],
      },
      {
        bizName: 'batch 02',
        bizId: '2',
        children: [
          {
            bizName: 'group 21',
            bizId: '21',
            children: [],
          },
          {
            bizName: 'group 22',
            bizId: '22',
            children: [
              {
                bizName: 'host 221',
                bizId: '221',
                children: {},
              },
            ],
          },
        ],
      }
    ]
  };


  @Output() get viewModelConvertor(): TreeViewModelConvertor<any> {
    return new SelfViewModelConvertor();
  }

  viewConfig = {
    showContainerRightPanel: true,
    showActionToolbar: true,
    actionToolbarTriggeModel: 'click',
    showAddButtons: true,
    enableExpandButtons: true,
    showRenameButtons: true,
    showDeleteButtons: true,
    showChildActionButtons: true,
    showChildAddButtons: true,
    showChildRenameButtons: true,
    showChildDeleteButtons: true,
    enableChildExpandButtons: true,
    showRootActionButtons: true,
    showRootRegionalLine: true, // 区域线
    showRootIndicatorLine: true, // 指示线
    showChildRegionalLine: true,
    showChildIndicatorLine: true,
  };


}

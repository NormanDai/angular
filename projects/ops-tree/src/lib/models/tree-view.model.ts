export class TreeViewModel {
  name: string;
  id: number;
  index: number;
  position?: number;
  options?: TreeItemOptions ;
  children?: TreeViewModel[];
  metaData: any;
  config?: TreeConfig;



}


export class TreeItemOptions {
  hidden?: boolean;
  hideChildrens?: boolean;
  draggable?: boolean;
  position?: number;
  edit?: boolean;
  expend?: boolean;
  disabled?: boolean;
  showActionToolbar?: boolean;
  showAddChildToobar?: boolean;



}

export class TreeConfig {

  showContainerRightPanel?: boolean;
  showActionToolbar?: boolean;
  actionToolbarTriggeModel?: string;
  showAddButtons?: boolean;
  enableExpandButtons?: boolean;
  showRenameButtons?: boolean;
  showDeleteButtons?: boolean;
  showChildActionButtons?: boolean;
  showChildAddButtons?: boolean;
  showChildRenameButtons?: boolean;
  showChildDeleteButtons?: boolean;
  enableChildExpandButtons?: boolean;
  showRootActionButtons?: boolean;
  showRootRegionalLine?: boolean; // 区域线
  showRootIndicatorLine?: boolean; // 指示线
  showChildRegionalLine?: boolean;
  showChildIndicatorLine?: boolean;

}

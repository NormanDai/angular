export interface SelfMetaModel {
  bizName: string;
  bizId: string;
  children: SelfMetaModel[];

}

export interface SelfTreeMetaModel {
  data: SelfMetaModel[];
}


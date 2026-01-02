interface IResolutionItem {
  id: number;
  name: string;
  description: string;
  isChecked: boolean;
}

export interface IResolution {
  data: IResolutionItem[];
}
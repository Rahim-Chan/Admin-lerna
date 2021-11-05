//审批请求
export interface AuthorizationRequest {
  actionCode: string;
  businessId: string;
  currency?: string;
  financial?: boolean;
  financialAmount?: number;
  tranType?: string;
  params: Record<string, any>;
  snapshot: {
    before: Record<string, any>;
    after: Record<string, any>;
  };
  showSuccessMessage?: boolean;
}

//请求
type IBody = RequestInit['body'] | object;
export interface IRequestOption extends Omit<RequestInit, 'body'> {
  query?: Record<string, string | number>;
  body?: IBody;
  loadingText?: string;
  bigDecimal?: boolean;
  parser?: (res: Response) => Record<string, any>;
  stringify?: (param: IBody) => string;
  showLoading?: boolean;
  wait?: number;
}

export interface RouteItem {
  app?: string;
  name: string;
  path: string;
  children?: RouteItem[];
  permission?: string;
  hidden?: boolean; // 是否显示在侧边栏菜单
  exact?: boolean;
  page?: React.ComponentType;
  redirect?: string;
  parentPath?: string;
  isFolder?: boolean;
  menuCode?: string;
  hideMenuCode?: boolean;

}

import store, { GlobalStoreState } from './store';
import action from './globalActions';
import {
  AuthorizationRequest,
  IRequestOption,
  RouteItem,
} from '../typings/mod';

import { AuditData, IAuditColumnsType } from '../typings/audit';

interface User {
  login(): void;
  logout(): void;
  getUserInfo(): GlobalStoreState['user'];
  getPermissionList(): string[];
}

interface Authorization {
  submit(param: AuthorizationRequest): Promise<{
    ticketId?: string;
    autoCheck: boolean;
    status: 'success' | 'cancelled';
  }>;
  renderSnapshot(option: {
    props: {
      params: Record<string, any>;
      snapshot: {
        before: Record<string, any>;
        after: Record<string, any>;
      };
    };
    actionCode: string;
    container: Element;
  }): void;
  goAuthorizationDetail(ticketId: string, target?: 'submitted' | 'received');
}

interface Router {
  getCurrentRoute(): Promise<RouteItem>;
  getRoute(pathname: string): Promise<RouteItem>;
}

interface IDownloadFileOption extends IRequestOption {
  fileName?: string;
  fileType?: string;
  noApi?: boolean;
  noCredentials?: boolean;
  defaultHeaders?: object;
  parser?: (res: Response) => Promise<Blob>;
}

interface Request {
  request<T = any>(api: string, options?: IRequestOption): Promise<T>;
  requestBlob(
    url: string,
    fileName?: string,
    fileType?: string,
  ): Promise<unknown>;
  downloadFile(url: string, options: IDownloadFileOption): Promise<unknown>;
}

interface Materials<T> {
  dataSource: T[];
  columns: IAuditColumnsType<T>;
}
interface Audit {
  submit(param: AuditData): Promise<{
    status: 'success' | 'cancelled';
  }>;
  getInquiryAuditData: <T>(materials: Materials<T>) => Materials<object>;
}

// 获取模块
function getModule(moduleName: 'user'): Promise<User>;
function getModule(moduleName: 'authorization'): Promise<Authorization>;
function getModule(moduleName: 'router'): Promise<Router>;
function getModule(moduleName: 'request'): Promise<Request>;
function getModule(moduleName: 'audit'): Promise<Audit>;
function getModule<T>(moduleName: string): Promise<T>;
async function getModule<T>(moduleName: string): Promise<T> {
  const module = await action.getModule<T>(moduleName);
  //扩展用户模块的函数
  if (moduleName === 'user') {
    return {
      ...module,
      getUserInfo() {
        return store.getState().user;
      },
      getPermissionList() {
        return store.getState().user.permission;
      },
    };
  } else if (moduleName === 'authorization') {
    //扩展审批模块，renderSnapshot增加渲染的入参
    return {
      ...module,
      renderSnapshot(...args) {
        return (module as any).renderSnapshot(...args, action.props);
      },
    };
  }
  return module as T;
}

// 是否有模块
function hasModule(moduleName: string): boolean {
  return action.hasModule(moduleName);
}

// 注册模块
function registerModule(moduleName: string, module: any) {
  action.registerModule(moduleName, module);
}

export default {
  getModule,
  hasModule,
  registerModule,
};

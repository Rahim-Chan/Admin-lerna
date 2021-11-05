/*
 * @Author: your name
 * @Date: 2021-09-16 18:01:41
 * @LastEditTime: 2021-09-16 18:05:29
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /admin portal/banking-portal-bridge/src/utils/store.ts
 */
export interface DataAccessList {
  pagePermissionCode: string;
  dataAccess: {
    [name: string]: any;
  };
}
export interface GlobalStoreState {
  user: {
    userId: string;
    name: string;
    email: string;
    avatar: string;
    permission: string[];
    maskCodeList: string[];
    dataAccessList: DataAccessList[];
  };
}

const initialState: GlobalStoreState = {
  user: {
    userId: '',
    name: '',
    email: '',
    avatar: '',
    permission: [],
    maskCodeList: [],
    dataAccessList: [],
  },
};

// 主应用与子应用共享的store（各自再维护在redux中）
class GlobalStore {
  private static instance: GlobalStore;

  // qiankun提供的api不会进行state自动合并，自身维护一个state
  private state: GlobalStoreState=initialState;

  static getInstance() {
    if (!this.instance) {
      this.instance = new GlobalStore();
    }
    return this.instance;
  }

  getState() {
    return { ...this.state };
  }

  setState(partialState: Partial<GlobalStoreState>) {
    this.state = {
      ...this.state,
      ...partialState,
    };
    return this.state;
  }
}

const store = GlobalStore.getInstance();

export default store;

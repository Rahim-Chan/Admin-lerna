class GlobalActions {
  instance: any = {};

  props:any={};

  setProps(props) {
    this.props = props;
    this.instance = props.globalActions;
  }

  // 获取模块
  async getModule<T>(moduleName:string): Promise<T> {
    const module = await this.instance.getModule(moduleName);
    return module as T;
  }

  // 是否有模块
  hasModule(moduleName:string):boolean {
    return this.instance.hasModule(moduleName);
  }

  // 注册模块
  registerModule(moduleName:string,module:any){
    if(this.hasModule(moduleName)){
      throw new Error(`module ${moduleName} is registered`);
    }
    return this.instance.registerModule(moduleName,module);
  }
}

export default new GlobalActions();

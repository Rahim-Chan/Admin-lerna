import React from 'react';
import ReactDOM from 'react-dom';
import globalActions from '../utils/globalActions';
import { updateStore } from '../utils/eventCenter';

type RF=React.FC | React.Component | any;

let App: RF;
let Snapshot: RF;
let registerModules: Record<string,any> | undefined;

export async function bootstrap() {
  //
}

export async function mount(props) {
  const { isSnapshot, onLoaded } = props;
  if (onLoaded) {
    onLoaded({
      modules: registerModules||{},
      lifeCircle:{
        async bootstrap() {
          //
        },
        async mount(subProps) {
          ReactDOM.render(React.createElement(Snapshot, subProps.props || null), subProps.container);
        },
        async unmount(subProps) {
          ReactDOM.unmountComponentAtNode(
            subProps.container,
          );
        },
      }
    });
  }
  if (isSnapshot) {
    return;
  }
  ReactDOM.render(
    React.createElement(App, null),
    props.container ? props.container.querySelector('#app') : document.getElementById('app'),
  );
  // 主应用状态传递
  props.onGlobalStateChange((state) => {
    // 更新数据、发布信息
    updateStore(state);
  });
  // 注册主应用传递actions实例
  globalActions.setProps(props);
}

export async function unmount(props) {
  const { isSnapshot } = props;
  if (isSnapshot) {
    return;
  }
  ReactDOM.unmountComponentAtNode(
    props.container ? props.container.querySelector('#app') : document.getElementById('app'),
  );
}

export async function update() {
  //
}

interface renderOptions{
  App:RF,
  Snapshot?:RF,
  modules?:Record<string,any>,
  render?:()=>void
}
export async function render({
  App: app, Snapshot: snapshot, render: customRender, modules
}:renderOptions) {
  App = app;
  Snapshot = snapshot;
  registerModules = modules;
  // @ts-ignore
  if (!window.__POWERED_BY_QIANKUN__) {
    // 微应用自定义渲染
    if (customRender) {
      customRender();
    } else {
      ReactDOM.render(
        React.createElement(App, null), document.getElementById('app'),
      );
    }
  }
}

import { useEffect, useState } from 'react';
import event from '../utils/eventCenter';
import store, { GlobalStoreState } from '../utils/store';

const UseStore = () => {
  // 用户信息
  // 数据来源，事件中心已有数据
  const [state, setState] = useState<GlobalStoreState>(store.getState());

  // 菜单信息
  useEffect(() => {
    // 订阅变化
    event.on('userMessage', (e) => {
      setState(e);
    });
    return () => {
      event.off('userMessage', () => {});
    };
  }, []);

  return state;
};

export default UseStore;

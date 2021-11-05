import EventEmitter from 'events';
import store from './store';

const event = new EventEmitter();

//设置监听限制
event.setMaxListeners(100000);

export const updateStore = (data) => {
  const state = store.setState(data);
  event.emit('userMessage', state);
};

export default event;

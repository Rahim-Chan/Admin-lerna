
export {IRequestOption,AuthorizationRequest} from './typings/mod';

import action from './utils/globalActions';

export {
  render, mount, bootstrap, unmount, update,
} from './render';
export { default as useGlobalStore } from './hooks/useStore';
export { default as usePermission } from './hooks/usePermission';
export { default as useMaskPermission } from './hooks/useMaskPermission';
export { default as MaskControl } from './components/MaskControl';
export { maskName, maskEmail, maskNumber } from './utils/dataMask';
export { default as modules } from './utils/mod';

export * from './typings/mod';

export * from './typings/audit';
export * from './components/MaskControl/config';

export const getApplicationProps = () => action.props;

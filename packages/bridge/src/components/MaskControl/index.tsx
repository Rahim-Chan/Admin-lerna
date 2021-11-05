import { maskCodeMap, maskConfig } from './config';
import React, { ReactElement } from 'react';
import useMaskPermission from '../../hooks/useMaskPermission';
interface ControlProps {
  needMask?: boolean;
  maskCode?: any;
  disabledProps?: Record<string, any>;
}

const MaskControl: React.FC<ControlProps> = ({
  needMask = true,
  maskCode,
  children,
}) => {
  const hasPermission = useMaskPermission(maskCode);
  const maskFn = maskConfig[maskCodeMap[maskCode]];
  // TODO支持函数版本
  const getValue = (value) => {
    return hasPermission || !needMask ? value : maskFn?.(value);
  };
  return (
    <React.Fragment>
      {React.Children.map(children, (child: ReactElement) => {
        if (typeof child === 'object') {
          return React.cloneElement(child, {
            value: getValue(child.props.value),
          });
        } else {
          return getValue(child);
        }
      })}
    </React.Fragment>
  );
};

export default MaskControl;

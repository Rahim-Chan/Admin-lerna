import { maskCodeMap } from '../components/MaskControl/config';
import UseStore from './useStore';

function useDataMask(maskCode: string) {
  const {
    user: { maskCodeList },
  } = UseStore();
  if (!maskCode) {
    return true;
  }
  // 如果找到了则没有权限查看，返回false，没找到返回true
  return !maskCodeList.includes(maskCodeMap[maskCode]);
}

export default useDataMask;

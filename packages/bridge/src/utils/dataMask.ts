import _ from 'lodash';
export type IMaskType = 'name' | 'number' | 'email';

// 基础方法
const _maskString: (str: string, to: number) => string = (str, to) => {
  const len = str.length;
  return str.slice(to).padStart(len, '*');
};

// 边界处理
const maskString: (str: string, to?: number, singleWord?: boolean) => string = (
  str,
  to = -4,
  singleWord = true,
) => {
  if (str.length === 1) return '*';
  else if (str.length <= 4 && singleWord) {
    return _maskString(str, -1);
  }
  return _maskString(str, to);
};

// 分类讨论
export const _maskData: <T>(type: IMaskType, value: T) => string | T = (
  type,
  value,
) => {
  // 只有传string、number类型的值的时候才处理，否则透传
  if (!['string', 'number'].includes(typeof value)) {
    return value;
  }
  const res = String(value).trim();
  switch (type) {
    case 'name':
      if (res.includes(' ')) {
        // 取得最后一个单词的长度
        const words = res.split(' ');
        const lastWords = words[words.length - 1];
        const len = lastWords.length;
        return maskString(res, 0 - len, false);
      }
      return maskString(res);
    case 'number':
      return maskString(res);
    case 'email': {
      const splitArr = res.split('@');
      return maskString(splitArr[0]) + '@' + splitArr[1];
    }
  }
};

const maskData = _.curry(_maskData);
export const maskName = maskData('name');
export const maskNumber = maskData('number');
export const maskEmail = maskData('email');

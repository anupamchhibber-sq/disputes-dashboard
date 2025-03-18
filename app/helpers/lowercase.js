import { helper } from '@ember/component/helper';

export function lowercase([str]) {
  return str ? str.toLowerCase() : '';
}

export default helper(lowercase);
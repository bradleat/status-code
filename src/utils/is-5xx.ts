import { isXXX } from './is-xxx';
import { StatusCode } from '../constants/status-code';

export function is5xx(code: StatusCode): boolean {
  return isXXX(code, '5');
}
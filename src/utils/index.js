import tools from './tool';
import {navigate, navigationRef} from './rootNavigation';
export {tools, navigate, navigationRef};

export function isNumber(n) {
  return typeof n === 'number' && !isNaN(n) && isFinite(n);
}

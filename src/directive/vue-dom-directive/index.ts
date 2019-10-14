import { VueConstructor } from 'vue';
import DomObserve from './vue-dom-observe.directive';


export default function install(Vue: VueConstructor) {
  Vue.directive('dom-observe', DomObserve);
}

import ResizeObserver from 'resize-observer-polyfill';
import { DirectiveOptions } from 'vue';

const directive: DirectiveOptions = {
  inserted(el, binding) {
    const $domObserve = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        if (typeof binding.value === 'function') {
          binding.value(entry.contentRect);
        }
      });
    });
    $domObserve.observe(el);
    // eslint-disable-next-line no-param-reassign
    (el as any).$domObserve = $domObserve;
  },
  unbind(el) {
    ((el as any).$domObserve as ResizeObserver).unobserve(el);
  },
};

export default directive;

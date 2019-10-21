import ResizeObserver from 'resize-observer-polyfill';

var directive = {
    inserted: function (el, binding) {
        var $domObserve = new ResizeObserver(function (entries) {
            entries.forEach(function (entry) {
                if (typeof binding.value === 'function') {
                    binding.value(entry.contentRect);
                }
            });
        });
        $domObserve.observe(el);
        // eslint-disable-next-line no-param-reassign
        el.$domObserve = $domObserve;
    },
    unbind: function (el) {
        el.$domObserve.unobserve(el);
    },
};

function install(Vue) {
    Vue.directive('dom-observe', directive);
}

export default install;

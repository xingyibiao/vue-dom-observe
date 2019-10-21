(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('resize-observer-polyfill')) :
  typeof define === 'function' && define.amd ? define(['resize-observer-polyfill'], factory) :
  (global = global || self, global.umd = factory(global.ResizeObserver));
}(this, function (ResizeObserver) { 'use strict';

  ResizeObserver = ResizeObserver && ResizeObserver.hasOwnProperty('default') ? ResizeObserver['default'] : ResizeObserver;

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

  return install;

}));

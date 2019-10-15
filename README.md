# 用法  
```bash
npm install --save vue-dom-observe
```

```javascript
// main.js
import domObserve from 'vue-dom-observe';

Vue.use(domObserve);
```


```vue
<template>
  <div v-dom-observe="handlerSizeChange"></div>
</template>
<script>
export defalut {
  methods: {
    handlerSizeChange(e) {
      console.log(e)
    }
  }
}
</script>
```
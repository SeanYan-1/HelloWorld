<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
// 引入store，从而得到改变的状态。
import store from '@/store';

export default {
  name: 'about',
  data() {
    return {
      msg: store.state.num,
    };
  },
};
</script>

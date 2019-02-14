<template>
  <div>
    <div id="w1">
      {{ message }}
      <br>
      {{ (count + 1)*10 }}
      <br>
      <div v-html="template"></div>
      <button type="button" @click="submit()">点我</button>
      <br>
      <button type="button" @click="pop()">测试watch</button>
      <br>
      <a :href="url">百度首页</a>
      <br>
      <button type="button" @click="add()">增加</button>
      <br>
      {{ message1 }}

      <div v-if="count > 3">
        {{ count }}
        <br>
      </div>
      <div v-else>
        {{ count }}是小于等于3的
        <br>
      </div>


      <div v-show=" count == 2">
        show: {{count}}
      </div>

      <!-- :style 和 :class 是Vue中样式和class的绑定。 -->
      <div v-for="item in personList" v-bind:key="item">
        <div :style="styleName" :class="['active', 'add', 'more',{'another':item.age <= 18}]">
          姓名:{{ item.name }}
        </div>
        年龄:{{item.age}}, 班级:{{item.classNum}}, 是否考试:{{item.isExamed}}
        <br>
      </div>

      <button type="button" @click="add2">添加</button>
    </div>
  </div>
</template>

<script>
import store from '@/store';

export default {
  name: 'Info',
  data() {
    return {
      message: 'Hello Vue!',
      another: 'another hello vue',
      count: 0,
      template: '<div>ni hao</div>',
      url: 'http://www.baidu.com',
      personList: [{
        name: '小白',
        age: 18,
        classNum: 2,
        isExamed: true,
      }, {
        name: '小烟',
        age: 17,
        classNum: 2,
        isExamed: true,
      }, {
        name: '小愿',
        age: 19,
        classNum: 2,
        isExamed: true,
      }, {
        name: '小然',
        age: 18,
        classNum: 2,
        isExamed: true,
      }],
      styleName: {
        color: 'red',
        textShadow: '0 0 5px #232323',
      },
    };
  },
  mounted() {
    // mounted是对vue生命周期来说的，当加载完所有组件之后就会调用这里。
    window.vue = this;
  },
  watch: {
    // watch属性，是监听到message的值改变了，就执行对应的方法。
    message(newval, oldval) {
      console.log(`newval=${newval}`);
      console.log(`oldval=${oldval}`);
    },
  },
  methods: {
    submit() {
      alert('这是methods');
    },
    pop() {
      this.message = 'hello watch';
    },
    add() {
      this.count = this.count + 1;
      alert(this.count);
    },
    add2() {
      store.commit('increase'); // 当点击按钮触发add2方法时，就会提交increase事件。
      debugger;
      console.error('使用console进行调试');
    },
  },
  computed: {
    // computed属性，是随着this.message的值的改变而实时改变的。
    message1() {
      return `computed:${this.message},${this.another}`;
    },
  },
};
</script>

<style scoped>

</style>

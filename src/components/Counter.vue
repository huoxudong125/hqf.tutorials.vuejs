<template>
  <div id="app">
    Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    <h2>Current Count is : [{{count}}] by `mapGetters`</h2>
    <h2>Current Count is : [{{countAlias}}] by `mapState`</h2>
  </div>
</template>

<script>
  import { mapGetters, mapActions, mapState } from 'vuex';

  export default {
    computed: {
      ...mapState({
        // 箭头函数可使代码更简练
        // count: state => state.count,

        // 传字符串参数 'count' 等同于 `state => state.count`
        countAlias: 'count',

        // 为了能够使用 `this` 获取局部状态，必须使用常规函数
//        countPlusLocalState(state) {
//          return state.count + this.localCount;
//        },
      }),
      // 使用对象展开运算符将 getter 混入 computed 对象中
      ...mapGetters([
        'evenOrOdd',
        'count',
      ]),
    },
    methods: mapActions([
      'increment',
      'decrement',
      'incrementIfOdd',
      'incrementAsync',
    ]),
  };
</script>

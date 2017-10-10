<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!-- 使用动态的 transition name -->
    <!--<transition :name="transitionName">-->
    <transition v-bind:name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

  export default {
    name: 'app',
    data() {
      return { transitionName: 'fade' };
    },
    // 接着在父组件内
    // watch $route 决定使用哪种过渡
    watch: {
      $route(to, from) {
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-fade';
      },
    },
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }

</style>

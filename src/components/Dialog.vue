
<template id="dialog-template">
  <div class="dialogs">
    <div class="dialog" v-bind:class="{ 'dialog-active': show }">
      <div class="dialog-content">
        <div class="close rotate">
          <span class="iconfont icon-close" @click="close"></span>
        </div>
        <slot name="header">
          <h1 class="dialog-title">提示信息</h1>
        </slot>
        <slot name="body">
          <p>你想在对话框中放什么内容都可以！</p>
          <p>你可以放一段文字，也可以放一些表单，或者是一些图片。</p>
        </slot>
        <slot name="footer">
          <button class="btn" @click="closeDialog">关闭</button>
        </slot>
      </div>
    </div>
    <div class="dialog-overlay"></div>
  </div>
</template>

<script>
  // import VueIconFont from 'vue-icon-font';
  // Vue.use(VueIconFont);
  /* font-class */
  import '@/assets/iconfont/iconfont.css';

  /* symbol,svg */
  // eslint-disable-next-line import/extensions
  // import '@/assets/iconfont/iconfont.js';

  /* eslint-disable object-shorthand */
  export default {
    name: 'dialog',
    props: {
      show: {
        type: Boolean,
        default: true,
      },
    },
    methods: {

      close: function () {
        this.show = false;
      },
      closeDialog: function () {
        this.show = false;
      },
    },
  };

</script>

<style>

  #dialog-template{
    /*display: none;*/
  }

  .btn {
    display: inline-block;
    border: 0;
    box-sizing: border-box;
    background: #cb4a70;
    color: #fff;
    font-size: 1.5em;
    border-radius: .1em;
    line-height: 2em;
    padding: 0 1em;
    transition: .4s ease-out;
    border: 1px solid #cb4a70;
    outline: 0;
    text-decoration: none;
  }

  .btn:hover,
  .btn:focus {
    background: #fff;
    color: #cb4a70;
    cursor: pointer;
    transition: .15s ease-in;
  }

  .btn-open {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .dialog {
    width: 480px;
    position: fixed;
    left: 50%;
    top: 2em;
    transform: translateX(-50%);
    z-index: 2000;
    visibility: hidden;
    backface-visibility: hidden;
    perspective: 1300px;
  }

  .dialog-active {
    visibility: visible;
  }

  .dialog-active .dialog-content {
    position: relative;
    opacity: 1;
    transform: rotateY(0);
  }

  .dialog-active ~ .dialog-overlay {
    opacity: 1;
    visibility: visible;
  }

  .dialog-content {
    border-radius: 3px;
    background: #fff;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    transition: .5s ease-in-out;
    opacity: 0;
    transform-style: preserve-3d;
    transform: rotateY(-70deg);
  }

  .dialog-header {
    background: #cb4a70;
    color: #fff;
  }

  .dialog-title {
    margin: 0;
    font-size: 2em;
    text-align: center;
    font-weight: 200;
    line-height: 2em;
  }

  .dialog-body {
    padding: 2em;
  }

  .dialog-footer {
    margin: 0 2em;
    padding: 2em 0;
    text-align: right;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .dialog-overlay {
    content: "";
    position: fixed;
    visibility: hidden;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    opacity: 0;
    background: rgba(0, 0, 0, 0.5);
    transition: all .6s;
  }

  .close {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: .5rem;
    right: .5rem;
    transition: .8s ease all;
    -moz-transition: .8s ease all;
    -webkit-transition: .8s ease all;
    border: none;
    border-radius: 3px;
    color: #333;
    text-decoration: none;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  .close:hover {
    transition: .8s ease all;
    -moz-transition: .8s ease all;
    -webkit-transition: .8s ease all;
  }

  .close .iconfont {
    font-size: 2rem;
  }

  .rotate {
    cursor: pointer;
  }

  .rotate:hover {
    transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    transition: transform 1.0s ease all;
    -moz-transition: -moz-transform 1.0s ease all;
    -webkit-transition: -webkit-transform 1.0s ease all;
  }
</style>

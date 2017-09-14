<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
	export default {
		name: 'app'
	}
</script>

<style>
  /**
   * 路由动画 样式
   */
  .pop-out-enter-active,
  .pop-out-leave-active,
  .pop-in-enter-active,
  .pop-in-leave-active {
    will-change: transform;
    height: 100%;
    position: absolute;
    left: 0;
  }
  .pop-out-enter-active {
    perspective: 1000;
    animation-name: popInLeft;
  }
  .pop-out-leave-active {
    animation-name: popOutRight;
  }
  .pop-in-enter-active {
    perspective: 1000;
    animation-name: popInRight;
  }
  .pop-in-leave-active {
    animation-name: popOutLeft;
  }
  @keyframes popInLeft {
    from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes popOutLeft {
    from {
      opacity: 1;
    }
    to {
      transform: translate3d(-100%, 0, 0);
    }
  }
  @keyframes popInRight {
    from {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes popOutRight {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
  }
</style>

<style lang="less">
  /**
   * 组件库 HOOK 样式
   */
  @import "./style/define.less";
  #app {
    .n3-btn-primary {
      background-color: @primaryColor;
      border-color: @primaryColor;
    }
    .n3-btn-primary.n3-btn-active,
    .n3-btn-primary:active,
    .n3-btn-primary:focus,
    .n3-btn-primary:hover {
      background-color: @primaryColor;
      border-color: @primaryColor;
    }
    .n3-checkbox-checked .n3-checkbox-inner {
      background-color: @primaryColor;
      border-color: @primaryColor;
    }
    .n3-label-primary,
    .n3-page-item-active {
      color: @primaryColor;
      border: 1px solid @primaryColor;
    }
    .n3-page-item-active {
      background-color: @primaryColor;
    }
    .n3-nav-item.is-active {
      color: @primaryColor;
    }
    .n3-form-control:focus {
      border: 1px solid @primaryColor;
    }
    .n3-label-primary.n3-label-hover:hover {
      color: #fff;
      background: @primaryColor;
    }
    .n3-page-item:hover {
      color: @primaryColor;
      border: 1px solid @primaryColor;
    }
    .n3-datepicker-dateRange-item-active,
    .n3-datepicker-dateRange-item-active:hover {
      background: @primaryColor !important;
    }
    .n3-page-item:hover a {
      color: @primaryColor;
    }
    .n3-page-item-active:hover a {
      color: #fff;
    }
  }
</style>

<style lang="less">
  /**
   * 全局样式
   */
  .search-bar {
    .search-item {
      .form-item {
        padding: 4px 8px;
      }
    }
    .form-item {
      margin-right: 32px;
      display: inline-block;
    }
    .search-submit {
      margin: 8px 0 8px 72px;
      width: 240px;
    }
  }
</style>
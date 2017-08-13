<template>
  <div class="app-container">
    <section :style="{ minHeight: screenHeight }" class="navbar-left">
      <app-navbar></app-navbar>
    </section>
    <section class="router-view-box" :style="{ height: screenHeight }">
      <level-bar></level-bar>
      <transition name="pop-out">
        <keep-alive>
          <router-view class="router-view"></router-view>
        </keep-alive>
      </transition>
    </section>
  </div>
</template>

<script>
  import AppNavbar from './navbar'
  import LevelBar from './levelbar'

  export default {
    components: {
      AppNavbar,
      LevelBar
    },
    computed: {
      screenHeight () {
        return window.innerHeight - 72 + 'px'
      }
    }
  }
</script>

<style lang="less">
  .app-container {
    padding: 8px 0;
    width: 100%;
    display: flex;
    .navbar-left {
      z-index: 2;
      overflow: auto;
      margin-right: 8px;
      background: #fff;
      border-right: 1px solid #efefef;
      box-shadow: 1px 0 4px 0px hsla(0, 0%, 7%, .1);
    }
    .router-view-box {
      overflow: auto;
      flex: 1;
    }
    .router-view {
      padding: 12px 8px;
      width: 100%;
      background: #fff;
      animation-duration: .5s;
      animation-fill-mode: both;
      backface-visibility: hidden;
      box-shadow: 0 1px 4px 0px hsla(0, 0%, 7%, .1)
    }
  }
</style>
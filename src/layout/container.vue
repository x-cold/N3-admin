<template>
  <div class="app-container">
    <section :style="{ minHeight: screenHeight }" class="navbar-left">
      <app-navbar></app-navbar>
    </section>
    <section class="router-view-box" :style="{ height: screenHeight }">
      <level-bar></level-bar>
      <keep-alive>
        <router-view class="router-view"></router-view>
      </keep-alive>
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
    padding-left: 190px;
    padding-top:70px;
    padding-right:10px;
    .navbar-left {
      overflow: auto;
      margin-right: 4px;
      width: 180px;
      border-right: 1px solid #efefef;
      box-shadow: 1px 0 4px 0px hsla(0, 0%, 7%, .1);
      padding-top: 60px;
      position:fixed;
      height: 100%;
      left:0px;
      top:0px;
      background: #2d3035;
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
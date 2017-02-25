<template>
  <n3-row class="app-container">
    <n3-column :col="12">
      <n3-column :style="{ minHeight: screenHeight }" class="navbar-left" :col="2">
        <app-navbar></app-navbar>
      </n3-column>
      <n3-column :col="10">
        <level-bar></level-bar>
        <transition name="pop-out">
          <keep-alive>
            <router-view class="router-view"></router-view>
          </keep-alive>
        </transition>
      </n3-column>
    </n3-column>
    <n3-row>
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
        return window.innerHeight - 68 + 'px'
      }
    }
  }
</script>

<style lang="less">
  .app-container {
    background: #324057;
    .fixed-header {
      position: absolute;
      top: 60px;
      bottom: 0px;
      overflow: hidden;
    }
    .navbar-left {
      background: #fff;
      border-right: 1px solid #efefef;
      box-shadow: 1px 0 4px 0px hsla(0, 0%, 7%, .1)
    }
    .router-view {
      padding: 12px 8px;
      width: 100%;
      animation-duration: .5s;
      animation-fill-mode: both;
      backface-visibility: hidden;
    }
  }
</style>

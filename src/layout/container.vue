<template>
  <n3-row class="container">
    <n3-column :col="12">
      <n3-column :style="{minHeight: screenHeight}" class="navbar-left" :col="1">
        <app-navbar></app-navbar>
      </n3-column>
      <n3-column :col="11">
        <level-bar></level-bar>
        <router-view></router-view>
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

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s
  }
  
  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
  
  .container {
    background: #324057;
  }
  
  .container.fixed-header {
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
</style>
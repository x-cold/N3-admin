<template>
  <section class="app-navbar">
    <n3-nav class="nav-box" :default-active="$route.path" theme="dark" :style="{ width: '180px', maxHeight: navHeight }" :default-openeds="openedIndexList" router>
      <n3-sub-nav v-for="(item, index) in list" :index="item.path" :key="item.id">
        <template slot="title"><n3-icon :type="item.icon || 'bars'"></n3-icon>{{item.label}}</template>
        <n3-nav-item v-for="(i, subIndex) in item.list" :index="i.path" :key="i.path">{{i.label}}</n3-nav-item>
      </n3-sub-nav>
    </n3-nav>
  </section>
</template>

<script>
  import routes from '../router/routes'

  export default {
    data () {
      return {
        list: []
      }
    },
    computed: {
      openedIndexList() {
        let len = this.list.length || 0
        let indexList = []

        for (let i = 0; i < len; i++) {
          indexList.push(this.list[i].path)
        }

        return indexList
      },
      navHeight() {
        return window.innerHeight - 68 - 48 + 'px'
      }
    },
    methods: {
      handleToggle (item) {
        item.show = !item.show
      },
      change (value) {
        this.$router.push({
          name: value
        })
      },
      initMenu () {
        let list = []
        routes.forEach(item => {
          if (item.menu === false || !item.name) {
            return
          }
          let children = item.children || []
          let  childList = []

          children.forEach(child => {
            if (!child.name || child.menu === false) {
              return
            }
            childList.push({
              label: child.meta && child.meta.label || child.name,
              value: child.name,
              path: child.path,
              icon: child.icon || ''
            })
          })
          
          let menuItem = {
            show: true,
            label: item.meta && item.meta.label || item.name,
            icon: item.icon,
            path: item.path,
            list: childList
          }

          list.push(menuItem)
        })
        this.list = list
      }
    },
    created () {
      this.initMenu()
    }
  }
</script>

<style lang="less">
  .app-navbar {
    z-index: 9999;
    .welcome-box {
      padding: 12px 0;
      text-align: center;
      border-bottom: 1px solid #efefef;
    }
    .nav-box {
      overflow: auto;
    }
    .n3-dropdown-menu > li {
      padding: 4px 12px !important;
    }
  }
</style>

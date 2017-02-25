<template>
  <section class="app-navbar">
    <div class="welcome-box">
      <span class="username">您好，{{$store.state.user.userinfo.username}}</span>
    </div>
    <n3-nav type="vertical">
      <n3-nav-item v-for="(item, index) in list">
        <n3-sub-nav :show="item.show" @toggle="handleToggle(item)">
          <a slot="title" style="color:#333" v-text="item.label"></a>
          <n3-nav-item v-for="i in item.list" :active="$route.name == i.value" @click.native="change(i.value)">
            <a v-text="i.label"></a>
          </n3-nav-item>
        </n3-sub-nav>
      </n3-nav-item>
    </n3-nav>
  </section>
</template>

<script>
  import routes from '../routes'

  export default {
    data () {
      return {
        list: []
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
      // 创建菜单栏数据
      initMenu () {
        let list = []
        routes.forEach(item => {
          if (!item.menu) {
            return
          }
          let children = item.children
          let  childList = []
          children.forEach(child => {
            if (!child.name) {
              return
            }
            childList.push({
              label: child.label,
              value: child.name,
              icon: child.icon || ''
            })
          })
          
          let menuItem = {
            show: true,
            label: item.label,
            icon: item.icon,
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
    .n3-dropdown-menu > li {
      padding: 4px 12px !important;
    }
  }
</style>

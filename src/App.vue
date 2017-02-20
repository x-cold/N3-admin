<template>
  <div id="app">
    <div v-if="inDashbord">
      <app-layout></app-layout>
    </div>
    <div v-else>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
	import storage from './storage'
  import AppLayout from './layout'
	import CONST from './const'

	export default {
		name: 'app',
		components: {
      AppLayout
		},
    computed: {
      inDashbord () {
        return this.$route.name != 'login'
      }
    },
    methods: {
      loginRedirect () {
        // 判断登录是否过期
        const maxAge = 7.2 * 1000 * 1000
        let lastLoginTime = storage.getItem(CONST.LAST_LOGIN_TIME) || 0

        if (Date.now() - lastLoginTime > maxAge) {
          // this.$router.replace('/login')
        }
      }
    },
		created: function () {
			this.loginRedirect()
		}
	}
</script>

<style>
  @import './assets/styles/base.css';
</style>
<template>
  <section class="breabcrumb-box clearfix">
    <h4 class="breabcrumb-name fl">{{name}}</h4>
    <n3-breadcrumb class="breadcrumb">
      <n3-breadcrumb-item v-for="(item, index) in list" :href="`#${item.path}`" :active="index == list.length - 1">{{item.name}}</n3-breadcrumb-item>
    </n3-breadcrumb>
  </section>
</template>

<script>
  export default {
    data () {
			return {
        list: []
      }
		},
    computed: {
      name () {
        return this.$route.name
      }
    },
		watch: {
			'$route'(to, from) {
				this.getList()
			}
		},
    methods: {
      getList () {
        let matched = this.$route.matched.filter(item => item.name)
        let first = matched[0]
        if (first && (first.name !== '首页' || first.path !== '')) {
          matched = [{ name: '首页', path: '/' }].concat(matched)
        }
        this.list = matched
      }
    },
    created () {
      this.getList()
    }
  }
</script>

<style>
  .n3-breadcrumb-active a {
    color: #41cac0 !important;
  }

  .breabcrumb-name {
    padding-left: 20px;
  }
</style>

<style scoped>
  .breabcrumb-box {
    background: #fff;
    border-bottom: 1px solid #dedede;
    box-shadow: 0 0 4px 0px hsla(0, 0%, 7%, .1)
  }
  
  .breadcrumb {
    padding-right: 20px;
    float: right;
  }
</style>
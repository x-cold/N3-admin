<template>
  <n3-container fluid>
    <app-header></app-header>
    <app-container></app-container>
    <!--<app-footer></app-footer>-->
  </n3-container>
</template>

<script>
  import AppHeader from './header'
  import AppContainer from './container'

	export default {
    components: {
      AppHeader,
      AppContainer
    }
	}
</script>

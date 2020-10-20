<template>
  <div id="app">
      <router-view></router-view>
      <main-tab-bar></main-tab-bar>	
      <button @click="increment">点击</button>
      <h1>{{$store.state.count}}</h1>
      <h2>{{onc}}</h2>
  </div>
</template>

<script>
	import MainTabBar from './components/MainTabBar'

	export default {
		name: 'App',
           data(){
              return {
                onc: this.$store.state.count
              }
           },
		components: {
			MainTabBar
		},
          methods: {
                increment() {
                  this.$store.commit('increment')
                  console.log(this.$store.state.count)
                }
              }
	}
</script>

<style>
@import "./assets/css/base.css";
</style>

<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld></HelloWorld><!--  自动初始化以后手工新加的内容，使用HelloWorld组件_-->
    <router-view/>
  </div>
</template>

<script>

// 注：自动初始化以后手工新加的内容，导入HelloWorld组件
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

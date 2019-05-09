<template>
  <div id="app" class="main">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
 body{
   width: 100%;
   height: 100%;
   margin: 0 auto;
   text-align: center;
 }
  html{
    height: 100%;
  }
  .main{
    height: 100%;
  }
</style>

<template>
  <div id="app">
    <div id="main-container">
 <router-view></router-view>
    </div>
  </div>
</template>
<script>
import MainPage from "@/views/MainPage";
export default {
  name: "MainPage.vue",

  components:{
    MainPage
  }

}
</script>
<style>
#app{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>

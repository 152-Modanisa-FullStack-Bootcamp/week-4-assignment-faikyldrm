<template>
<div class="small-video-container"   :data-videoId="video.id">
  <img id="videoImg"
       :src="hoverImageStat"
       @mouseover="hover = true"
       @mouseleave="hover = false"
       @click="navigateToPage"

  />
  <div class="video-content">
    <div> <span id="title">{{video.title}}</span>   </div>
  </div>
</div>
</template>

<script>
export default {
  name: "SmallVideo",
  props:{
    video:{
      coverImage:String,
      title:String,
      hoverImage:String,
      id:Number

    }
  },
  data(){
    return{
      hover:false
    }
  },
  methods:{
    navigateToPage(){
      this.$router.push({path:`/watch/${this.video.id}`})
    }
  },
  computed:{
    hoverImageStat() {
      // This is one way to make mouseover  actualy I don't know other way
      if (this.hover)
        return this.video.hoverImage;
      else
        return this.video.coverImage;
    },
  }
}
</script>


<style scoped>

.small-video-container {
  font-family: "Roboto Light", "Arial", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  width: 360px;

}
#videoImg {
  height: 200px;
  width: 360px;
  padding-bottom: 5px;
}
.video-content {
  display: flex;
  flex-direction: row;
}
</style>
<template>
  <div class="main-video">
    <div v-for="video of videos" :key="video.id" class="main-video-container">
      <SmallVideo :video="video"></SmallVideo>
    </div>
  </div>
</template>

<script>
import SmallVideo from "@/components/SmallVideo";
import API from "@/api";

export default {
  name: "MainPage.vue",
  components: {SmallVideo},
  data() {
    return {
      videos: []
    }
  },
  computed: {
    allVideos() {
      return this.videos
    }
  },
  async created() {
    try {
      this.videos = await API.getVideoList()

    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>
.main-video {

  display: flex;
  flex-direction: row;
  flex-grow: 4;
  justify-content: flex-start;
  flex-wrap: wrap;

}
.main-video-container{
  margin: 5px;
}
</style>
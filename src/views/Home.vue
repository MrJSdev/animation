<template>
  <div class="home">
    <div class="header-section">
      <div class="users-list">
        <div class="user-item">
          <img :src="getUsers[0].image" ref="userPhoto" alt="">
        </div>
        <div class="user-item">
          <img :src="getUsers[1].image" class="other-images" alt="">
        </div>
        <div class="user-item">
          <img :src="getUsers[1].image" class="other-images" alt="">
        </div>
        <div class="user-item">
          <img :src="getUsers[1].image" class="other-images" alt="">
        </div>
      </div>
    </div>
    <h2>Home</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam, architecto consequuntur eaque facilis fugit illo ipsam ipsum laudantium magni, molestias quae quos ratione recusandae soluta voluptatem? Expedita, rerum!</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { TimelineLite, Back } from 'gsap'
export default {
  name: 'home',
  components: {
  },
  data () {
    return {
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.enablePhoto = true
      let photo = this.$refs.userPhoto
      const timeline = new TimelineLite()
      timeline.to(photo, 0.5, { x: 0, y:80, width: 50, height: 50, ease: Back.easeInOut, opacity: 1 })
    })
  },
  computed: {
    ...mapGetters(['getUsers'])
  }
}
</script>
<style lang="scss" scoped>
  #main-header{
    background-image: url('../assets/header1.jpg');
  }
  .users-list{
    text-align: center;
    padding-left: 80px;
    .user-item{
      .other-images{
        width: 50px;
        height: 50px;
        opacity: 1;
        transform: translateY(80px);
      }
      img{
        width: 100px;
        height: 100px;
        border:solid 2px #eee;
        border-radius: 50%;
        transform: translateY(10px);
      }
    }
  }
</style>

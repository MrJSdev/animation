<template>
  <div>
    <div class="header-section">
      <img ref="userPic"  class="user-img img-style" :src="getUsers[0].image" alt="">
      <div class="name" ref="userName">Shahnawaz Khan</div>
    </div>
    <h2>Products</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet at, deserunt dolorem enim explicabo inventore magnam non odit omnis optio perspiciatis possimus praesentium qui reiciendis sequi ullam voluptas voluptatibus.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet at, deserunt dolorem enim explicabo inventore magnam non odit omnis optio perspiciatis possimus praesentium qui reiciendis sequi ullam voluptas voluptatibus.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet at, deserunt dolorem enim explicabo inventore magnam non odit omnis optio perspiciatis possimus praesentium qui reiciendis sequi ullam voluptas voluptatibus.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet at, deserunt dolorem enim explicabo inventore magnam non odit omnis optio perspiciatis possimus praesentium qui reiciendis sequi ullam voluptas voluptatibus.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet at, deserunt dolorem enim explicabo inventore magnam non odit omnis optio perspiciatis possimus praesentium qui reiciendis sequi ullam voluptas voluptatibus.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet at, deserunt dolorem enim explicabo inventore magnam non odit omnis optio perspiciatis possimus praesentium qui reiciendis sequi ullam voluptas voluptatibus.
    </p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { TimelineLite, Back } from 'gsap'
  export default {
    name: 'Products',
    data () {
      return {
        enablePhoto: false
      }
    },
    mounted (){
      this.$nextTick(() => {
        this.enablePhoto = true
        let photo = this.$refs.userPic
        let name = this.$refs.userName
        const timeline = new TimelineLite()
        timeline.to(photo, 0.5, { x: 0, y:10, width: 100, height: 100, ease: Back.easeInOut, opacity: 1 })
        timeline.to(name, 0.3, { delay: 0.1, opacity: 1, y: 0, ease: Back.easeInOut, }, '-=0.5')
      })
    },
    computed: {
      ...mapGetters(['getUsers'])
    }
  }
</script>

<style lang="scss" scoped>
  .name{
    text-transform: uppercase;
    font-weight: bold;
    color: rgba(black, 0.6);
    margin-top: 10px;
    opacity: 0;
    transform: translateY(20px);
  }
.user-img{
  width: 50px;
  height: 50px;
  border:solid 2px #eee;
  border-radius: 50%;

  transform-origin: bottom;
  transform: translateY(80px) translateX(-50px);
}
</style>

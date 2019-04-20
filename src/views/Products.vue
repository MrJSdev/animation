<template>
  <div class="single-user">

    <div class="sidebar-details">
      <div class="header-section">
        <img ref="userPic" class="user-img img-style" :src="getSelectedUser.image" alt="">
        <div class="name" ref="userName">{{ getSelectedUser.name }}</div>
      </div>
    </div>
    <div class="content-details">
      <h2>User {{ getSelectedUser.id }}</h2>
      <button @click="viewHome(getSelectedUser)">Go Back</button>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { TimelineLite, Back } from 'gsap'
  export default {
    name: 'Products',
    data () {
      return {
        enablePhoto: false,
        progress: 0,
        userImage: { image: null },
        imageIndex: 0
      }
    },
    mounted (){
      this.$nextTick(() => {
        this.enablePhoto = true
        let photo = this.$refs.userPic
        let selectedUser = this.getSelectedPosition
        photo.style.left = selectedUser.x + 'px'
        photo.style.top = selectedUser.y + 'px'
        // photo.style.transform = 'translationX(' + selectedUser.x + 'px)'
        let name = this.$refs.userName
        let numV = this.$refs.numValue
        const timeline = new TimelineLite()
        timeline.to(photo, 0.5, { top: 15, left:'50%', marginLeft: '-50px', width: 100, height: 100, ease: Back.easeInOut, opacity: 1 })
        timeline.to(name, 0.3, { delay: 0.1, opacity: 1, y: 0, ease: Back.easeInOut, }, '-=0.5')
      })
    },
    computed: {
      ...mapGetters(['getUsers', 'getSelectedUser', 'getSelectedPosition'])
    },
    methods: {
      ...mapActions(['backSelectedUser']),
      viewHome (user) {
        let userPic = this.$refs.userPic
        this.backSelectedUser({ user: user, x: userPic.offsetLeft, y: userPic.offsetTop })
        this.$router.push('/')
      }
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
    text-align: center;
    transform: translateY(20px);
  }
.user-img{
  width: 50px;
  height: 50px;
  border:solid 2px #eee;
  border-radius: 50%;
  position: relative;
}
</style>

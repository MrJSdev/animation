<template>
  <div class="single-user">
    <div class="content-details">
      <div class="users-list">
        <div class="user-item" v-for="(user, index) in getUsers">
          <img :src="user.image" class="user-img" :id="'user' + index" :ref="'userPhoto' + index" @click="viewProfile(user, index)" alt="">
          <span class="value">{{ user.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
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
      let userA = this.$refs['userPhoto' + this.getSelectedUser.id][0]
      console.log(userA)
      let selectedUser = this.getSelectedPosition
      let oldOffsets = { x: userA.offsetLeft, y: userA.offsetTop }
      userA.style.position = 'absolute'
      userA.style.width = 100 + 'px'
      userA.style.height = 100 + 'px'
      userA.style.left = selectedUser.x + 'px'
      userA.style.top = selectedUser.y + 'px'
      const timeline = new TimelineLite()
      timeline.to(userA, 0.5, { left: oldOffsets.x, top:oldOffsets.y, width: 50, height: 50, ease: Back.easeInOut, opacity: 1 })
    })
  },
  methods: {
    ...mapActions(['selectedUser']),
    viewProfile(user, index) {
      let output = this.$refs['userPhoto' + index][0]
      console.log(output)
      this.selectedUser({ x: output.offsetLeft, y: output.offsetTop, userId: index, user: user})
      this.$router.push('/product/' + index)
    }
  },
  computed: {
    ...mapGetters(['getUsers', 'getSelectedPosition', 'getSelectedUser'])
  }
}
</script>
<style lang="scss" scoped>
  #main-header{
    background-image: url('../assets/header1.jpg');
  }
  .users-list{
    .user-item{
      text-align: left;
      padding: 5px 0;
      display: flex;
      align-items: center;
      border-bottom: solid thin rgba(black, 0.05);
      .value{
        display: inline-block;
        margin-left: 10px;
      }
      .other-images{
      }
      img{
        width: 50px;
        height: 50px;
        border:solid 2px #eee;
        border-radius: 50%;
      }
    }
  }
</style>

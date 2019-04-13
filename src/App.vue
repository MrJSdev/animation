<template>
  <div id="app">
    <header id="main-header" ref="mainHeader">
      <div id="user" class="h-col">

      </div>
      <div id="nav" class="h-col">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/product">Products</router-link>
      </div>
    </header>

    <transition
    >
      <router-view/>
    </transition>
  </div>
</template>
<script>
  const DEFAULT_TRANSITION = 'fade'
  export default {
    name: 'App',
    data() {
      return {
        prevHeight: 0,
        transitionName: DEFAULT_TRANSITION
      }
    },
    created() {
      this.$router.beforeEach((to, from, next) => {
        let transitionName = to.meta.transitionName || from.meta.transitionName;
        if (transitionName === 'slide') {
          const toDepth = to.path.split('/').length;
          const fromDepth = from.path.split('/').length;
          transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
        }
        this.transitionName = transitionName || DEFAULT_TRANSITION;
        next()
      })
    },
    methods: {
      changeHeader () {
        console.log(this.$route.path)
      },
      beforeLeave(element) {
        this.prevHeight = getComputedStyle(element).height
      },
      enter(element) {
        const { height } = getComputedStyle(element)

        element.style.height = this.prevHeight

        setTimeout(() => {
          element.style.height = height
        })
      },
      afterEnter(element) {
        element.style.height = 'auto'
      },
    },
  }
</script>
<style lang="scss">
body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: darken(white, 3);
}
#main-header{
  display: flex;
  padding: 40px 20px;
  background-color: rgba(black, 0.2);
  .h-col{
    flex: 1;
  }
}
.header-section{
  position: relative;
  top: -100px;
  background-color: white;
  border:solid 2px rgba(black, 0.1);
  height: 150px;
  width: 350px;
  .users-list{
    display: inline-block;
    width: 100%;
    .user-item{
      float: left;
      margin-right: 10px;
    }
  }
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: all;
  transform: translateX(0px);
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateX(100px);
}
.zoom-enter-active,
.zoom-leave-active {
  transition-duration: 1s;
  transition-property: all;
  transform: scale(1);
  transition-timing-function: ease;
}

.zoom-enter,
.zoom-leave-active {
  opacity: 0;
  transform: scale(0.3);
}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
.img-style{
  box-shadow: 0 0 3px rgba(black, 0.1);
  border-radius: 50%;
  border:solid 3px dodgerblue;
}
</style>

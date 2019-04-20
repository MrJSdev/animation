<template>
  <div id="app">
    <div class="top-bar"></div>
    <div id="main-container">
      <aside id="main-header nav-col" ref="mainHeader">
        <div id="nav" class="h-col">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/about">About</router-link>
          <router-link class="nav-link" to="/product/1">Users</router-link>
        </div>
      </aside>

      <div class="container-col">
        <transition
        >
          <router-view/>
        </transition>
      </div>
    </div>
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
  *, *:before, *:after {
    box-sizing: border-box;
  }
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
.top-bar{
  display: inline-block;
  width: 100%;
  height: 55px;
  background-color: #fff;
  box-shadow: 0 3px 3px rgba(black, 0.05);
}
.container-col{
  padding: 10px;
}
#main-container{
  display: flex;
  .container-col{
    flex: 1;
  }
}
.nav-col{
  flex: 1;
  max-width: 240px;
  background-color: #fff;

  .nav-link{
    display: inline-block;
    width: 100%;
  }
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
  background-color: white;
  text-align: left;
  height: 150px;
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
  box-shadow: 3px 0 3px rgba(black, 0.05);
  height: 94%;
  margin-top: -5px;
  background-color: #fff;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px 5px;
  display: inline-block;
  width: 100%;
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

.single-user{
  display: flex;
  .sidebar-details{
    flex: 1;
    max-width: 300px;
    background-color: #fff;
    box-shadow: 0 0 3px rgba(black, 0.1);
  }
  .content-details{
    flex: 1;
    margin-left: 10px;
    position: relative;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 3px rgba(black, 0.1);
  }
}
</style>

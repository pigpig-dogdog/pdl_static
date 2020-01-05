<template>
  <div class="sidebar-logo-container" :class="{'collapse':collapse}">
    <transition name="sidebarLogoFade">
      <router-link v-if="collapse" key="collapse" class="sidebar-logo-link" to="/datasets/index">
        <img v-if="logo" src="@/assets/logo.png" class="sidebar-logo" />
        <!-- <svg-icon v-if="logo" icon-class="logo" class="sidebar-logo"/> -->
        <h1 v-else class="sidebar-title">{{ title }} </h1>
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/datasets/index">
        <img v-if="logo" src="@/assets/logo.png" class="sidebar-logo"/>
        <!-- <svg-icon v-if="logo" icon-class="logo" class="sidebar-logo"/> -->
        <h1 class="sidebar-title">{{ title }} </h1>
      </router-link>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      title: '深度学习平台',
      logo: '@/assets/logo.png'
    };
  }
};
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  /*background: #2b2f3a;*/
  background: #fff;
  text-align: center;
  overflow: hidden;
  /*border: 1px solid #bfcbd9;*/

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;

    & .sidebar-logo {
      width: 40px;
      height: 32px;
      vertical-align: middle;
      margin-right: 12px;
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      /*color: #fff;*/
      color:  #54667a;
      /*color:  rgba(0,0,0,.9);*/
      font-weight: 600;
      line-height: 50px;
      font-size: 18px;
      /*font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;*/
      vertical-align: middle;
    }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
</style>

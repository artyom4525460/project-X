<template>
  <div :class="['header', title ? 'background' : '']">
      <div class="back">
        <div v-if="$route.name !== 'main'" @click="$router.go(-1)">
          <img src="@/assets/images/back.svg">
        </div>
      </div>
      <div class="text" v-if="title">
        {{ title }}
      </div>
      <div class="close" @click="close">
        <img src="@/assets/images/cross.svg">
      </div>
  </div>
  <router-view :class="[title ? 'has-title' : '']">
  </router-view>
  <div class="footer" v-if="title">
    <div class="powered-by">
    <span>Powered by</span>
    <img src="@/assets/images/cander_logo.svg"/></div>
  </div>
</template>
<script>
import modal from '@/modules/modal'

export default {
  computed: {
    title () {
      return this.$route.meta.title;
    },
  },
  methods: {
    close() {
      modal.hide()
    },
  },
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}
html, body, #app, .page {
  margin: 0;
  height: 100%;
  font-family: Brandon;
  color: #333232;
  overflow: hidden;
}
body * {
  box-sizing: border-box;
  outline: none;
}
.page {
  &.has-title {
    height: 82%;
  }
}
#app {
  position: relative;
  .header {
    &.background {
      background-color: #fff;
      position: static;
    }
    height: 10%;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    color: black;
    z-index: 100;
    position: absolute;
    left: 0;
    right: 0;
    padding: 0px 75px;
    .text {
      font-size: 1.2rem;
      line-height: 1.6rem;
    }
    .back {
      cursor: pointer;
      width: 30px;
      text-align: center;
    }
    .close {
      cursor: pointer;
      width: 30px;
      text-align: center;
    }
  }
  .footer {
    height: 8%;
    background-color: #fff;
    position: relative;
    display: flex;
    justify-content: flex-end;
    padding: 0 15px;
    .powered-by {
      font-size: 12px;
      color: #d36c58;
      display: flex;
      align-items: center;
    }
  }
}
</style>
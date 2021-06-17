<template>
  <div class="button-block">
      <a href="#" class="button secondary-button edit-button" @click="toAgain">
        Record again
      </a>
      <a href="#" class="button primary-button confirm-button" @click="confirm">
        Confirm
        <span class="preloader" v-if="loading">
          <img src="@/assets/images/preloader.gif">
        </span>
      </a>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: false
    },
    file: {
      type: String,
      required: false
    },
    cardId: {
      type: String,
      required: false
    }
  },

  data() {
    return {
      loading: false,
    }
  },

  methods: {
    toAgain() {
      const cardId = this.cardId
      this.$router.push({
        name: 'audio',
        params: cardId ? { cardId } : {}
      })
    },
    confirm() {
      this.loading = true
      this.$emit('onConfirm', () => {
        this.loading = false
      })
    },
  },
}
</script>


<style lang="scss" scoped>
.preloader {
  position: absolute;
  width: 45px;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 25px;
  img {
    width: 45px !important;
  }
}
.button-block{
  display: flex;
  align-items: center;
  justify-content: center;
}
.button{
  position: relative;
  max-width: 326px !important;
  width: 188px;
  margin: 10px;
  height: 48px!important;
}
</style>
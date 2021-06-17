<template>
  <div class="result-items">
    <div v-if="card" class="result-item result-item-image">
      <img :src="card.media.path"/>
      <div class="card-title">Front</div>
    </div>
    <div class="result-item item-source">
      <div class="background">
        <div class="preloader" v-if="loading">
          <img src="@/assets/images/preloader.gif"/>
        </div>
        <audio controls="" v-if="!loading">
          <source :src="url || file">
        </audio>
      </div>
      <div v-if="card" class="card-title">Back</div>
    </div>
  </div>
</template>

<script>
import api from '@/modules/api'
import { getById } from '@/modules/cards'

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
      loading: false
    }
  },

  created() {
    console.log(this.card)
    if (this.url) {
      this.loading = true;
      this.checkUrl(response => {
        if (!response) {
          this.checkUrl();
        } else {
          this.loading = false;
        }
      })
    }
  },

  computed: {
    card() {
      return getById(this.cardId)
    },
  },

  methods: {
    checkUrl(callback) {
      api.checkUrl(this.url)
        .then(callback)
        .catch(callback)
    }
  }
}
</script>

<style lang="scss" scoped>
.card-title{
  font-size: 16px;
  font-weight: 400;
  line-height: 17px;
  text-align: center;
  padding-top: 10px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  margin-bottom: 0;
}

.result-items{
  position: relative;
  width: 100%;
  height: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  img {
    width: auto;
    height: 305px;
  }

  audio, .preloader {
    max-width: calc(100% - 28px);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
}

.result-item {
  width: 171px;
  position: relative;
  height: fit-content;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
  height: 100%;
  .background {
    width: 100%;
    height: 305px;
    background-image: url(../../../assets/images/audio_message_background_image.jpg);
    background-size: cover;
    background-position: center;
  }
}
  
</style>
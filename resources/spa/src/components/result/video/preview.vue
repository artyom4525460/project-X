<template>
  <div class="result-items">
    <div v-if="card" class="result-item result-item-image">
      <img :src="card.media.path"/>
      <div class="card-title">Front</div>
    </div>
    <div class="result-item item-source">
      <div class="preloader" v-if="loading">
        <img src="@/assets/images/preloader.gif"/>
      </div>
      <video controls :poster="image" v-else>
        <source :src="url">
      </video>
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
    image: {
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
      loading: true
    }
  },

  created() {
    this.loading = true;
    this.checkUrl(response => {
      if (!response) {
        this.checkUrl();
      } else {
        this.loading = false;
      }
    })
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

  video {
    width: 100%;
    height: 305px;
    width: 170px;
  }
}

.result-item {
  width: 172px;
  position: relative;
  padding: 10px 10px 25px;
  height: fit-content;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  min-width: 150px;
  max-width: 50%;
  min-width: fit-content;
  padding: 10px 30px 25px;
}
  
</style>
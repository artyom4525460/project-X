<template>
  <div class="page">
    <div :class="{ 'chosen-card': true, rotate }">
        <div class="chosen-card-front">
            <img :src="card.media.path"/>
        </div>
        <div class="chosen-card-back">
            <div class="chosen-card-back-wrap">
                <div class="chosen-card-back-buttons">
                  <router-link :to="{ name: 'video', params: { cardId: card.id }}" id="createVideoMessage" class="secondary-button">
                    <img src="@/assets/images/video_message.svg">
                    <img src="@/assets/images/video_message_active.svg" class="active">
                    Add a video message
                  </router-link>
                  <router-link :to="{ name: 'audio', params: { cardId: card.id }}" id="createAudioMessage" class="secondary-button">
                    <img src="@/assets/images/audio_message.svg">
                    <img src="@/assets/images/audio_message_active.svg" class="active">
                    Add an audio message
                  </router-link>
                  <router-link :to="{ name: 'text', params: { cardId: card.id }}" id="createGiftMessage" class="secondary-button">
                    <img src="@/assets/images/gift_message.svg">
                    <img src="@/assets/images/gift_message_active.svg" class="active">
                    Add a text message
                  </router-link>
                </div>
            </div>
        </div>
    </div>
    <div class="button-block">
      <a href="#" v-if="!rotate" @click="toRotate" class="button primary-button">
        Add my message
      </a>
    </div>
  </div>
</template>

<script>
import { getById } from '@/modules/cards'

export default {
  props: {
    cardId: {
      type: String,
      required: false
    },
  },

  data () {
    return {
      rotate: false
    }
  },

  computed: {
    card () {
      return getById(this.cardId)
    },
  },

  methods: {
    toRotate () {
      this.rotate = true
    }
  }
}
</script>

<style lang="scss" scoped>
.rotate {
  .chosen-card-front {
    transform: rotateY(-180deg) !important;
  }
  .chosen-card-back {
    transform: rotateY(0deg) !important;
  }
}
.page {
  padding: 20px 0;
  background-color: #faf5f4;
}
.chosen-card {
  width: 260px;
  height: 85%;
  position: relative;
  margin: 0px auto;
  img{
    max-width: 100%;
    max-height: 100%;
    margin-right: 0;
  }
  .chosen-card-front{
    backface-visibility: hidden;
  }
  .chosen-card-front, .chosen-card-back {
    position: absolute;
    height: fit-content;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    transition: 1s;
    backface-visibility: hidden;
    z-index: 10;
  }
  .chosen-card-back {
    transform: rotateY(180deg);
    .chosen-card-back-wrap {
      width: 100%;
      height: 100%;
      position: relative;
      .chosen-card-back-content {
          width: 100%;
          height: 100%;
          .tap-to-type{
            display: block;
            padding: 15px 25px;
            border-radius: 30px;
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #333;
            white-space: nowrap;
            min-width: 120px;
            @media (max-width: 480){
                top: 25%;
            }
          }
        }
      }
      .chosen-card-back-buttons{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px 15px;
        background-color: #f8e9e6;
        .secondary-button{
            width: 100%;
            height: 33%;
            display: flex;
            flex-direction: column;
            margin: 5px 0;
            background-color: #fff;
            img{
                margin-bottom: 12px;
                margin-right: 0;
            }
        }
        #createVideoMessage{
            img{
                width: 30px;
            }
        }
        #createAudioMessage{
            img{
                width: 24px;
            }
        }
        #createGiftMessage{
            img{
                width: 27px;
            }
        }
    }
  }
  .chosen-card-front {
    img {
      margin: 0 auto;
      width: 100%;
    }
  }
}
.button-block{
  padding-top: 10px;
  height: 10%;
  width: 260px;
  display: block;
  margin: 0 auto;
}
</style>
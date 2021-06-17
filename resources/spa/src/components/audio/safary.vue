<template>
  <div class="page pink-background">
      <error :message="error" />
      <div class="audio-block vertical-block">
      <div class="col">
        <div @click="startRecording">
          <img src="@/assets/images/video-recover-button.png" v-show="!recording"/>
          <img src="@/assets/images/video-recover-button-red.png" v-show="recording"/>
        </div>
        <div class="msg" v-show="recording">Recording...</div>
      </div>
      </div>
  </div>
</template>

<script>
import Error from '@/components/error.vue'
import { RecorderService } from '@/services/recorderService'

export default {
  props: {
    cardId: {
      type: String,
      required: false,
      default: function() {
        return ''
      }
    },
  },

  components: {
    Error
  },

  data() {
    return {
      recording: false,
      recorderSrvc: new RecorderService()
    }
  },

  created() {
    this.recorderSrvc.em.addEventListener('recording', event => {
      setTimeout(() => {
        this.$router.push({
          name: 'result',
          params: {
            file: event.detail.recording.blob,
            type: 'Audio',
            cardId: this.cardId
          }
        })
      }, 1000)
    })
  },

  methods: {
    startRecording() {
      this.recording = !this.recording;
      if (this.recording) {
        this.recorderSrvc.startRecording()
      } else {
        this.recorderSrvc.stopRecording()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image : url('../../assets/images/audio_message_background_image.jpg')
}
.col {
  text-align: center;
  position: relative;
}
.msg {
  position: absolute;
  top: 100%;
}
.audio-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
</style>
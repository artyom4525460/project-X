<template>
  <div class="page pink-background">
      <div class="video-block">
        <div id="canderVideoAdPipe">
        </div>
      </div>
  </div>
</template>

<script>
const accountHash = process.env.VUE_APP_PIPE_ACCOUNT_HASH

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

  data() {
    return {
      pipeParams: {
        size:{
          width: 640,
          height: 510
        },
        qualityurl:"avq/480p.xml",
        accountHash,
        eid:"ESVoM9",
        mrt:120,
        dpv:0,
        dup:1,
        asv:1
      }
    }
  },

  mounted() {
    const success = (location, filename) => {
      this.$router.push({
        name: 'result',
        params: {
          url: `https://${location}/${accountHash}/${filename}.mp4`,
          image: `https://${location}/${accountHash}/${filename}.jpg`,
          type: `Video`,
          cardId: this.cardId
        }
      })
    }

    window.PipeSDK.insert('canderVideoAdPipe', this.pipeParams, function(recorderObject) {
      recorderObject.onSaveOk = (recorderId, streamName, videoId, audioOnly, location) => {
          success(location, streamName)
      }

      recorderObject.onVideoUploadSuccess = function(recorderId, filename, filetype,videoId,audioOnly,location){
          success(location, filename)
      }

      recorderObject.onDesktopVideoUploadSuccess = function(recorderId, filename,filetype,videoId,audioOnly,location){
          success(location, filename)
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  z-index: 10;
  background-color: #f2f3fc;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-block {
  position: relative;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
}
</style>
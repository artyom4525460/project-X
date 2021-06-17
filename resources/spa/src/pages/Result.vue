<template>
  <div class="page">
      <component
        :is="componentPreview"
        :url="urlPreview"
        :file="filePreview"
        :image="imagePreview"
        :cardId="cardIdPreview"
      >
      </component>
    <div class="button-block-result">
        <div class="inputs-block">
          <div class="input-field">
            <input
              ref="number"
              v-model="phone"
              placeholder="Recipient’s phone number (required)"
              @countrychange="countrychange(iti.getSelectedCountryData())"
            />
            <error :message="validError" />
          </div>
      </div>
      <div class="result-text">
        The recipient will use their number to securely access this message after scanning the QR code delivered with the gift.
      </div>
      <component
        v-if="iti"
        :is="componentButtons"
        :url="urlPreview"
        :file="filePreview"
        :cardId="cardIdPreview"
        @onConfirm="onConfirm"
      >
      </component>
      <error :message="confirmError" />
    </div>
  </div>
</template>

<script>
import VideoPreview from '@/components/result/video/preview.vue'
import VideoButtons from '@/components/result/video/buttons.vue'
import AudioPreview from '@/components/result/audio/preview.vue'
import AudioButtons from '@/components/result/audio/buttons.vue'

import Error from '@/components/error.vue'

import IMask from 'imask'
import intlTelInput from 'intl-tel-input'

import modal from '@/modules/modal'

export default {
  components: {
    VideoPreview,
    VideoButtons,
    AudioPreview,
    AudioButtons,
    Error
  },

  props: {
    file: {
      type: String,
      required: false
    },
    url: {
      type: String,
      required: false
    },
    image: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: false
    },
    cardId: {
      type: String,
      required: false
    },
  },

  data() {
    return {
      phone: '',
      code: '',
      iti: null,
      validError: '',
      confirmError: '',
      componentPreview: `${this.type}Preview`,
      componentButtons: `${this.type}Buttons`,

      typePreview: this.type,
      imagePreview: this.image,
      urlPreview: this.url,
      filePreview: this.file,
      cardIdPreview: this.cardId || null
    }
  },

  computed: {
    phonePreview() {
      return `+${this.code}${this.phone}`
    },
    mediaPreview() {
      return {
        url: this.urlPreview || null,
        type: this.typePreview || null,
        file: this.filePreview || null
      }
    }
  },

  mounted() {
    IMask(this.$refs.number, {
      mask: '000000000000'
    })

    this.iti = intlTelInput(this.$refs.number, {
      initialCountry: 'auto',
      separateDialCode: true,
      geoIpLookup: function (success) {
        window.$.get('https://ipinfo.io', function () {}, 'jsonp').always(function (resp) {
          success((resp && resp.country) ? resp.country : 'us')
        })
      }
    })
  },

  methods: {
    valid() {
      this.validError = ''

      if (this.phone.length < 9) {
        this.validError = 'Please fill in this field with valid phone'
      }
    },
    countrychange({ dialCode }) {
      this.code = dialCode
    },
    onConfirm(callback) {
      this.valid()

      if (!this.validError) {
        modal.confirm(
          this.cardIdPreview,
          this.mediaPreview,
          this.phonePreview
        ).finally(callback)
      } else {
        callback()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  background-color: #faf5f4;
}
.button-block-result {
  height: 50%;
  padding: 20px 10px 0;
  @media(min-width: 1053px){
    padding-top: 0;
    height: 50%;
  }

  :deep(.iti) {
    width: 100%;
  }

  :deep(.iti__flag-container) {
    width: 90px;
  }

  :deep(.iti__selected-flag) {
    border-radius: 10px 0 0 10px;
  }

  #canderResultImage{
    @media(min-width: 1053px){
      padding-top: 60px;
      padding-bottom: 30px;
    }
  }
  .result-text{
    font-size: 12px;
    line-height: 15px;
    color: #000;
    text-align: center;
    max-width: 444px;
    margin: 0 auto;
    padding: 20px 0;
    @media (max-width: 375px) {
      padding: 10px 0;
    }
  }
}
.inputs-block{
  width: 100%;
  margin: 0 auto;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .input-field{
    position: relative;
    width: 100%;
    max-width: 326px;
    padding: 5px 0;
    label{
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
      color: #000;
    }
    input{
      background: #FFFFFF;
      border: 1px solid #F4F4F4;
      box-sizing: border-box;
      box-shadow: 4px 4px 8px rgba(154, 154, 154, 0.25);
      border-radius: 10px;
      height: 40px;
      width: 100%;
      padding: 0px 15px 0 55px;
      font-size: 12px;
    }
    ::-webkit-input-placeholder {
      font-size: 12px;
      color: #9A9A9A;
    }
    :-moz-placeholder {
      font-size: 12px;
      color: #9A9A9A;
    }
    ::-moz-placeholder {
      font-size: 12px;
      color: #9A9A9A;
    }
    :-ms-input-placeholder {
      font-size: 12px;
      color: #9A9A9A;
    }
    #canderResultRecipientInputAlert{
      position: absolute;
      width: 100%;
      left: 10px;
      top: -15px;
      color: red;
    }
  }
}
</style>
<template>
  <component :cardId="cardId" :is="component" />
</template>

<script>
import DefaultComponent from '@/components/audio/default.vue'
import SafaryComponent from '@/components/audio/safary.vue'
import checkSafari from '@/modules/checkSafari'

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
    DefaultComponent,
    SafaryComponent
  },

  data() {
    return {
      component: checkSafari() ? 'safary-component' : 'default-component'
    }
  },
}
</script>
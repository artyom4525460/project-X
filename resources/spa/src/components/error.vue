<template>
  <div v-if="message" class="error">
    {{ message }}
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.error {
  margin-top: 5px;
  color: red;
  font-size: 12px;
}
</style>
<template>
  <notice title=":(" :message="message" />
</template>

<script>
import Notice from '@/components/Notice'
import store from '@/store'

export default {
  name: 'error',
  data () {
    return {
      state: store.state
    }
  },
  mounted () {
    this.timer = setTimeout(() => {
      this.$router.go(-1)
    }, 3000)
  },
  beforeDestroy () {
    if (this.timer != null) {
      clearTimeout(this.timer)
    }
  },
  computed: {
    message () {
      return this.state.error || ''
    }
  },
  components: {
    Notice
  }
}
</script>

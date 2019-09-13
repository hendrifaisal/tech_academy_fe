<template>
  <div>
    <h1> Slots </h1>
    {{ data }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      data: 'slot/slotData',
      id: 'slot/slotId',
      status: 'slot/slotStatus',
      message: 'slot/slotMessage'
    })
  },
  async mounted () {
    await this.$store.dispatch('slot/FETCH_SLOTS')
  }
}

</script>

<template>
  <div>
    <h1> Edit Slot Buildings </h1>
    <el-form label-width="120px">
      <el-form-item label="Name">
        <el-input v-model="name" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Jumlah Slot">
        <el-input v-model="total" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item class="float-right">
        <nuxt-link :to="`/in/buildings/${$route.params.building_id}/slots`">
          <el-button round>
            Cancel
          </el-button>
        </nuxt-link>
        <el-button round type="primary" @click="save()">
          Submit
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: '',
    total: 0
  }),

  async mounted () {
    await this.fetchBuilding({ building_id: this.$route.params.building_id, slot_id: this.$route.params.slot_id })
  },

  methods: {
    async fetchBuilding (data) {
      const detail = await this.$store.dispatch('building/DETAIL_SLOT_BUILDINGS', data)
      this.name = detail.name
      this.total = detail.total
    },
    save () {
      const data = {
        building_id: this.$route.params.building_id,
        slot_id: this.$route.params.slot_id,
        name: this.name,
        total: this.total
      }
      this.$store.dispatch('building/UPDATE_SLOT_BUILDINGS', data).then(() => {
        this.$router.push(`/in/buildings/${this.$route.params.building_id}/slots`)
      })
    }
  }
}

</script>

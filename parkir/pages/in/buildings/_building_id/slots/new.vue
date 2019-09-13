<template>
  <div>
    <h1> Add New Slot to Buildings </h1>
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
  methods: {
    save () {
      const data = {
        building_id: this.$route.params.building_id,
        total: parseInt(this.total, 10),
        name: this.name
      }
      this.$store.dispatch('building/ADD_SLOT_BUILDINGS', data).then(() => {
        this.$router.push(`/in/buildings/${this.$route.params.building_id}/slots`)
      })
    }
  }
}

</script>

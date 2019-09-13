<template>
  <div>
    <h1> Buildings Slot </h1>
    <div class="mb-4">
      Total : {{ data.total }}
      <nuxt-link :to="`/in/buildings/${$route.params.building_id}/slots/new`">
        <el-button type="primary" class="float-right">
          Tambah Baru
        </el-button>
      </nuxt-link>
    </div>
    <el-table
      :data="data.data"
      style="width: 100%"
      class="mt-4"
    >
      <el-table-column
        fixed
        prop="id"
        label="ID"
        width="80"
      />
      <el-table-column
        prop="name"
        label="Name"
      />
      <el-table-column
        prop="total"
        label="Total"
      />
      <el-table-column
        width="200"
      >
        <template
          slot="header"
        >
          Aksi
        </template>
        <template
          slot-scope="scope"
          class="text-center"
        >
          <el-button
            size="mini"
            @click="handleUpdate(scope.$index, scope.row.id)"
          >
            Edit
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row.id)"
          >
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      data: 'building/slotData'
    })
  },
  async mounted () {
    await this.fetchSlots(this.$route.params.building_id)
  },

  methods: {
    async fetchSlots (id) {
      await this.$store.dispatch('building/FETCH_SLOTS_BUILDINGS', { id })
    },

    handleUpdate (id, data) {
      this.$router.push(`/in/buildings/${this.$route.params.building_id}/slots/${data}/edit`)
    },

    async handleDelete (id, data) {
      const dataDelete = {
        building_id: this.$route.params.building_id,
        slot_id: data
      }
      await this.$store.dispatch('building/DELETE_SLOT_BUILDINGS', dataDelete)
      await this.fetchSlots(this.$route.params.building_id)
    }
  }
}

</script>

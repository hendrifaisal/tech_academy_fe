<template>
  <div>
    <h1> Buildings </h1>
    <div class="mb-4">
      Total : {{ data.total }}
      <nuxt-link :to="'/in/buildings/new'">
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
        width="300"
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
            @click="handleSlots(scope.$index, scope.row.id)"
          >
            Slot
          </el-button>
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
      data: 'building/buildingData',
      status: 'building/buildingStatus',
      message: 'building/buildingMessage'
    })
  },
  async mounted () {
    await this.$store.dispatch('building/FETCH_BUILDINGS')
  },
  methods: {
    handleUpdate (id, data) {
      this.$router.push(`/in/buildings/${data}/edit`)
    },

    handleSlots (id, data) {
      this.$router.push(`/in/buildings/${data}/slots`)
    },

    async handleDelete (id, data) {
      await this.$store.dispatch('building/DELETE_BUILDINGS', { id: data })
      await this.$store.dispatch('building/FETCH_BUILDINGS')
    }
  }
}

</script>

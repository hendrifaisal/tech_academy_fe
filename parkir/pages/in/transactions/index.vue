<template>
  <div>
    <h1> Transactions </h1>
    <el-table
      :data="data.data.data"
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
        prop="code"
        label="Code"
      />
      <el-table-column
        prop="Slot.building_id"
        label="Building"
      />
      <el-table-column
        prop="Slot.name"
        label="Slot Name"
      />
      <el-table-column
        prop="name"
        label="Name"
      />
      <el-table-column
        prop="total"
        label="Parking Cost"
      />
      <el-table-column
        prop="start_at"
        label="Start"
      />
      <el-table-column
        prop="end_at"
        label="End"
      />
    </el-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      data: 'transaction/transactionData',
      status: 'transaction/transactionStatus',
      message: 'transaction/transactionMessage'
    })
  },
  async mounted () {
    await this.$store.dispatch('transaction/FETCH_TRANSACTIONS')
  }
}

</script>

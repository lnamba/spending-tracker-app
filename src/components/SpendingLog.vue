<template>
  <div class="spending-form">
    <div v-for="entry in entries" :key="entry.itemName">
      <div class="entry-detail">
        <span>Item name</span>
        <span>{{ entry.itemName }}</span>
      </div>

      <div class="entry-detail">
        <span>Date</span>
        <span>{{ entry.entryDate }}</span>
      </div>

      <div class="entry-detail">
        <span>Amount</span>
        <span>{{ entry.amount }}</span>
      </div>

      <div class="entry-detail">
        <span>Category</span>
        <span>{{ entry.category }}</span>
      </div>

      <div class="entry-detail">
        <span>Note</span>
        <span>{{ entry.note }}</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    entries: Array,
  }
}
</script>

<style scoped>

</style>
<template>
  <div class="home">
     <SpendingForm @newEntryAdded="onNewEntry" />

     <SpendingLog :entries="entries" />
  </div>
</template>

<script>
import { listEntries } from '../../functions/entries';
import SpendingForm from './SpendingForm.vue';
import SpendingLog from './SpendingLog.vue';

export default {
  name: 'Home',

  components: {
    SpendingForm,
    SpendingLog,
  },

  props: {

  },

  data() {
    return {
      entries: [],
    }
  },

  async mounted() {
    this.entries = await this.getEntries();
  },

  methods: {
    async getEntries() {
      return listEntries();
    },

    async onNewEntry() {
      this.entries = await this.getEntries();
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

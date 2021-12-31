<template>
  <div id="spending-form">
    <FormField 
      v-for="formField in formFields"
      :key="formField.field"
      :field="formField.field"
      :label="formField.label"
      :type="formField.type"
      :options="formField.options"
      v-model="formField.value"
    />

    <button type="button" for="spending-form" :disabled="!isValid" @click="addEntry">Add entry</button>
  </div>
</template>

<script>
import humps from 'lodash-humps';

import { createEntry, listEntries } from '../../functions/entries';
import FormField from './FormField.vue';

export default {
  components: {
    FormField
  },

  data() {
    return {
      formFields: [
        {
          field: 'itemName',
          label: 'Item name',
          value: '',
          type: 'text',
        },
        {
          field: 'entryDate',
          label: 'Date',
          value: new Date().toISOString().split('T')[0],
          type: 'date',
        },
        {
          field: 'amount',
          label: 'Amount',
          value: 0,
          type: 'text',
        },
        {
          field: 'category',
          label: 'Category',
          value: 'Food/Drink',
          type: 'select',
          options: ['Food/Drink', 'Entertainment', 'Beauty/Health', 'Clothing', 'Gifts'],
        },
        {
          field: 'note',
          label: 'Note',
          value: '',
          type: 'text',
        },
      ],
    }
  },

  computed: {
    isValid() {
      const amountField = this.formFields.find(({ field }) => field === 'amount');
      const itemNameField = this.formFields.find(({ field }) => field === 'itemName');
      return amountField.value && itemNameField.value;
    }
  },

  methods: {
    async addEntry() {
      const entry = this.formatEntry();
      console.log({entry})
    
      await createEntry(entry);
      await listEntries();
      this.$emit('newEntryAdded');
    },
    
    formatEntry() {
      console.log(this.formFields)
      return this.formFields.reduce((result, { field, value }) => {
        const key = humps(field);
        const val = key === 'amount' ? parseFloat(value) : value;
        
        result[key] = val;
        return result;
      }, {});
    },
  }
}
</script>

<style scoped>

</style>

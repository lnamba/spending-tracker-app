<template>
  <div id="spending-form">
    <FormField 
      v-for="formField in formFields"
      :key="formField.field"
      :field="formField.field"
      :label="formField.label"
      v-model="formField.value"
    />
<!--     
    <label :for="formFields[0].field">{{ formFields[0].label }}</label>
    <input type="text" :id="formFields[0].field" v-model="formFields[0].value" /> -->

    <button type="button" for="spending-form" @click="addEntry">Add entry</button>
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
        },
        {
          field: 'entryDate',
          label: 'Date',
          value: '',
        },
        {
          field: 'amount',
          label: 'Amount',
          value: '',
        },
        {
          field: 'category',
          label: 'Category',
          value: '',
        },
        {
          field: 'note',
          label: 'Note',
          value: '',
        },
      ],
    }
  },

  methods: {
    async addEntry() {
      const entry = this.formatEntry();
    
    await createEntry(entry);
      await listEntries();
    },
    
    formatEntry() {
      console.log(this.formFields)
      const test = this.formFields.reduce((result, { field, value }) => {
        const key = humps(field);
        
        result[key] = value;
        console.log({key, result, value})
        return result;
      }, {});

      console.log({test})
      return test
    },
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="form-field">
    <label :for="field">{{ label }}</label>

    <div v-if="isSelectField">
      <select :name="field" :id="field" @input="updateValue($event.target.value)">
        <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
      </select>
    </div>

    <div v-else-if="isDateField">
      <input type="date" :id="field" :value="modelValue" @input="updateValue($event.target.value)" />
    </div>

    <div v-else>
      <input type="text" :id="field" :value="modelValue" @input="updateValue($event.target.value)" />
    </div>
  </div>
</template>

<script>

export default {
  props: {
    field: String,
    label: String,
    modelValue: [String, Number],
    type: String,
    options: {
      type: Array,
      required: false
    },
  },

  computed: {
    isDateField() {
      return this.type === 'date';
    },

    isSelectField() {
      return this.type === 'select';
    },
  },

  methods: {
    updateValue(value) {
      this.$emit('update:modelValue', value);
    }
  }
}
</script>

<style scoped>
.form-field {
  padding: 8px;
}

label {
  padding-right: 8px;
}
</style>
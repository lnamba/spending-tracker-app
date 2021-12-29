<template>
  <div class="form-field">
    <label :for="field">{{ label }}</label>
    <input type="text" :id="field" :value="modelValue" v-on:input="updateValue($event.target.value)" />
  </div>
</template>

<script>

export default {
  props: {
    field: String,
    label: String,
    modelValue: String
   
  },

  methods: {
    updateValue(value) {
      this.$emit('update:modelValue', value)
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
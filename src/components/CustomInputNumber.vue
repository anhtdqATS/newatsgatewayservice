<template>
  <el-input-number v-model="localValue" @input="handleInput" />
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";
const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
});
const emit = defineEmits(["update:modelValue", "isNullOrEmpty"]);
const localValue = ref(props.modelValue);
watch(
  () => props.modelValue,
  (newVal) => {
    localValue.value = newVal;
    validateInputNumber(newVal);
  }
);
function validateInputNumber(value) {
  const isEmpty = value === null || value === undefined || value === "";
  emit("isNullOrEmpty", isEmpty);
}
function handleInput(value) {
  validateInputNumber(value);
  emit("update:modelValue", value);
}
</script>

<style scoped></style>

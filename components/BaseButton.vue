<template>
  <button :class="['w-full h-16 bg-[#8098F9] rounded-[10px] font-bold text-white', { 'opacity-75': isDisabled }]" :disabled="isDisabled">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface IProps {
  isDisabled: boolean
}

defineProps<IProps>() 
</script>

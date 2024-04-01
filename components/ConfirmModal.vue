<template>
  <div class="flex fixed left-0 top-0 right-0 bottom-0 z-50 bg-black/80" @click.self="emit('close')">
    <div class="relative bg-white w-1/3 m-auto rounded-xl">
      <SvgoClose class="absolute w-4 top-4 right-4 cursor-pointer" @click="emit('close')" />
      <div class="p-4 pt-8">
        <slot></slot>
        <div class="flex gap-4">
          <BaseButton class="mt-5" :isDisabled="false" @click="emit('confirm')">OK</BaseButton>
          <BaseButton class="mt-5 bg-rose-500" :isDisabled="false" @click="emit('close')">CANCEL</BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

interface IEmits {
  (e: 'close'): void
  (e: 'confirm'): void
}

const emit = defineEmits<IEmits>()
</script>

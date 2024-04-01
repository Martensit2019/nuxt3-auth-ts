<template>
  <h1 class="font-bold text-[40px]">Enter OTP</h1>
  <div class="mb-1 text-xl">
    Sent OTP on <span class="font-bold" style="color: #8098f9">{{ userStore?.email }}</span>
  </div>
  <NuxtLink class="font-bold" style="color: #8098f9" to="/signup"> Change email</NuxtLink>

  <form @submit.prevent="onSubmit">
    <div class="flex gap-5 mt-[25px]" style="">
      <BaseInput v-for="(item, idx) in Object.keys(form)" v-model="form[item]" type="number" placeholder="-" :key="idx" />
    </div>
    <BaseButton class="mt-5 mx-[15px] max-w-[454px]" :isDisabled="isDisabled">SUBMIT</BaseButton>
  </form>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useUserStore } from '~/stores/users'

const userStore = useUserStore()

const form = reactive<any>({
  num_0: null,
  num_1: null,
  num_2: null,
  num_3: null,
  num_4: null,
  num_5: null,
})

const mum1 = ref<string>('')

const isDisabled = computed(() => true)

const onSubmit = () => {
  console.log('onSubmit')
}

definePageMeta({
  layout: 'auth',
  middleware: 'auth',
})
</script>

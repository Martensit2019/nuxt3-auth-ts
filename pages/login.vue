<template>
  <h1 class="font-bold text-[40px]">Login to your Account</h1>
  <div class="relative my-[25px] py-[10px] px-0">
    <div class="w-full h-[1px] bg-[#71717a]"></div>
    <div class="absolute w-[213px] top-0 left-[50%] -translate-x-[50%] bg-[#F5F8FF] text-center">with email</div>
  </div>

  <form @submit.prevent="userStore.login('login')">
    <BaseInput v-model="loginForm.username" icon="username" placeholder="Username" />
    <!-- <BaseInput v-model="email" icon="email" placeholder="Email" /> -->
    <BaseInput v-model="loginForm.password" type="password" icon="password" placeholder="Password" />
    <BaseButton class="mt-5" :isDisabled="isDisabled">LOG IN</BaseButton>
  </form>
  <div class="mt-5">Don’t have account? <NuxtLink class="font-bold text-[#8098f9]" to="/signup"> Create an account</NuxtLink></div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/users'

const userStore = useUserStore()
const { loginForm, isLoading, isLoginFormFilled } = toRefs(useUserStore())
const isDisabled = computed(() => isLoginFormFilled.value || isLoading.value)

definePageMeta({
  layout: 'auth',
})
</script>

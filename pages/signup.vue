<template>
  <ConfirmModal v-if="isVisible" @confirm="onConfirm" @close="isVisible = false">
    <div class="text-2xl">All data may be lost</div>
  </ConfirmModal>
  <h1 class="font-bold text-[40px]">Create your account</h1>
  <div class="mb-[25px]">Unlock all Features!</div>
  <form @submit.prevent="userStore.login('register')">
    <BaseInput v-model="registerForm.username" icon="username" placeholder="Username" />
    <BaseInput v-model="registerForm.email" icon="email" placeholder="Email" />
    <BaseInput v-model="registerForm.password" type="password" icon="password" placeholder="Password" />
    <BaseInput v-model="registerForm.confirmPassword" type="password" icon="password" placeholder="Confirm Password" />
    <div class="flex items-center mb-4">
      <input id="default-checkbox" :checked="false" type="checkbox" value="" class="w-5 h-5 rounded-[10px] border border-solid border-[#8098F9]" />
      <label for="default-checkbox" class="ms-2"
        >Accept <NuxtLink class="font-bold text-[#8098f9]" to="/terms">terms and conditions</NuxtLink></label
      >
    </div>
    <BaseButton class="mt-5" :isDisabled="isDisabled">SIGN UP</BaseButton>
  </form>
  <div class="mt-5">DYou have account? <NuxtLink class="font-bold text-[#8098f9]" to="/login">Login now</NuxtLink></div>
  <div></div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/users'

const userStore = useUserStore()
const { registerForm, isLoading, isNotFullFilledForm, isSomeFormData } = toRefs(useUserStore())
const isVisible = ref<boolean>(false)
const isDisabled = computed(() => isNotFullFilledForm.value)

const onConfirm = () => {
  isVisible.value = false
  userStore.clearRegisterForm()
  navigateTo('/login', { replace: true })
}

definePageMeta({
  layout: 'auth',
})

onBeforeRouteLeave((to, from, next) => {
  isVisible.value = true
  if (!isSomeFormData.value) return next()
})
</script>

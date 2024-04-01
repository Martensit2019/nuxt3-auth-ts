<
<template>
  <div>
    <div class="container mx-auto">
      <div class="auth-layout grid grid-cols-2 min-h-screen rounded-xl truncate">
        <div class="auth-layout__form bg-[#F5F8FF] flex">
          <div :class="['m-auto w-[454px]', { 'w-[484px]': route === 'otp' }]">
            <slot />
          </div>
        </div>
        <div class="flex bg-[#6172F3]">
          <div class="m-auto">
            <div class="relative w-[606px] h-[606px]">
              <SvgoEllipseBig />
              <div class="absolute w-[528px] h-[528px] top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]">
                <SvgoEllipseSmall />
              </div>
              <SvgoLogin v-if="route === 'login'" class="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] w-[586px]" />
              <SvgoSignup v-if="route === 'signup'" class="absolute w-[660px] top-[84px] left-0" />
              <SvgoOtp v-if="route === 'otp'" class="absolute w-[633px] top-[84px] -left-[18px]" />
            </div>
            <div style="color: #e0eaff; text-align: center; margin-top: 50px">
              <div class="font-bold text-xl">{{ authTitle }}</div>
              <div class="font-medium text-base opacity-75">{{ authText }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const TitleAndText = {
  login: {
    title: 'Connect with any device.',
    text: 'Everything you need is an internet connection.',
  },
  signup: {
    title: 'Join us!',
    text: 'Just go through the boring process of creating an account.',
  },
  otp: {
    title: "It's just OTP verification",
    text: 'You are one step away from recovering your password.',
  },
}

type TitleAndTextKeys = keyof typeof TitleAndText

const route = computed(() => useRoute().name)

const authTitle = computed(() => TitleAndText[route.value as TitleAndTextKeys].title)
const authText = computed(() => TitleAndText[route.value as TitleAndTextKeys].text)
</script>

<style scoped>
.container {
  max-width: 1440px;
}
</style>

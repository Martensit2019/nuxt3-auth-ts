import { useUserStore } from '~/stores/users'

export default defineNuxtRouteMiddleware(async () => {
  const userStore = useUserStore()
  if (!userStore.email) {
    return await navigateTo('/login')
  }
})

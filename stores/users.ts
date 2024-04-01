import { defineStore } from 'pinia'
import type { Customer, Login, LoginForm, RegisterForm, TypeAuth, User } from '~/types'

export const useUserStore = defineStore('user', () => {
  const isLoading = ref<boolean>(false)
  // ---- start login -----------------------------

  const loginForm = reactive<LoginForm>({
    username: '', // 'kminchelle' - реальный
    password: '', // '0lelplR' - реальный
  })

  const isLoginFormFilled = computed(() => Object.values(loginForm).some((v) => v === ''))
  // ---- end login -----------------------------

  // ---- start register -----------------------------
  const registerForm = reactive<RegisterForm>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const isNotFullFilledForm = computed(() => Object.values(registerForm).some((v) => v === ''))
  const isSomeFormData = computed(() => Object.values(registerForm).some((v) => v !== ''))
  const clearRegisterForm = () => {
    Object.keys(registerForm).forEach((val: string) => {
      registerForm[val as keyof RegisterForm] = ''
    })
  }
  // ---- end register -----------------------------
  const user = ref()
  const email = ref()
  const token = useCookie('accessToken', {
    maxAge: 60 * 60,
  })

  const setToken = (data?: string) => (token.value = data)

  const setUser = (data?: User) => (user.value = data)
  const setEmail = (data?: string) => (email.value = data)

  const login = async (typeAuth: TypeAuth) => {
    const payload =
      typeAuth === 'login'
        ? loginForm
        : {
            username: registerForm.username,
            password: registerForm.password,
          }
    isLoading.value = true
    try {
      const res = await $fetch<User>('https://dummyjson.com/auth/login', {
        method: 'POST',
        body: payload,
      })
      await navigateTo('/otp', { replace: true })
      setUser(res)
      setToken(res.token)
      setEmail(res.email)
    } catch (err) {
      console.log(err)
    } finally {
      isLoading.value = false
    }
  }

  const fetchEmail = () => {
    if (token.value) {
      const tokenParts = token.value.split('.')
      const decodedPayload = JSON.parse(atob(tokenParts[1]))
      setEmail(decodedPayload.email)
    }
  }

  return {
    loginForm,
    user,
    token,
    isLoginFormFilled,
    login,
    email,
    fetchEmail,
    setUser,
    setToken,
    isLoading,
    registerForm,
    isNotFullFilledForm,
    isSomeFormData,
    clearRegisterForm,
  }
})

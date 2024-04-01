<template>
  <div class="relative mb-2.5">
    <input
      :class="[
        'input w-full h-16 bg-[#eaefff] rounded-[10px] border border-solid border-[#8098F9] placeholder:text-[#2D31A6] placeholder:opacity-20 ',
        {'px-6 placeholder:text-[32px]': props.type === 'number' },
        {'px-[50px]': props.type !== 'number' }
      ]"
      :type="typeInput"
      :value="modelValue"
      :placeholder="placeholder"
      @input="onInput"
    />
    <SvgoPerson v-if="props.icon === 'username'" class="absolute left-[10px] top-[50%] -translate-y-[50%] w-[30px]" />
    <SvgoEmail v-if="props.icon === 'email'" class="absolute left-[10px] top-[50%] -translate-y-[50%] w-[30px]" />
    <SvgoShieldSlash v-if="props.icon === 'password'" class="absolute left-[10px] top-[50%] -translate-y-[50%] w-[30px]" />
    <SvgoEyeSlash
      v-if="props.icon === 'password'"
      class="absolute right-[10px] top-[50%] -translate-y-[50%] w-[30px] cursor-pointer"
      @click="isOpenEye = !isOpenEye"
    />
  </div>
</template>

<script setup lang="ts">
type TType = 'text' | 'password' | 'number'
interface IProps {
  type?: TType
  modelValue: string | null
  placeholder?: string
  icon?: string
}

const props = withDefaults(defineProps<IProps>(), {
  type: 'text',
  placeholder: '',
  icon: '',
})

interface IEmits {
  (e: 'update:modelValue', value: string): void
}

const emit = defineEmits<IEmits>()

const isOpenEye = ref<boolean>(false)

const typeInput = computed(() => {
  if (props.type !== 'password') return 'text'
  return props.type === 'password' && isOpenEye.value ? 'text' : 'password'
})

const onInput = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<script setup lang="ts">
import { ref } from 'vue';
import type { GameStatus } from '../types/GameStatus'

interface Props {
  word: string
}

defineProps<Props>()

const gameStatus = ref<GameStatus | null>(null)
const isVisible = ref(false)

const open = (status: GameStatus) => {
  gameStatus.value = status
  isVisible.value = true
}
const close = () => {
  isVisible.value = false
}

defineExpose({
  open, close
})

const emit = defineEmits<{
  (e: 'restart'):void
}>()
</script>

<template>
  <div v-if="isVisible" class="popup-container">
    <div class="popup">
      <h2 v-if="gameStatus === 'win'">Congratulations, You Win! 😃</h2>
      <div v-else>
        <h2>You Lose. 😕</h2>
        <h3>...name: {{ word }}</h3>
      </div>
      <button @click="emit('restart')">Restart</button>
    </div>
  </div>
</template> 
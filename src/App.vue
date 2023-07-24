<script setup lang="ts">
import GameHeader from './components/GameHeader.vue'
import GameFigure from './components/GameFigure.vue'
import GameWrongLetters from './components/GameWrongLetters.vue'
import GameWord from './components/GameWord.vue'
import GamePopup from './components/GamePopup.vue'
import GameNotification from './components/GameNotification.vue'
import { computed, ref } from 'vue'

const word = ref('john')
const letters = ref<string[]>([])
const correctLetters = computed(() => letters.value.filter((x) => word.value.includes(x)))
const wrongLetters = computed(() => letters.value.filter((x) => !word.value.includes(x)))
const notification = ref<InstanceType<typeof GameNotification> | null>(null)


window.addEventListener('keydown', ({ key }) => {
  if(letters.value.includes(key)) {
    notification.value?.open()
    setTimeout(() => {
      notification.value?.close()
    }, 3000)
    return
  }

  // фильтрация кирилицы FIXME:
  // if(/[а-яА-ЯёЁ]/.test(key)) {
  //   console.log(key)
  // }

  letters.value.push(key.toLocaleLowerCase())
})
</script>

<template>
  <div id="app">
    {{ word }}
    {{ letters }}
    {{ correctLetters }}
    {{ wrongLetters }}
    <GameHeader />
    <div class="game-container">
      <GameFigure />
      <GameWrongLetters :wrong-letters="wrongLetters" />
      <GameWord :word="word" :correct-letters="correctLetters" />
    </div>
    <!-- Container for final message -->
    <GamePopup v-if="false" />
    <!-- Notification -->
    <GameNotification ref="notification"/>
  </div>
</template>

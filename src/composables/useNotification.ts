/*
import { ref } from "vue"
import GameNotification from '../components/GameNotification.vue'

export const useNotification = () => {
  const showNotification = () => {
    const notification = ref<InstanceType<typeof GameNotification> | null>(null)
    notification.value?.open()
    setTimeout(() => {
      notification.value?.close()
    }, 3000)

    return {
      notification,
      showNotification
    }
  }
}
*/
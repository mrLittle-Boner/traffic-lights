import { ref } from '@vue/reactivity'

function useDelay() {
  const timer = ref(0);

  const timerId = setInterval(() => {
    timer.value += 1
  }, 1000);

  const destroyTimer = () => clearInterval(timerId)

  return {
    timer,
    destroyTimer
  }
}

export default useDelay;
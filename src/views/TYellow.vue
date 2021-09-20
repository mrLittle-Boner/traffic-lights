<template>
  <TrafficLights currentLight="yellow" :timer="ligthTimer" />
</template>

<script>
import TrafficLights from '../components/TLights.vue';
import { useRouter } from 'vue-router';
import { onUnmounted, watch, ref, computed, onMounted } from '@vue/runtime-core';
import useDelay from '../hooks/useDelay';
import useStorage from '../hooks/useStorage';

export default {
  components:{ TrafficLights },
  setup() {
    const { timer, destroyTimer } = useDelay();
    const { setStorageLight, setStorageTimer, storageTimer, storageLight } = useStorage();

    const router = useRouter();
    const prevRoute = router.options.history.state.back;
    const ligthTimer = computed(() => lightDuration.value - timer.value)

    const lightDuration = storageTimer && storageLight === 'yellow' ? ref(storageTimer) : ref(3);

    watch(timer, () => {
      if(timer.value === lightDuration.value && prevRoute === '/red') router.push('green');
      if(timer.value === lightDuration.value && prevRoute === '/green') router.push('red');
      if(timer.value === lightDuration.value && !prevRoute) router.push('green');
      setStorageTimer(JSON.stringify(ligthTimer.value))
    });

    onMounted(() => setStorageLight('yellow'));
    onUnmounted(destroyTimer)

    return { ligthTimer }
  }
}
</script>
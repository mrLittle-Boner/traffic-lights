<template>
  <TrafficLights currentLight="red" :timer="ligthTimer" />
</template>

<script>
import TrafficLights from '../components/TLights.vue';
import { onUnmounted, watch, computed, ref, onMounted } from '@vue/runtime-core';
import { useRouter } from 'vue-router';

import useDelay from '../hooks/useDelay';
import useStorage from '../hooks/useStorage';

export default {
  components:{ TrafficLights },
  setup() {
    const router = useRouter();
    const { timer, destroyTimer } = useDelay();
    const { setStorageLight, setStorageTimer, storageTimer, storageLight } = useStorage();

    const ligthTimer = computed(() => lightDuration.value - timer.value)
    const lightDuration = storageTimer && storageLight === 'red' ? ref(storageTimer) : ref(10);

    watch(timer, () => {
      if(timer.value === lightDuration.value) router.push('yellow');
      setStorageTimer(JSON.stringify(ligthTimer.value))
    });

    onMounted(() => setStorageLight('red'));
    onUnmounted(destroyTimer)

    return { ligthTimer }
  }
}
</script>
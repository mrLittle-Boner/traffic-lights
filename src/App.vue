<template>
  <router-view></router-view>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
export default {
  setup(){
    const router = useRouter();
    onMounted(() => { if(router.options.history.location === '/') router.push('green') });
  }
}
</script>

<style>
  *,*::before,*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
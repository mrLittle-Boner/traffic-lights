<template>
  <div>
    <h1>I`am Root Component</h1>
    <p>{{ helloMessage }}</p>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup() {
    const helloMessage = ref('Privet Andrey');

    return {
      helloMessage,
    }
  },
}
</script>

<style>
  *,*::before,*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
<template>
  <div class="background">
    <div class="traffic-lights">
      <SingleLight 
        v-for="(light,index) in lights" 
        :key="index" 
        :light="light" 
        :currentLight="currentLight" 
        :timer="timer"
      />     
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import SingleLight from './TSingleLight.vue'
export default {
  props:{
    currentLight:{
      type: String,
    },
    timer: {
      type: Number,
    }
  },
  components: {
    SingleLight
  },
  setup(){
    const lights = ref(['red', 'yellow', 'green'])

    return { lights }
  }
}
</script>

<style scoped>
  .background {
    background: linear-gradient(#08f, #fff);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  .traffic-lights {
    width: 300px;
    height: 600px;
    background-color: #222;
    border: 5px solid #333;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
</style>
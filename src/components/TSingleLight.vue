<template>
  <div class="shape" >
    <div class="background" :class="[light, active, active && blinkingLight]"></div>
    <span class="light-timer" v-if="light === currentLight" >{{ timer }}</span>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
export default {
  props:{
    currentLight:{
      type: String
    },
    light:{
      type: String
    },
    timer: {
      type: Number
    }
  },
  setup(props) {
    const active = computed(() => props.light === props.currentLight ? 'active' : '' );
    const blinkingLight = computed(() => props.timer <= 3 ? 'blinking' : "");

    return { active, blinkingLight }
  }
}
</script>

<style scoped>
  .shape {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .background {
    opacity: .5;
    position: absolute;
    top: 0; bottom: 0; right: 0; left: 0;
  }
  .red {
    background-color: rgb(255, 0, 0);
  }
  .yellow {
    background-color: rgb(255, 238, 0);
  }
  .green {
    background-color: rgb(0, 255, 13);
  }
  .active {
    opacity: 1;
  }
  .light-timer {
    font-size: 65px;
    color: whitesmoke;
    z-index: 5;
  }
  @keyframes blink {
    from {
      opacity: 1;
    }
    to {
      opacity: .5;
    }
  }
  .blinking {
    animation: blink .5s ease infinite alternate;
  }
</style>
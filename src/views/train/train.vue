<template>
  <div>
    <train-header></train-header>
    <train-main></train-main>
  </div>
</template>

<script>
import TrainHeader from './components/TrainHeader.vue';
import TrainMain from './components/TrainMain.vue';
export default {
  name: 'Train',
  components: {
    TrainHeader,
    TrainMain
  }
};
</script>

<template>
  <div>
    <algo-service-header></algo-service-header>
    <algo-service-main></algo-service-main>
  </div>
</template>

<script>
import AlgoServiceHeader from './components/AlgoServiceHeader.vue';
import AlgoServiceMain from './components/AlgoServiceMain.vue';
export default {
  name: 'AlgoService',
  components: {
    AlgoServiceHeader,
    AlgoServiceMain
  }
};
</script>

<template>
  <div>
    <list-component v-for="data in GLOBAL.k8sMonitorList" :key="data.id" :title="data.name"></list-component>
  </div>
</template>

<script>
import ListComponent from './ListComponent';
export default {
  name: 'k8sMonitorMain',
  components: {
    ListComponent
  }
};
</script>

<style scoped>
</style>

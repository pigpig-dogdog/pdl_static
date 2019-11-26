<template>
  <div>
    <datasets-header></datasets-header>
    <datasets-main></datasets-main>
  </div>
</template>

<script>
import DatasetsHeader from './components/DatasetsHeader.vue';
import DatasetsMain from './components/DatasetsMain.vue';
export default {
  name: 'Datasets',
  components: {
    DatasetsHeader,
    DatasetsMain
  }
};
</script>

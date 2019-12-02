<template>
  <div>
    <detail-header></detail-header>
    <detail-main></detail-main>
  </div>
</template>

<script>
import DetailHeader from '../detail-components/DetailHeader';
import DetailMain from '../detail-components/DetailMain';
export default {
  name: 'DatasetDetail',
  components: {
    DetailHeader,
    DetailMain
  }
};
</script>

<template>
  <div>
    <resources-header></resources-header>
    <resources-main></resources-main>
  </div>
</template>

<script>
import ResourcesHeader from './components/ResourcesHeader';
import ResourcesMain from './components/ResourcesMain';
export default {
  name: 'K8s',
  components: {
    ResourcesHeader,
    ResourcesMain
  }
};
</script>

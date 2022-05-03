<template>
  <main>
    <PageHomeBriefBanner />
    <PageHomeOrangeBanner />
    <PageHomeGaleryBanner />
    <PageHomeStatsBanner />
    <PageHomeBubbleBanner />
    <PageHomePhraseBanner />
    <PageHomeNumberBanner />
    <PageHomeTicksBanner />
    <PageHomeImagesBanner />
    <PageHomeForm />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>
<style lang="scss" scoped>
@import 'utilities/debug';
@import 'core/query';
</style>

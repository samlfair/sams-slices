<template>
  <prismic-embed :field="slice.primary.link" />
</template>

<script>
export default {
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
::v-deep iframe {
  width: 100%;
  height: auto;
}
</style>

<template>
  <div class="slice-text-block">
    <prismic-rich-text :field="slice.primary.content" />
  </div>
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
.slice-text-block {
  display: block;
}
</style>

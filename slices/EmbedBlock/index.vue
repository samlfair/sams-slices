<template>
  <!-- <prismic-embed :field="slice.primary.link" /> -->
  <div v-html="htmlWithoutDimensions" :style="aspectRatioStyle"></div>
</template>

<script>
export default {
  name: "EmbedBlock",
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      htmlWithoutDimensions: null,
      aspectRatioStyle: null
    };
  },
  methods: {
    removeDimensions() {
      const { html } = this.slice.primary.link;
      const widthRegex = /width="(...)"/;
      const heightRegex = /height="(...)"/;
      const width = html.match(widthRegex)[1];
      const height = html.match(heightRegex)[1];
      this.setAspectRatio(width, height);
      const withoutWidth = html.replace(widthRegex, ``);
      const withoutHeight = withoutWidth.replace(heightRegex, "");
      this.htmlWithoutDimensions = withoutHeight;
    },
    setAspectRatio(width, height) {
      this.aspectRatioStyle = { aspectRatio: width / height };
    }
  },
  mounted() {
    this.removeDimensions();
  }
};
</script>

<style scoped>
::v-deep iframe {
  width: 100%;
  height: 100%;
}
</style>

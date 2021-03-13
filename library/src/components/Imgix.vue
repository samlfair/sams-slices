<template>
  <div ref="image">
    <img
      :width="offsetWidth"
      :height="height"
      :style="{ width: '100%' }"
      :src="root + `?w=` + offsetWidth"
      :alt="alt"
    />
  </div>
</template>

<script>
export default {
  name: "Imgix",
  props: {
    imageUrl: String,
    width: Number,
    height: Number,
    alt: String
  },
  data() {
    return {
      blur: null,
      offsetWidth: null
    };
  },
  computed: {
    root() {
      return this.imageUrl.split("?").shift();
    },
    blurUrl() {
      return `${this.root}?fm=blurhash`;
    }
  },
  async fetch() {
    this.blur = await this.$http.$get(`${this.root}?fm=blurhash`);
  },
  mounted() {
    this.getWidth();
  },
  methods: {
    getWidth() {
      this.offsetWidth = this.$refs["image"].offsetWidth;
    }
  }
};
</script>

<style scoped>
img {
  width: 100%;
  height: auto;
  display: block;
}
</style>

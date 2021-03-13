<template>
  <div class="slice-post-feed">
    <div v-if="posts.length > 0">
      <div class="post" v-for="post in posts" :key="post.id">
        <slice-zone :type="post.type" :uid="post.uid" />
      </div>
    </div>
  </div>
</template>

<script>
import SliceZone from "vue-slicezone";

export default {
  name: "PostFeed",
  data() {
    return {
      posts: []
    };
  },
  components: {
    SliceZone
  },
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {};
      }
    }
  },
  async fetch() {
    const { customTypeId } = this.slice.primary;
    const queryParam =
      customTypeId &&
      this.$prismic.predicates.at("document.type", customTypeId);
    const response = await this.$prismic.api.query(queryParam);
    // Guard against feedback loops
    this.posts = response.results.filter(post => {
      return !post.data.body.find(slice => {
        return slice.slice_type === "post_feed";
      });
    });
  }
};
</script>

<style scoped></style>

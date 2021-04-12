<template>
  <div class="slice-post-feed">
    <div v-if="posts.length > 0">
      <article class="post" v-for="post in posts" :key="post.id">
        <time
          class="date"
          :datetime="formatDatetime(post.first_publication_date)"
          >{{ formatDate(post.first_publication_date) }}</time
        >
        <slice-zone :type="post.type" :uid="post.uid" />
      </article>
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
    const response = await this.$prismic.api.query(queryParam, {
      orderings: "[document.first_publication_date desc]"
    });
    // Guard against feedback loops
    this.posts = response.results.filter(post => {
      return !post.data.body.find(slice => {
        return slice.slice_type === "post_feed";
      });
    });
  },
  methods: {
    formatDate: function(date) {
      const dateObject = this.$prismic.asDate(date);
      return dateObject.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
      });
    },
    formatDatetime: function(date) {
      const dateObject = this.$prismic.asDate(date);
      return dateObject.toISOString();
    }
  }
};
</script>

<style scoped></style>

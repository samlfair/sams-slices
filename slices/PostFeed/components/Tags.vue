<template>
  <div>
    <span
      class="tag"
      v-for="tag in post.data[tagGroup]"
      :key="tag[tagType].uid"
    >
      {{ tag[tagType].data.display_name }}
    </span>
  </div>
</template>

<script>
export default {
  name: "Tags",
  props: {
    tagType: String,
    tagGroup: String,
    post: Object
  }
};
</script>

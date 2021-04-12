<template>
  <div class="slice-text-block">
    <prismic-rich-text
      :htmlSerializer="htmlSerializer"
      :field="slice.primary.content"
    />
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
  },
  methods: {
    htmlSerializer: function(type, element, content, children) {
      if (type === "paragraph") {
        const arrayReplaced = children.map(child => {
          if (!child.match(/<a.+\/a>/)) {
            const urlsReplaced = child.replace(
              /(http:\/\/|https:\/\/)\S+/gi,
              match => {
                const regex = /(http:\/\/)?(https:\/\/)?(www)?/i;
                let anchor = match.replace(regex, "");
                if (anchor.length > 19) anchor = anchor.slice(0, 19);
                return `<a href="${match}">${anchor}...</a>`;
              }
            );
            return urlsReplaced;
          } else {
            return child;
          }
        });
        return `<p>${arrayReplaced.join("")}</p>`;
      }
      return null;
    }
  }
};
</script>

<style scoped>
.slice-text-block {
  display: block;
}
</style>

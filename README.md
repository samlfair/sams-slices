# Sam's Simple Slices

This is the working project for developing a Slice Library with Prismic and Nuxt.

Currently, it has:

- [x] An Imgix masonry image row
- [x] A text block
- [ ] Add gap spacing to masonry row
- [ ] Remove grey from bottom of images
- [ ] An embed
- [ ] A vertical image masonry
- [ ] Text and image banner
- [ ] Image with caption at side
- [ ] Squiggly spacer
- [ ] Image grid

# To implement, ensure:

- CSS Reset is set in nuxt.config.js > css

# How to style

Slice styles are set in the layout files, using `::v-deep`:

```scss
::v-deep {
  .slice-text-block {
    color: red;
  }
}
```

# Sam's Simple Slices

This is the working project for developing a Slice Library with Prismic and Nuxt.

Currently, it has:

- [x] An Imgix masonry image row
- [x] A text block
- [ ] Make `linkDates` work / refactor dateline
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

# To enable tags in the postlist

Your post Custom Type must have a Group field with a Content Relationship linking to a taxonomy.

In `nuxt.config.js`, add a property `samsSlices` with the API ID of the Group field and the taxonomy Custom Type:

```js
samsSlices: {
  tagType: "tag",
  tagGroup: "tags",
}
```

# To display dates in the postlist

In `nuxt.config.js`, add a `showDates` property to the `samsSlices` object:

```js
samsSlices: {
  showDates: true;
}
```

# To enable links on dates

Set `showDates` to true (as above), include a Route Resolver in `nuxt.config.js`, and set the `linkDates` property:

```js
samsSlices: {
  showDates: true,
  linkDates: true
}
```

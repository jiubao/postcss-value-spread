# PostCSS Value Spread [![Build Status][ci-img]][ci]

[PostCSS] plugin that spread style values.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/jiubao/postcss-value-spread.svg
[ci]:      https://travis-ci.org/jiubao/postcss-value-spread

```css
/* Input example */
.foo {
  border: solid 1px #ccc;
}
.boo {
  border-top: solid 1px #ccc;
}
```

```css
/* Output example */
.foo {
  border-width: 1px;
  border-style: solid;
  border-color: #ccc;
}
.boo {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #ccc;
}
```

## Usage

```js
postcss([ require('postcss-value-spread') ])
```

See [PostCSS] docs for examples for your environment.

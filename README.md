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
.poo {
  padding: 2px 3px 4px;
}
.moo {
  margin: 2px 3px;
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
.poo {
  padding-top: 2px;
  padding-right: 3px;
  padding-bottom: 4px;
  padding-left: 3px;
}
.moo {
  margin-top: 2px;
  margin-right: 3px;
  margin-bottom: 2px;
  margin-left: 3px;
}
```

## Usage

```js
postcss([ require('postcss-value-spread') ])
```

See [PostCSS] docs for examples for your environment.
